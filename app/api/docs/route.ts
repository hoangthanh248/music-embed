import { NextResponse } from 'next/server';

export const runtime = 'edge';

const openApiSpec = {
  openapi: "3.1.0",
  info: {
    title: "Music Embed Proxy API",
    version: "1.0.0",
    description: "API Proxy to embed music from various platforms without middleman tracking."
  },
  servers: [
    { url: "/api" }
  ],
  paths: {
    "/embed/resolve": {
      post: {
        summary: "Resolve Music URL to Embed Data",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  url: { type: "string", format: "uri" }
                }
              }
            }
          }
        },
        responses: {
          "200": { description: "Success" }
        }
      }
    },
    "/oembed": {
      get: {
        summary: "Get oEmbed Metadata",
        parameters: [
          { name: "url", in: "query", required: true, schema: { type: "string" } }
        ],
        responses: {
          "200": { description: "Success" }
        }
      }
    },
    "/embed": {
      get: {
        summary: "Get HTML Iframe string",
        parameters: [
          { name: "url", in: "query", required: true, schema: { type: "string" } }
        ],
        responses: {
          "200": { description: "HTML String" }
        }
      }
    },
    "/stream": {
      get: {
        summary: "Stream Card / Native HTML Player",
        parameters: [
          { name: "url", in: "query", required: true, schema: { type: "string", format: "uri" } }
        ],
        responses: {
          "200": { description: "HTML Stream Player" }
        }
      }
    },
    "/og": {
      get: {
        summary: "Get Open Graph Data",
        parameters: [
          { name: "url", in: "query", required: true, schema: { type: "string" } }
        ],
        responses: {
          "200": { description: "Success" }
        }
      }
    }
  }
};

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swagger UI - Music Embed Proxy API</title>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css" />
  <style>
    body { margin: 0; padding: 0; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      const ui = SwaggerUIBundle({
        spec: ${JSON.stringify(openApiSpec)},
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    };
  </script>
</body>
</html>
`;

export async function GET() {
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    },
  });
}
