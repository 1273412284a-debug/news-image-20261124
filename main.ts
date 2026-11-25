// news-image-20261124 entry (Node 22, standard library only).
// The image is pre-built and stored as entry.png beside this file;
// this program just copies it to the output directory as entry.png.
// The output directory is created first if it does not exist yet,
// so the program also works when MAKEFUN_OUTPUT_DIR points at a
// fresh path; it writes the same bytes on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
