# Chatroom -- Technical Test

<p>
<img src="https://user-images.githubusercontent.com/67869620/133590266-32b62035-edef-4c8b-9f0f-09c63814dba9.jpg" alt="drawing" width="250"/>

<img src="https://user-images.githubusercontent.com/67869620/133590291-bc64e279-c5b2-4661-b751-d9572cf2b081.jpg" alt="drawing" width="250"/>
</p>


## 1. Local Development Guideline

### Prerequisites
* NodeJS (v10 or above), npm or yarn

### Setup Local Development Environment

1. Clone the project to local machine and go to the folder
```bash
git clone https://github.com/dylan1607/chatroom.git
cd chatroom
```
2. Run ```npm instal``` to install dependencies at root folder
3. Run ```cd server && npm install``` to install dependencies at server folder
4. Run ```cd client && npm install``` to install dependencies at client folder
5. ```cd ... && npm run dev``` to run client and server
6. The app should be accessible at [http://localhost:3000](http://localhost:3000)

## 2. Deloyment Guideline

### Prerequisites
* Amazon EC2
* NGINX
* NodeJS

### Deloyment Step

1. Create a new Ubuntu server on AWS EC2
2. Connect to Ubuntu EC2 via SSH
3. Setup Web Server with Node.js + NGINX + MongoDB
4. Clone the project ```git clone https://github.com/dylan1607/chatroom.git```
5. Deloy server and client
6. Configure Security Group AWS
7. Test app. The hostname is the "Public DNS (IPv4)" property located on the instance description tab in the AWS Console.

## 3. Other Notes

1. Functionalities:
    - Realtime chat ```socket.io```
    - Store message on MongoDB
    - Only user use same username inside a room
    - Message from user should show on the right side. Message from another user on the left side

2. Deloyment Process:
  [Link Demo](http://54.255.249.106:3000)
  
### What can be improved

1. Unit tests for backend
2. Create RESTFull API for mobile application
3. Send notice to all users when have new user join the room or leave
4. Create login and register page
