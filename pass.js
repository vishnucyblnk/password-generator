
symbols = "~!@#$%^&*()_-{}[]|\:?/<>.,=+";
numbers = "0123456789";
lowerA = "abcdefghijklmnopqrstuvwxyz";

low = () => lowerA.charAt(~~(Math.random()*26));
upp = () => lowerA.charAt(~~(Math.random()*26)).toUpperCase();
num = () => numbers.charAt(~~(Math.random()*10));
sym = () => symbols.charAt(~~(Math.random()*27));
var opt = "";
count=0;
disp.value = JSON.parse(sessionStorage.getItem("myKey"));

// to select user options

function addOpt(id,val){
    let checkbox = document.getElementById(id);

    // For some reason, the event listener is firing twice for each element when passing arguments into a function. I.e., the click event on element will register once and, thus, fire once. so using false in argument and event listenr here used because without that appOpt function firing up when called more times

    checkbox.addEventListener( "change", datachange(id,val),false);
    function datachange(id,val){
        let checkbox = document.getElementById(id);
        if ( checkbox.checked ){
            opt += val
            count++;
        } else {
            opt = opt.replaceAll(val,'');
            count--;
        }
    }
}

//to generate random strings

function passGen(){
    if((len.value && opt)&&len.value>=12){
        opt = opt.slice(0,-1)
        var res="";
        for(i=1;i<=((len.value/count)+1);i++){
            res += eval(opt)
        }
        res = res.slice(0,len.value)
        sessionStorage.setItem("myKey", JSON.stringify(res));
        disp.value = JSON.parse(sessionStorage.getItem("myKey"));
        location.reload();
    }
    else{
        if(!len.value&&(!opt &&len.value<12)){
            alert("Enter Password length and Tick Options")
        }
        else if(!len.value){
            alert("Enter Password Length");
        }
        else if(!opt){
            alert("Tick Atleast one Option");
        }
        else{
            alert("Enter Password Length minimum 12 or more than that")
        }
    }

}

// to Copy the text to clipboard

function copyclip() {
    clipText = disp.value;
    // Copy the text inside the text field
    navigator.clipboard.writeText(clipText);

    // Alert the copied text
    if(clipText){
        alert("copied PASSWORD : " + clipText);
    }
    else{
        alert("Nothing to Copy");
    }
    
  }
setTimeout(()=>{disp.value=""; sessionStorage.removeItem("myKey")},10000);