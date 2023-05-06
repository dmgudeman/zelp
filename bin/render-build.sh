#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
BUILD_PATH='opt/render/project/public'
bundle install
rails db:migrate db:seed