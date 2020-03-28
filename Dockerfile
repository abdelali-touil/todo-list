# use an officiel docker node image (version 10)
FROM node:10

# create application directory
WORKDIR /usr/src/app

# ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# install application dependencies
RUN npm install

# build code for production
# RUN npm ci --only=production

# copy the application sources
COPY . .

# expose the port used by the application
EXPOSE 8080

# execute the application
CMD [ "node", "index.js" ]

