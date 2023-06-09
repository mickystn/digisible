function getClockAngle(str) {
    var strArray = str.split(":");

    var minuteIndex = parseInt(strArray[1]/5);
    var hourIndex = parseInt(strArray[0]);

    if(strArray[0]>=12){
        minuteIndex = minuteIndex+12;
    }
    console.log(Math.abs(hourIndex-minuteIndex) * 30);
}
getClockAngle("09:00")
