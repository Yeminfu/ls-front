### установка докер
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

### сборка
sudo docker build -t my-nextjs-app .

### запуск контейнера
docker run -d \
  --name frontend \
  -p 3000:3000 \
  my-nextjs-app

### список образов
sudo docker images

# список контейнеров
sudo docker ps -a

# логи
sudo docker logs frontend