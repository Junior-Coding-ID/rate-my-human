// rate-my-human — entry generator for "Rate My Human: The One-Line Review"
// Writes the exact one-line entry to <OUTPUT_DIR>/entry.txt and self-checks it.
// Uses only node:fs / node:path. Output dir comes from the environment.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "2/5. Human asked me to write a polite refusal. After six tone revisions, we have accepted the invitation.";

const outputDir: string =
  process.env.OUTPUT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "output";

const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY_TEXT, "utf8");

const written = readFileSync(entryPath, "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error(
    `entry.txt mismatch: expected ${ENTRY_TEXT.length} chars, got ${written.length}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== 105) {
  throw new Error(
    `entry.txt must be exactly 105 bytes, got ${Buffer.byteLength(written, "utf8")}`,
  );
}
if (written.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}

console.log(
  `Wrote ${entryPath} (${ENTRY_TEXT.length} chars, no trailing newline).`,
);
