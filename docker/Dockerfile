FROM ycr.yonyoucloud.com/base/node:12-alpine AS builder

ADD . /app

WORKDIR /app

RUN npm install ynpm-tool@deploy -g

RUN ynpm i && npm run build:extend

RUN apk add zip

RUN cd ucf-mdf-fe/static/extend && zip -r ucf-yonbuilder-runtime-fe.zip *

RUN mkdir -p /yonyoucloud-buildproduct && cp -r /app/ucf-mdf-fe/static/extend/ucf-yonbuilder-runtime-fe.zip /yonyoucloud-buildproduct

RUN cd /app/ucf-mdf-fe/static/extend && ls