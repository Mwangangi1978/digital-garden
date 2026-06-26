#!/usr/bin/env bash

set -euo pipefail

main() {
  local HUGO_VERSION
  local BASE_URL
  local TMP_DIR

  HUGO_VERSION="${HUGO_VERSION:-0.153.2}"
  export TZ="${TZ:-Europe/Oslo}"

  if ! command -v hugo >/dev/null 2>&1; then
    echo "Hugo not found in PATH. Installing Hugo ${HUGO_VERSION}..."
    mkdir -p "${HOME}/.local" "${HOME}/.local/hugo"
    TMP_DIR="$(mktemp -d)"
    trap 'rm -rf "${TMP_DIR}"' EXIT

    curl -fsSL -o "${TMP_DIR}/hugo.tar.gz" \
      "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
    tar -C "${HOME}/.local/hugo" -xf "${TMP_DIR}/hugo.tar.gz"
    export PATH="${HOME}/.local/hugo:${PATH}"
  fi

  echo "Using $(hugo version)"

  if [ -n "${VERCEL_PROJECT_PRODUCTION_URL:-}" ]; then
    BASE_URL="https://${VERCEL_PROJECT_PRODUCTION_URL}"
  else
    BASE_URL="${HUGO_BASEURL:-https://denismwangangi.com/}"
  fi

  echo "Building site with baseURL: ${BASE_URL}"
  hugo --gc --minify --baseURL "${BASE_URL}"

  echo "Indexing site with pagefind..."
  npx -y pagefind --site public
}

main "$@"