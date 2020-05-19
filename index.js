var fs = require('fs');
var yargs = require('yargs');
var express = require('express');



//get input from user
var user_input = process.stdin;
user_input.setEncoding('utf-8');
console.log('Enter File Name');

user_input.on('data', function(data){ 
    
    var userdata = data;

 
    fs.readFile('datafile.txt', 'utf-8', function (data, err) {
      
        if(err){
         console.log(err);
        }else{
           
            fs.appendFile('datafile.txt', userdata , function(err){
                if(err){
                    console.log(err);      
                }else{
                    console.log("filename added successfully");
                }
            });
        }
    });
  
   

})
