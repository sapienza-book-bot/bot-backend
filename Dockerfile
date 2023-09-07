FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", "./.env", "./"]

# Copies everything in the src directory to WORKDIR/src
# COPY ./src ./src

# Copies everything in the prisma directory to WORKDIR/prisma
COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

# Installs all packages

COPY . .

# Runs the dev npm script to build & start the server
RUN npm run build

EXPOSE  4000

CMD [ "node", "app" ]