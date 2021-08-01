FROM node:14-alpine as build-stage

WORKDIR /app

# Copy the code
COPY . .

# Install all dependencies
RUN yarn

# Build the bundle
RUN yarn build
RUN yarn cache clean

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY ci_cd/nginx.conf /etc/nginx/conf.d/default.conf


