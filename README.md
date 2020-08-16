# Parking Server-Side
server side using Node Js Express
## How to run/start the server 

```bash
npm install 
```
then
```bash
npm start
```
- the server runing in PORT 8000 or you can chose the port by adding (PORT="Chosen port number") before the npm start.
for example
```bash
PORT=9000 npm start
```
 - the defult praking size is 10 if you want to change it just add (PARKIN_SIZE="Chosen size number")
 for example
```bash
PARKIN_SIZE=20 npm start
```



## rest APIS
- there are 3 Api's
-  all the all requests can be found  (./routes) file.
#####  Post: to add a car unsig
   - url: "localhost:port/parking/add_car"
   - am reciving the data as json file .
   - expecting to recive the car number as (car_number).
   - if the car number already exists in the parking you cant add 
   ##### Get: to get the car
  - url: "localhost:port/parking/add_car"
  - am reciving the data by query url ,for example (...parking/get_car?slot=7&car_number=34234).
  - if the slot number and the car number not in the same slot this will return error message 
  - the data will return as json file (object)
##### delete: to unpark the car
  - url: "localhost:port/parking/delete_car/:slot"
  - am reciving the data by params ,for example (/parking/delete_car/0).
  - error message will receive if the input is not correct. 

## rate-limit
- cant do more than 10 request in 10 secands.
- rate limit logic can be find in (./ip_limit) file
- am using it in the App.js
- 
## DataBase
- I used an array that will be generated when starting the server to store the data.
- evrey index contain slot and carNumber
- 
## server response message
 all the response message can be found in (res_massges/response_massages) file


## project tree
```bash
├───bin
├───db
├───ip_limit
├───node_modules
├───res_massges
└───routes
```
## NPM and NODE version
 - node version v12.16.2
 - npm version 6.14.4
 
## author 
wagde armosh 