# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /lastName_firstName_ui_garden_build_checks

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose port 8018
EXPOSE 8018

# Run Storybook when the container starts
CMD ["npm", "run", "storybook"]
