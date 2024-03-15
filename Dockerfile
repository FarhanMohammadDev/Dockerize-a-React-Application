FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]


# Terminal

# docker image build -t react-image:dev .
# docker images
# docker run -p 5173:3000 react-image:dev