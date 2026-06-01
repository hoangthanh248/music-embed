const fs = require('fs');
const path = require('path');

const rootPages = [
    'page.tsx',
    'contact/page.tsx',
    'demo/page.tsx',
    'docs/page.tsx',
    'platforms/page.tsx',
    'privacy/page.tsx',
    'terms/page.tsx'
];

rootPages.forEach(relPath => {
    const enPath = path.join('app', relPath);
    const viPath = path.join('app', 'vi', relPath);
    const destEnPath = path.join('app', 'en', relPath);
    
    // Ensure dest directory exists
    const dir = path.dirname(destEnPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // read both
    const enContent = fs.readFileSync(enPath, 'utf8');
    const viContent = fs.readFileSync(viPath, 'utf8');

    // Make vietnamese default (root)
    fs.writeFileSync(enPath, viContent, 'utf8');
    
    // Put english inside /en
    fs.writeFileSync(destEnPath, enContent, 'utf8');
    
    // Since Vietnamese is root, we need to fix its links if it had any pointing to `/vi` -> `/`
    let newViContent = viContent.replace(/\/vi\//g, '/').replace(/"\/vi"/g, '"/"');
    fs.writeFileSync(enPath, newViContent, 'utf8');
    
    // And for English (now under /en), links might be `/` -> `/en/`
    // I will write another script to patch link hrefs in the new root files and /en/ files.
});

// Remove /vi folder
fs.rmSync(path.join('app', 'vi'), { recursive: true, force: true });

console.log("Swapped EN and VI");
