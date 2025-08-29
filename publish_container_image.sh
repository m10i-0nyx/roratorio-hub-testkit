#!/bin/bash

USER_ID=m10i-0nyx

# Build container images
podman build --tag playwright:latest-x64 \
  --platform=linux/amd64 \
  --force-rm \
  -f Containerfile .

podman build --tag playwright:latest-arm64 \
  --platform=linux/arm64 \
  --force-rm \
  -f Containerfile .

# Remove dangling images
podman image ls --filter "dangling=true" -q | xargs -r podman image rm

TOKEN_FILE="${HOME}/.github/push_container_image.txt"
if [[ ! -f "${TOKEN_FILE}" ]]; then
  echo "token file not found: $TOKEN_FILE" >&2
  exit 1
fi

TOKEN="$(cat "${TOKEN_FILE}")"

# 認証スコープ確認（任意）
echo "Checking token scopes..."
curl -sI -H "Authorization: token ${TOKEN}" https://api.github.com/user | grep -i x-oauth-scopes || true

echo "${TOKEN}" | podman login ghcr.io -u ${USER_ID} --password-stdin

IMAGE_ID_X64="$(podman image ls localhost/playwright:latest-x64 -q)"
if [[ -z "${IMAGE_ID_X64}" ]]; then
  echo "image not found: localhost/playwright:latest-x64" >&2
  exit 1
fi

TARGET="ghcr.io/${USER_ID}/roratorio-hub-testkit/playwright:latest-x64"
podman tag "${IMAGE_ID_X64}" "${TARGET}"
podman push "${TARGET}"

IMAGE_ID_ARM64="$(podman image ls localhost/playwright:latest-arm64 -q)"
if [[ -z "${IMAGE_ID_ARM64}" ]]; then
  echo "image not found: localhost/playwright:latest-arm64" >&2
  exit 1
fi

TARGET="ghcr.io/${USER_ID}/roratorio-hub-testkit/playwright:latest-arm64"
podman tag "${IMAGE_ID_ARM64}" "${TARGET}"
podman push "${TARGET}"
