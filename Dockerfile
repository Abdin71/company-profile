# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Define the start command
CMD ["npm", "start"]