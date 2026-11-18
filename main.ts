// Entry for make.fun news-image-20261117: copy the pre-rendered
// newspaper front page (entry.png, 1024x1024) to the output directory.
// No network, no randomness: both runs write identical bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
