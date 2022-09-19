# Online_Store

How to look at?
Clone project - git clone https://github.com/aLWMoRo/

Download all necessary:

If you don't have npm sudo apt install npm you will need at least 5.6. Also if you don't have Node.js v14+ then:

sudo apt update
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
node  -v
After the commands complete, you should see the Node.js version. Now install the required packages. 
npm install package.json

Launch - npm start
Or user Docker
Compile the Dockerfile in the root section of the repository:
docker build . -t Online_Store
To launch form:
docker run -p 3000:3000 -d Online_Store
