FROM node:16

# the folder where docker will copy the files or the docker working Directory
WORKDIR /app
# making sure all the package*.json file are included 
COPY package*.json ./

# the install all dependancies in app to the docker command 
RUN npm install

# copy all the files to the working root directory
COPY . .

# Database Env variable
ENV MONGO_USER =root
ENV DATABSE_PASSWORD =pass
ENV MONGO_DATABASE =SongList
ENV MODE_ENV = 'developement'
# hide the port in the app and expose this port number instead which means the app will hide the apps port number 
EXPOSE 3001
# this is for the run command
CMD ["node","server.js"]