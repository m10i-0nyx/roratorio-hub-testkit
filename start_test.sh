#!/bin/bash

podman build --tag playwright:latest \
  --force-rm \
  -f Containerfile .

# Remove dangling images
podman image ls --filter "dangling=true" -q | xargs -r podman image rm

podman run -it --rm \
  --name testing-playwright \
  --network=host \
  -v $(pwd):/work \
  -w /work \
  localhost/playwright:latest \
  npx playwright test
