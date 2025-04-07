**To start and stop the containers use following Commands:**

sudo docker compose up 
sudo docker compose up -d (run in detach mode)
sudo docker compose up - - build (build and run containers)
sudo docker compose up - - build -d (build and run containers in detached mode)
sudo docker compose down (stop all containers defined in compose file )

**To check if all 3 containers are running:**

sudo docker ps (shows running containers)
sudo docker ps -a (shows all containers)

**To check images:**

sudo docker images
**Add entry in Mongo DB container:(Follow the following step by step)**

Run mongo DB container
On a different terminal run :   sudo docker exec -it mongoDB_container-name mongo 
Show dbs
Create new database using  :        ‘ use dbname ’  
Example : use my-db
Add entry using : db.users.insertOne({email:”abdulmoqeet@gmail.com”,password:”123”})
Now to check enteries inside your db use following command:
  db.users.find()

**Contacting backend container from frontend container when both are on same network:**

Run both containers 
Execute bash of frontend container using : 
Sudo docker exec -it front-container bash
Here write: curl http://back-container:3000 (port number)
Can only be done like this if both containers are on same network 

