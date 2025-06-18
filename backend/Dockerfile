FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ensure Prisma client is generated at build time (for production images)
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# Also generate Prisma client at container start (for dev with volume mounts)
# This ensures the client is always up-to-date, even if code changes are mounted in
CMD ["sh", "-c", "npx prisma generate && npm run start:prod"]