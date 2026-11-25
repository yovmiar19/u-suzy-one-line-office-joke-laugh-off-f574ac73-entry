import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My boss said 'we're a family' and then laid off my cousin, my work wife, and the guy who refills the coffee.";

// Gate for this bounty: /output/entry.txt must be UTF-8 text of 1-200 chars.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}
console.log(`validated entry length: ${LINE.length} chars (gate 1-200)`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
