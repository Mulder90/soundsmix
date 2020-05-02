import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const soundsDirectory = join(process.cwd(), "_sounds");

export function getSoundSlugs() {
  return fs.readdirSync(soundsDirectory);
}

export function getSoundBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(soundsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllSounds(fields = []) {
  const slugs = getSoundSlugs();
  return slugs.sort().map((slug) => getSoundBySlug(slug, fields));
}
