import { Embed } from "https://deno.land/x/embed/mod.ts";
import embedObj from "./embed.json" assert { type: "json" };
const embed = Embed.fromImported(embedObj);

console.log("embed:", embed);

// Read a file into a Uint8Array.
let bytes = embed.readFile("assets\\embedded.txt");
console.log(bytes);

// Read a text file into a string.
let text = embed.readTextFile("assets\\embedded.txt");
console.log(text);

// Walk a directory structure.
for (const entry of embed.walk("assets")) {
  console.log(entry)
  console.log(entry.path, JSON.stringify(new TextDecoder().decode(entry.contents)));
}
