import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Future me here. The sourdough starter you named Gerald? He's 12 now. I feed him every morning at 7. He outlived the goldfish.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate counts the file at 1-200 chars; the line is 125, so one trailing newline stays under it.
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
