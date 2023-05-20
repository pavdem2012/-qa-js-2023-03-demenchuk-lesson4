FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY jest.config.js jest.config.js
COPY babel.config.json babel.config.json
COPY src ./src
COPY specs ./specs
COPY framework ./framework

CMD [ "npm", "test" ]


# Если изменю файл jest.config.js какой слой будет кэшироваться, а какой останется.

# FROM - забери образ
# СOPY - скопируй из хоста внутрь контейнера.
# RUN - запусти команду.
# CMD - это команда, которая выполнится при запуске контейнера


# # Мы берем за основу образ node:alpine(alpine минимально необходимый linux-об)
# FROM node:alpine
# # Это будет linux с установленной nodejs

# # Выбираем рабочую папку
# WORKDIR /usr/src/app # делает snapshot файловой системы

# # Копирую все файлы внутрь контейнера
# COPY . . # делает snapshot файловой системы

# # Устанавливаю зависимости
# RUN npm i # делает snapshot файловой системы

# # Прописываю команду, которая выполнится при старте контейнера
# CMD [ "npm", "test" ]
