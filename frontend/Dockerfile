# ベースイメージとしてnode:21.7.3の公式イメージを使用
FROM node:21.7.3-alpine

# コンテナ内の作業ディレクトリを/apiに設定
WORKDIR /app

# ホストマシンのpackage.jsonをコンテナ内の/appディレクトリにコピー
COPY package.json /app/package.json

# npmの依存関係をコンテナにインストール
RUN npm install -g npm@10.6.0 \
    && npm install

# ホストマシンの現在のディレクトリ内の全てのファイルをコンテナ内の/appディレクトリにコピー
COPY . /app

# コンテナを起動した際に実行されるコマンド。サーバーを起動。
CMD ["npm", "run", "start"]