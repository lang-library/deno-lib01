import {E} from "jsr:@nfnitloop/deno-embedder@1.6.1/embed.ts"

export default E({
  "embedded.txt": () => import("./_embedded.txt.ts"),
})
