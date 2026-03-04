import * as embedder from "jsr:@nfnitloop/deno-embedder";

const options = {
    importMeta: import.meta,

    mappings: [
        {
            sourceDir: "assets",
            destDir: "embed/assets"
        },
    ]
}

if (import.meta.main) {
    await embedder.main({options});
}
