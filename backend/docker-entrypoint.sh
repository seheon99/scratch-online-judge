#!/bin/sh
openssl pkcs12 -export -in $CRT_FILEPATH -inkey $KEY_FILEPATH -out /app/src/main/resources/keystore.p12 -name tomcat -password "pass:$P12_PASSWORD" && \
sed -i "s/KEYSTORE_PASSWORD/$P12_PASSWORD/" /app/src/main/resources/application.properties && \

exec "$@"
