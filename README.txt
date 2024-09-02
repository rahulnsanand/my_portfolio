docker build -t my-portfolio .

docker tag my-portfolio rahulnsanand/my-portfolio:latest

docker push rahulnsanand/my-portfolio:latest

docker run -d -p 8080:80 rahulnsanand/my-portfolio:latest