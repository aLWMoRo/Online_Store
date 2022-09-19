# Online_Store

# How to look at?
- Clone project - `git clone https://github.com/aLWMoRo/`

- Download all necessary:

>If you don't have npm `sudo apt install npm` *you will need at least 5.6*.
Also if you don't have Node.js v14+ then:
```bash
sudo apt update
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
node  -v
```
After the commands complete, you should see the Node.js version.
Now install the required packages. 
`npm install package.json`

- Launch -  `npm start`
- 
### Or user Docker
1) Compile the Dockerfile in the root section of the repository:
```bash
docker build . -t Online_Store
```
2) To launch form:
```bash
docker run -p 3000:3000 -d Online_Store
```
