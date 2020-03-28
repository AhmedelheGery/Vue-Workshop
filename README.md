# vue-workshop

### Create new vue project
 - create vue vue-workshop

### Install axios and vue router library
 - npm install --save axios vue-router
 
### Share data from child to parent using emit
- child component
```sh
    methods : {
    onInput: function(e) {
      This.$emit( "inputChange" , e.target.value );
    }
```
### Fetch API data using axios
```sh
  methods : {
     onFetchData : function(){
       axios.get("/API-URL").then(res => {
         console.log(res)
         })
     }
```
### Share data from parent to child using props
- parent component
```sh
<template>
 <div>
   <Child v-bind:data="data"/>
 </div>
</template>
```
### Using vue-router library
- import the router library
- tell the vue library about the existence of the router.
- create actual vue instance to meet the vue router instance.This is where we pass in that initial configuration that tells the router about the different routes.
- will pass in an object this object is going to have a property called routes to it.This is going to be an array.
- inside this array is going to be a collection of different objects in each of these objects is going








## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
