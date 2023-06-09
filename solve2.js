

function getHandScore(str){
    //C D H S
    var score=[0,0,0,0];

    var strArray = str.replace("A","11").split(" ").sort()

    for(let i=0;i<strArray.length;i++){
        if(strArray[i][0]=="C"){
            score[0]=score[0]+parseInt(strArray[i].substr(1));
        }
        if(strArray[i][0]=="D"){
            score[1]=score[1]+parseInt(strArray[i].substr(1));
        }
        if(strArray[i][0]=="H"){
            score[2]=score[2]+parseInt(strArray[i].substr(1));
        }
        if(strArray[i][0]=="S"){
            score[3]=score[3]+parseInt(strArray[i].substr(1));
        }
    }

    console.log("Highest score = ",Math.max(...score));
}

getHandScore("S8 S10 CA");