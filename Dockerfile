# Usar la imagen oficial de Node.js como base
FROM node:20

# Configurar directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Compilar el código TypeScript
RUN npx tsc

# Construir la aplicación Next.js
#RUN npm run dev

# Exponer el puerto HTTPS (puerto 443)
#EXPOSE 3000

# Comando para iniciar la aplicación con HTTPS
CMD ["npm", "run", "dev"]

# Comando para iniciar la aplicación con HTTP