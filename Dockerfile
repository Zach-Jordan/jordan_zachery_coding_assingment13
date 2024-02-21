# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose port 8083 (the port used by Storybook)
EXPOSE 8083

# Run Storybook when the container starts
CMD ["npm", "run", "storybook"]
