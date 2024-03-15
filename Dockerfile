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


# How to Push the Image to Docker Hub
# docker login
# docker image tag react-example-image <username>/react-example-image
# docker image tag react-image:dev farhanishappy/daily-mood-tracker
# docker push farhanishappy/daily-mood-tracker