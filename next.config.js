// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ← still needed for static-export
  output: 'export',

  // ← where to emit your built & exported files
  // this will create ./docs/index.html, ./docs/_next/, etc.
  distDir: 'docs',
};

module.exports = nextConfig;
