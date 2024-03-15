FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000:5173

CMD [ "npm","run","dev" ]

# Terminal

# docker image build -t react-image:dev .
# docker images
# docker run -p 3000:5173 react-image:dev
