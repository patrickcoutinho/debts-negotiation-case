FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME: patrick
ENV MONGO_INITDB_ROOT_PASSWORD: 1234567

EXPOSE 27017

ADD mongo-init.js /docker-entrypoint-initdb.d/

