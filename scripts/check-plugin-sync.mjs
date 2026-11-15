import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const sourceRoot = '.agents/skills/prd-writing';
const pluginRoot = 'plugins/prd-writing/skills/prd-writing';
const ignoredSourceFiles = new Set(['agents/openai.yaml']);
const errors = [];

async function collectFiles(root, current = root) {
  const files = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const fullPath = join(current, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(root, fullPath));
    else files.push(relative(root, fullPath));
  }
  return files;
}

const [sourceFiles, pluginFiles] = await Promise.all([
  collectFiles(sourceRoot),
  collectFiles(pluginRoot),
]);
const expectedFiles = sourceFiles.filter((file) => !ignoredSourceFiles.has(file));

for (const file of expectedFiles) {
  try {
    const [source, plugin] = await Promise.all([
      readFile(join(sourceRoot, file)),
      readFile(join(pluginRoot, file)),
    ]);
    if (!source.equals(plugin)) errors.push(`内容不一致: ${file}`);
  } catch {
    errors.push(`插件目录缺少文件: ${file}`);
  }
}

for (const file of pluginFiles) {
  if (!expectedFiles.includes(file)) errors.push(`插件目录存在额外文件: ${file}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Skill 源目录与 Claude 插件镜像一致（${expectedFiles.length} 个文件）。`);
}
