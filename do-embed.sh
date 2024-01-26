#! /usr/bin/env bash
#./assets/embedded.txt
deno run --allow-read --allow-write \
    https://deno.land/x/embed/cli.ts \
    -i assets \
    -o embed.json
