FROM docker.io/library/node:24-slim

WORKDIR /opt/workspace
COPY playwright.config.ts .
COPY package*.json .
COPY LICENSE .

RUN set -x \
    && apt-get update \
    && apt-get install -y curl \
    && npm install -g npm \
    && npm install -g -D playwright@latest \
    && npm install -D @playwright/test \
    && playwright install chromium firefox --only-shell --with-deps

ENV BASE_URL="http://localhost/roratorio-hub/ro4/m/calcx.html"
COPY tests/ tests/

CMD ["npx", "playwright", "test"]
