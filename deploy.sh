set -xe

if [ $TRAVIS_BRANCH == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  sed -i "s/{TAG}/$SHA/g" docker-compose.production.yml

  rsync -a docker-compose.production.yml travis@142.93.227.119:/home/halldor/blog 
  rsync -a init-letsencrypt.sh travis@142.93.227.119:/home/halldor/blog
  rsync -a ./data/nginx/prod/app.production.conf travis@142.93.227.119:/home/halldor/blog/data/nginx/prod

  ssh travis@142.93.227.119 "cd /home/halldor/blog ; rm docker-compose.yml ; mv docker-compose.production.yml docker-compose.yml"
  #ssh travis@142.93.227.119 "cd /home/halldor/blog ; docker-compose -f docker-compose.production.yml up -d"
else
  echo "Not deploying, since the branch isn't master."
fi