# Use the official Node.js image as base
FROM node:latest AS development

ENV NODE_ENV development

# Set working directory
WORKDIR /jordan_zachery_ui_garden

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose port 7775
EXPOSE 8083

# Run the web application
CMD ["npm", "run", "storybook", "--", "--port", "8083"]