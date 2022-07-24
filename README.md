# redis-pagecount
reloading page count using redis




![redis-gif](https://user-images.githubusercontent.com/67652868/180644675-81d744be-3d9d-458f-a49f-07197b6b9de2.gif)


Steps to run in terminal:
1. create index.js, package.json, dockerfile

2. run docker build .

3. docker build -t kavi/visits:latest .

4. docker run kavi/visits

5. docker run redis

6. open second terminal run [docker run kavi/visits]

7. create docker-compose.yml file

8. docker-compose up

9. check in localhost:8081
