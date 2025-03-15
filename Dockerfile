FROM oven/bun:alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat fontconfig ttf-dejavu ttf-droid ttf-freefont ttf-liberation

WORKDIR /app

COPY package.json bun.lockb yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f bun.lockb ]; then bun i; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_VERSION
ARG NEXT_PUBLIC_BASE_API_URL
ARG NEXT_PUBLIC_COOKIE_DOMAIN
ARG NEXT_PUBLIC_LOCALHOST_API_URL
ARG NEXT_PUBLIC_REFRESH_TOKEN_TIMEOUT

ENV NEXT_PUBLIC_API_VERSION ${NEXT_PUBLIC_API_VERSION}
ENV NEXT_PUBLIC_BASE_API_URL ${NEXT_PUBLIC_BASE_API_URL}
ENV NEXT_PUBLIC_COOKIE_DOMAIN ${NEXT_PUBLIC_COOKIE_DOMAIN}
ENV NEXT_PUBLIC_LOCALHOST_API_URL ${NEXT_PUBLIC_LOCALHOST_API_URL}
ENV NEXT_PUBLIC_REFRESH_TOKEN_TIMEOUT ${NEXT_PUBLIC_REFRESH_TOKEN_TIMEOUT}

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f bun.lockb ]; then bun run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
