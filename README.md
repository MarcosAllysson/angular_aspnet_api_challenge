# iBR Tecnologia - Angular & Aspnet Challenge

## Tecnologies
- Angular
- Asp.net

## Run aspnet
* Execute:
```
  cd Store
```

* Then:
```
  dotnet run
```

## Run angular
* Execute:
```
  cd frontendstore
```

* If you don't have the dependencies installed, please use the follow command
```
   npm install
```

*  if you already install the dependencies, please check if you have angular/cli 
```
  ng --version
```

*  if no, please install the @angular/cli using the command below
```
npm i -g @angular/cli
```

* if yes, please run the project and wait for server on http://127.0.0.1:4200/
```
ng serve
```


## Endpoints
- "Products":  
  * -- GET: http://127.0.0.1:5000/api/v1/product/
  * -- POST: http://127.0.0.1:5000/api/v1/product/
  * -- PUT: http://127.0.0.1:5000/api/v1/product/ID/
  * -- DELETE: http://127.0.0.1:5000/api/v1/product/ID/

- "Brands": 
  * -- GET: http://127.0.0.1:5000/api/v1/brand/
  * -- POST: http://127.0.0.1:5000/api/v1/brand/
  * -- PUT: http://127.0.0.1:5000/api/v1/brand/ID/
  * -- DELETE: http://127.0.0.1:5000/api/v1/brand/ID/
