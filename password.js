const PromptSync = require("prompt-sync");

len = 20

symbols = "~!@#$%^&*()_-{}[]|\:?/<>.,=+";
numbers = "0123456789";
lowerA = "abcdefghijklmnopqrstuvwxyz";

low = () => lowerA.charAt(~~(Math.random()*26));
upp = () => lowerA.charAt(~~(Math.random()*26)).toUpperCase();
num = () => numbers.charAt(~~(Math.random()*10));
sym = () => symbols.charAt(~~(Math.random()*27));


// console.log(symbols.length,numbers.length,alphabets.length);

const prompt = require('prompt-sync')({sigInt:true})
var opt = "";
for(i=1;i<=4;i++){
    var inp = prompt("Enter the options y/n : ");
    var val = prompt("Enter the options low,upp,num,sym : ");
    addOpt(inp,val);
}
function addOpt(inp,val){
    if(inp == "y"){
        opt += val+'+'
        console.log(opt);
    }
    else{
    }
}

opt = opt.slice(0,-1)

//to generate random strings
res=""
for(i=1;i<=(len/4)+1;i++){
    //res+= lowerA.charAt(~~(Math.random()*26))+lowerA.charAt(~~(Math.random()*26)).toUpperCase()+numbers.charAt(~~(Math.random()*10))+symbols.charAt(~~(Math.random()*27))
    res += eval(opt)
    
}
console.log(res.slice(0,len));