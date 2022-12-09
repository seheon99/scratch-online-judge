FROM amazoncorretto:17-alpine

ARG CRT_FILEPATH
ARG KEY_FILEPATH
ARG P12_PASSWORD

WORKDIR /app
RUN apk update
RUN apk add --no-cache findutils
RUN apk add --no-cache openssl

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

COPY . ./

ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD [ "./gradlew", "bootRun" ]
