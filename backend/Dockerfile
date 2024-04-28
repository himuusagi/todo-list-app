# ベースイメージとしてRuby 3.3.0の公式イメージを使用
FROM ruby:3.3.0

# 必要なパッケージのインストール。postgresql-clientをインストール。
RUN apt-get update -qq && apt-get install -y postgresql-client

# コンテナ内の作業ディレクトリを/apiに設定
WORKDIR /app

# ホストマシンのGemfileをコンテナ内の/appディレクトリにコピー
COPY Gemfile /app/Gemfile

# ホストマシンのGemfile.lockをコンテナ内の/apiディレクトリにコピー
COPY Gemfile.lock /app/Gemfile.lock

# Gemfileの依存関係をコンテナにインストール
RUN bundle install

# ホストマシンの現在のディレクトリ内の全てのファイルをコンテナ内の/appディレクトリにコピー
COPY . /app

# コンテナを起動した際に実行されるコマンド。RailsサーバーをPumaを使って起動。
# "-b 0.0.0.0" → Docker ホストや他のコンテナからも、このコンテナ内で実行されている Rails アプリケーションにアクセスすることが可能になる
CMD ["rails", "server", "-b", "0.0.0.0"]