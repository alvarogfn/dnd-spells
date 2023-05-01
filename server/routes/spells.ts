import data from "public/spells.json";
import { Spell } from "~/models/Spell";
import Fuse from "fuse.js";

const spells: Spell[] = data.sort((a, b) => a.id - b.id);

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (Object.keys(query).length === 0) return spells;

  if (!compareKeys(query, spells[0])) {
    setResponseStatus(event, 400);
    return {
      message: `Valores de query válidos: ${Object.keys(spells[0]).join(
        ", "
      )}.`,
    };
  }

  const fuse = new Fuse(spells, {
    shouldSort: true,
    isCaseSensitive: false,
    keys: Object.keys(spells[0]),
    includeScore: true,
  });

  const result = fuse.search({ $and: [query] });

  return result.map((value) => value.item);
});
