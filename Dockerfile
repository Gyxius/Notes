# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (to optimize layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Start the application
# CMD ["npm", "start"]
CMD ["npx", "webpack", "serve"]

# docker run -p 8080:8080 notes