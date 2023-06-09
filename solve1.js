
function isDigisible(num){
    //condition1
    var strArray = num.toString().split("").sort();
    for(let i=0;i<strArray.length;i++){
        if(strArray[i]==strArray[i+1]){
            console.log("false : condition 1");
            return false;
        }
    }
    //condition2
    if(strArray[0]=='0'){
        console.log("false : condition 2");
        return false;
    }
    //condition3
    for(let i=0;i<strArray.length;i++){
        if(num%parseInt(strArray[i])!=0){
            console.log("false : condition 3");
            return false;
        }
    }
    console.log("All pass");
}

isDigisible(12)