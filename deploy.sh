set -xe

if [ $TRAVIS_BRANCH == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a docker-compose.production.yml travis@142.93.227.119:/home/halldor/blog 

  docker-compose -f docker-compose.production.yaml up
else
  echo "Not deploying, since the branch isn't master."
fi