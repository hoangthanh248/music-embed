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
    const enPath = path.join('app', 'en', relPath);
    if (!fs.existsSync(enPath)) return;
    
    let content = fs.readFileSync(enPath, 'utf8');
    
    // Replace href="/" with href="/en"
    content = content.replace(/href="\/"/g, 'href="/en"');
    
    // Replace href="/contact" with href="/en/contact" etc
    const routes = ['contact', 'demo', 'docs', 'platforms', 'privacy', 'terms'];
    routes.forEach(route => {
        content = content.replace(new RegExp(`href="/${route}"`, 'g'), `href="/en/${route}"`);
    });

    fs.writeFileSync(enPath, content, 'utf8');
});

console.log("Fixed EN links");
