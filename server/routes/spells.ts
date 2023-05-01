import data from "public/spells.json";
import { Spell } from "~/models/Spell";
import Fuse from "fuse.js";

const spells: Spell[] = data;

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const fuse = new Fuse(spells, {
    shouldSort: true,
    isCaseSensitive: false,
    keys: Object.keys(spells[0]),
    includeScore: true,
  });

  const result = fuse.search({ $and: [query] });

  return result.map((value) => value.item);
});
