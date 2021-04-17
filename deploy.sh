set -xe

if [ "$TRAVIS_BRANCH" == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  sed -i "s/{TAG}/$SHA/g" docker-compose.production.yml
  sed -i "s/{ENV_PG_USER}/$ENV_PG_USER/g" docker-compose.production.yml
  sed -i "s/{ENV_PG_HOST}/$ENV_PG_HOST/g" docker-compose.production.yml
  sed -i "s/{ENV_PG_DATABASE}/$ENV_PG_DATABASE/g" docker-compose.production.yml
  sed -i "s/{ENV_PG_PASSWORD}/$ENV_PG_PASSWORD/g" docker-compose.production.yml
  sed -i "s/{ENV_PG_PORT}/$ENV_PG_PORT/g" docker-compose.production.yml
  sed -i "s/{ENV_API_PORT}/$ENV_API_PORT/g" docker-compose.production.yml

  rsync -a docker-compose.production.yml travis@142.93.227.119:/home/halldor/blog

  #ssh travis@142.93.227.119 "cd /home/halldor/blog ; rm docker-compose.yml ; mv docker-compose.production.yml docker-compose.yml"
  #ssh travis@142.93.227.119 "cd /home/halldor/blog ; docker-compose up -d"
else
  echo "Not deploying, since the branch isn't master."
fi