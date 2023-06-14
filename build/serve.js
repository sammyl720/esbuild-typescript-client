import esbuild from 'esbuild';
import { createBuildSettings } from '../settings.js';

const serverDirectory = process.env.SERVER_DIRECTORY || 'www';
const PORT = process.env.PORT || 5500;
console.log('port: ', PORT)

const settings = createBuildSettings({ 
  sourcemap: true,
  banner: {
    js: `new EventSource('/esbuild').addEventListener('change', () => location.reload())`,
  }
});

const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: Number(PORT),
  servedir: serverDirectory
});

console.log(`Serving app at ${host}:${port}.`);