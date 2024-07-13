#!/bin/bash

# Stop all running containers
sudo docker ps -q | xargs -r sudo docker stop

# Remove all containers
sudo docker ps -a -q | xargs -r sudo docker rm

# Remove all images
sudo docker images -q | xargs -r sudo docker rmi -f

# Remove all volumes
sudo docker volume ls -q | xargs -r sudo docker volume rm

# Remove all networks (except the default ones)
sudo docker network ls | grep -v "bridge\|host\|none" | awk 'NR>1 {print $1}' | xargs -r sudo docker network rm

echo "Docker cleanup completed."
