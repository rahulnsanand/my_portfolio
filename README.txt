docker image prune -a
docker system prune -a --volumes

# Step 1: Define a unique build ID (using a timestamp for uniqueness)
$BUILD_ID = 18

# Step 2: Build the Docker image with a unique tag
docker build --no-cache -t rahulnsanand/portfolio:$BUILD_ID .

# Step 3: Push the image with the unique tag to Docker Hub
docker push rahulnsanand/portfolio:$BUILD_ID

# Step 4: Tag the newly pushed image as `latest`
docker tag rahulnsanand/portfolio:$BUILD_ID rahulnsanand/portfolio:latest

# Step 5: Push the `latest` tag to Docker Hub
docker push rahulnsanand/portfolio:latest

# Step 6: Run the newly built image (you may need to stop and remove any running container with the same name)
docker run -d -p 8080:80 --name portfolio_container_$BUILD_ID rahulnsanand/portfolio:$BUILD_ID


https://fontawesome.com/search?q=avatar&o=r