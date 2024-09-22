FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application source code 
COPY . .

# Make port 3000 available 
EXPOSE 3000

# Run the Application
CMD ["npm", "start"]