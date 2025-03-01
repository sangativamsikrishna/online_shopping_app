FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port for Vite's dev server
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
