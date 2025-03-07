# Step 1: Build React App
FROM node:14 AS builder

WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install

# Copy semua source code ke dalam container
COPY . .

RUN npm run build

# Step 2: Setup Nginx untuk Serving React App
FROM nginx:alpine

# Copy konfigurasi Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Hapus file default Nginx yang ada
RUN rm -rf /usr/share/nginx/html/*

# Copy hasil build React ke direktori Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]