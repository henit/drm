/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Because __dirname is not directly available in mjs-files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, './node_modules')]
  }
};

export default nextConfig;
