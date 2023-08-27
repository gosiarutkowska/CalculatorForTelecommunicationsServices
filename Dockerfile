# Ustawienie bazowego obrazu Node
FROM node:16

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /usr/src/app

# Instalacja zależności
COPY package*.json ./
RUN npm install

# Kopiowanie lokalnych plików do kontenera
COPY . .

# Ustawienie zmiennej środowiskowej (opcjonalne)
# ENV REACT_APP_SOME_ENV_VAR=Some-Value

# Budowanie aplikacji
RUN npm run build

# Uruchomienie aplikacji
CMD [ "npm", "start" ]
