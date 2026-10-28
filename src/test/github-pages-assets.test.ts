import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = resolve(import.meta.dirname, "../..");

describe("GitHub Pages media", () => {
  it("includes every original image and PDF as a real file", () => {
    const assets = resolve(root, "src/assets");
    const pointers = readdirSync(assets).filter(name => name.endsWith(".asset.json"));
    expect(pointers).toHaveLength(16);
    for (const name of pointers) {
      const pointer = JSON.parse(readFileSync(resolve(assets, name), "utf8"));
      const file = resolve(assets, name.replace(/\.asset\.json$/, ""));
      expect(existsSync(file), name).toBe(true);
      expect(readFileSync(file).length, name).toBe(pointer.size);
    }
  });

  it("uses bundled media rather than Lovable-only pointers", () => {
    for (const name of ["src/routes/index.tsx", "src/lib/kosmos-data.ts", "src/components/site-shell.tsx", "src/components/dog-safety-content.tsx"]) {
      const source = readFileSync(resolve(root, name), "utf8");
      expect(source, name).not.toContain(".asset.json");
    }
  });
});