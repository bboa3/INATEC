FROM node:lts-alpine

# Create app directory
RUN mkdir -p /home/inatec/server/node_modules && chown -R node:node /home/inatec/server
WORKDIR /home/inatec/server

COPY package.json package-lock.* ./
USER node
RUN npm add

COPY --chown=node:node . .

EXPOSE 3002
CMD ["npm", "run", "prod"]