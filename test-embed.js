#! /usr/bin/env deno-run
import assets from "./embed/assets/dir.ts";

let readme = await assets.load("embedded.txt");
console.log("embedded.txt", await readme.text());
