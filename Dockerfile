# Use uma imagem base do Node.js
FROM node:14.19.0-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta que o servidor NestJS está ouvindo (se você alterou a porta, ajuste aqui)
EXPOSE 3000

# Comando para iniciar o servidor NestJS
#CMD ["npm", "run", "start"]
#CMD ["node", "dist/main"]
CMD npm run start:dev