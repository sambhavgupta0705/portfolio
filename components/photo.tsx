import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/** True if /public/<dir>/<file> exists. Runs on the server at build/render time. */
export function publicFileExists(dir: string, file: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", dir, file));
}

/** A photo from /public, or the striped "photo soon" placeholder when the file is missing. */
export function Photo({ dir, file, alt, sizes }: { dir: string; file: string; alt: string; sizes: string }) {
  if (!publicFileExists(dir, file)) {
    return (
      <div className="photo" role="img" aria-label={`${alt}: photo coming soon`}>
        <span aria-hidden="true">photo soon</span>
      </div>
    );
  }
  return (
    <div className="photo">
      <Image src={`/${dir}/${file}`} alt={alt} fill sizes={sizes} />
    </div>
  );
}
