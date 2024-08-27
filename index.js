// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(42 - someValue ) 
  }


  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
  }

  function distanceTravelledInFeet(someValue1,someValue2) {
    return Math.abs(someValue1-someValue2) * 264
  }

  function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start,destination)<=400){
        return 0
    }
    else if(distanceTravelledInFeet(start,destination)<=2000){
        return (distanceTravelledInFeet(start,destination)- 400)*(0.02)
    }
    else if(distanceTravelledInFeet(start,destination)<=2500)
        return 25
    else{
        return 'cannot travel that far'
    }
}



