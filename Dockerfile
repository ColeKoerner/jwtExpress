FROM node:slim

COPY . .
RUN npm install
RUN chmod 777 .
EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]