FROM docker.io/library/node:24-slim

RUN set -x \
    && npm install -g -D playwright@latest \
    && playwright install chromium firefox --only-shell --with-deps
