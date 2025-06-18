<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AgriLink Backend README</title>
</head>
<body>
  <h1>AgriLink Backend</h1>
  <p>
    Backend service for AgriLink, built with
    <a href="https://nestjs.com/">NestJS</a>,
    <a href="https://www.prisma.io/">Prisma ORM</a>, and
    <a href="https://www.postgresql.org/">PostgreSQL</a>.
  </p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#common-commands">Common Commands</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>User registration and authentication (JWT)</li>
    <li>Role-based access (Admin, Farmer, Buyer, etc.)</li>
    <li>Product and order management</li>
    <li>PostgreSQL database with Prisma ORM</li>
    <li>API documentation with Swagger (auto-generated)</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li><strong>Node.js</strong> (v18+)</li>
    <li><strong>NestJS</strong> (v11+)</li>
    <li><strong>Prisma ORM</strong> (v6+)</li>
    <li><strong>PostgreSQL</strong> (v15+)</li>
    <li><strong>Docker &amp; Docker Compose</strong></li>
  </ul>

  <h2 id="getting-started">Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li><a href="https://www.docker.com/get-started">Docker</a> &amp; <a href="https://docs.docker.com/compose/">Docker Compose</a></li>
    <li>(Optional) <a href="https://nodejs.org/">Node.js</a> and <a href="https://www.npmjs.com/">npm</a> for local development</li>
  </ul>

  <h3>Environment Variables</h3>
  <p>Copy <code>.env,example</code> to <code>.env</code> and fill in the required values:</p>
  <pre><code>cp .env,example .env</code></pre>
  <p><strong>Key variables:</strong></p>
  <ul>
    <li><code>DATABASE_URL</code> – PostgreSQL connection string</li>
    <li><code>JWT_SECRET</code> – Secret for JWT signing</li>
    <li><code>SUPABASE_URL</code> and <code>SUPABASE_KEY</code> – (if using Supabase)</li>
  </ul>

  <h3>Running Locally (with Docker)</h3>
  <ol>
    <li>
      <strong>Build and start the services:</strong>
      <pre><code>docker-compose up --build</code></pre>
    </li>
    <li>
      <strong>Apply database migrations:</strong>
      <br>In a new terminal:
      <pre><code>docker-compose exec backend npx prisma migrate dev --name init</code></pre>
      <em>If you change the schema, re-run this command with a new migration name.</em>
    </li>
    <li>
      <strong>Access the API:</strong>
      <ul>
        <li>API: <a href="http://localhost:3000">http://localhost:3000</a></li>
        <li>Swagger docs: <a href="http://localhost:3000/api">http://localhost:3000/api</a></li>
      </ul>
    </li>
  </ol>

  <h3>Database Migrations</h3>
  <ul>
    <li>
      <strong>Create &amp; apply migration:</strong>
      <pre><code>docker-compose exec backend npx prisma migrate dev --name &lt;migration-name&gt;</code></pre>
    </li>
    <li>
      <strong>Reset database (development only):</strong>
      <pre><code>docker-compose exec backend npx prisma migrate reset --force</code></pre>
    </li>
  </ul>

  <h2 id="project-structure">Project Structure</h2>
  <pre><code>backend/
├── src/                # NestJS source code
│   ├── auth/           # Auth module (JWT, guards, strategies)
│   ├── prisma/         # Prisma service/module
│   ├── ...             # Other modules
├── prisma/             # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── .env                # Environment variables
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
</code></pre>

  <h2 id="common-commands">Common Commands</h2>
  <ul>
    <li><strong>Start in dev mode:</strong>
      <pre><code>npm run start:dev</code></pre>
    </li>
    <li><strong>Build:</strong>
      <pre><code>npm run build</code></pre>
    </li>
    <li><strong>Lint:</strong>
      <pre><code>npm run lint</code></pre>
    </li>
    <li><strong>Run tests:</strong>
      <pre><code>npm test</code></pre>
    </li>
  </ul>

  <h2 id="troubleshooting">Troubleshooting</h2>
  <ul>
    <li>
      <strong>Prisma errors about missing columns/tables:</strong>
      <pre><code>docker-compose exec backend npx prisma migrate dev --name sync</code></pre>
    </li>
    <li>
      <strong>Database connection issues:</strong>
      <br>Ensure the <code>db</code> service is running and <code>DATABASE_URL</code> is correct.
    </li>
    <li>
      <strong>Prisma client not generated:</strong>
      <pre><code>docker-compose exec backend npx prisma generate</code></pre>
    </li>
  </ul>

  <h2 id="contributing">Contributing</h2>
  <ol>
    <li>Fork the repo and create your feature branch.</li>
    <li>Commit your changes and push to your branch.</li>
    <li>Open a pull request!</li>
  </ol>

  <p><em>For any questions, ask in the team chat or check the code comments!</em></p>
</body>
</html>
