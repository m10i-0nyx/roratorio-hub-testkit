#!/bin/bash

podman build --tag playwright:latest \
  --force-rm \
  -f Containerfile .

# Remove dangling images
podman image ls --filter "dangling=true" -q | xargs -r podman image rm

podman run -it --rm \
  --network=host \
  -v $(pwd):/work \
  -w /work \
  localhost/playwright:latest \
  npx playwright test --timeout 20000 --fully-parallel --trace retain-on-failure
