# Build Stage
FROM node:22 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Production Stage
FROM node:22-slim AS production
WORKDIR /app

# Copy necessary files from the build stage
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next

# Install production dependencies
RUN npm ci --only=production

# Start the application
CMD ["node", ".next/standalone/server.js"]
