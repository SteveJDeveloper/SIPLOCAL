#Version de la imagen node
FROM node:16

#Definir directorio de trabajo
WORKDIR /app/websip

#Copia de los packaje al directorio de trabajo 
#para desacargar dependencias
COPY package*.json ./

#Ejecuta NPM para descargar las dependencias
#se crea node modules
RUN npm install

#Copia todo el contenido al directorio de /app
COPY . .

#Ejecuta el comando para iniciar al app
CMD [ "npm", "start"]

#Expone el puerto que escucha la imagen
EXPOSE 2000