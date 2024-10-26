# Use an official node image as a parent image.
FROM node:16-alpine

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package.json ./

RUN npm install

# Copy the project files.
COPY . .

# Expose the port the app runs on.
EXPOSE 3001

# Run the application.
CMD ["npm", "run", "dev"]


# # Stage 1: Build the React app
# FROM node:14 AS builder
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the React app
# FROM node:14
# WORKDIR /app
# COPY --from=builder /app/build ./build
# RUN npm install -g serve
# CMD ["serve", "-s", "build"]