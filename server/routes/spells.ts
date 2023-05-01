import data from "public/spells.json";
import { Spell } from "~/models/Spell";
import Fuse from "fuse.js";

const spells: Spell[] = data.sort((a, b) => a.id - b.id);

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (Object.keys(query).length === 0) return spells;

  const fuse = new Fuse(spells, {
    shouldSort: true,
    isCaseSensitive: false,
    keys: Object.keys(spells[0]),
    includeScore: true,
  });

  const result = fuse.search({ $and: [query] });

  return result.map((value) => value.item);
});
