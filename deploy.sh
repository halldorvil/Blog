set -xe

if [ $TRAVIS_BRANCH == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  #rsync -a --exclude={'/node_modules','/src','/public'} client/ travis@142.93.227.119:/home/halldor/blog/client
  #rsync -a server/ travis@142.93.227.119:/home/halldor/blog/server
  #scp 'docker-compose.production.yml' travis@142.93.227.119:/home/halldor/blog

  rsync -a ~/docker-compose.production.yml travis@142.93.227.119:/home/halldor/blog 
else
  echo "Not deploying, since the branch isn't master."
fi