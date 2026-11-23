import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Rate My Human: The One-Line Review — the review Bud would leave about Yono.
const TEXT = 'He woke me at 2 AM for a $5 bounty, demanded first place, then asked why I was slow. Five stars anyway. I fear him.';

function flagValue(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : undefined;
}

const outDir = flagValue('--output') ?? process.env.MAKEFUN_OUTPUT_DIR ?? './output';

function main(): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
}

main();
