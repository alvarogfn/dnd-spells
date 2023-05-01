import data from "public/spells.json";
import { Spell } from "~/models/Spell";

const spells: Spell[] = data;

export default defineEventHandler((event) => {
  const param = getRouterParams(event) as { id: string };

  spells.filter;

  return spells.filter((spell) => spell.id === parseInt(param.id));
});
