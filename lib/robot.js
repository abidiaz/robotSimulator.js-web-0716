'use strict';

class Robot
{
    orient(currentDirection){
    this.bearing = currentDirection
      if ((this.bearing !== 'east') &&(this.bearing !== 'west')&&(this.bearing !== 'north')&&(this.bearing !== 'south')){ 
        throw new Error("Invalid Robot Bearing")
      }
    }
    
    turnRight(){
      if (this.bearing === 'north'){
        return this.bearing = 'east'}
      else if (this.bearing === 'east'){
        return this.bearing = 'south'}
      else if (this.bearing === 'south'){
        return (this.bearing = 'west')}
      else if (this.bearing === 'west'){
        return (this.bearing = 'north')}
    }
    
    turnLeft(){
      if (this.bearing === 'north'){
        return this.bearing = 'west'}
      else if (this.bearing === 'east'){
        return this.bearing = 'north'}
      else if (this.bearing === 'south'){
        return (this.bearing = 'east')}
      else if (this.bearing === 'west'){
        return (this.bearing = 'south')}
    }
    
    at(x,y){
      this.coordinates = [x,y]
    }
    
    advance(){
      var x = this.coordinates[0]
      var y = this.coordinates[1]
      if (this.bearing === 'north'){
        this.coordinates = [x,y+1]}
      if (this.bearing === 'east'){
        this.coordinates = [x+1,y]}
      if (this.bearing === 'south'){
        this.coordinates = [x,y-1]}
      if (this.bearing === 'west'){
        this.coordinates = [x-1,y]}  
    }
    
    instructions(series){
      var results = []
      var stringArr = series.split('')
      stringArr.forEach((direction)=>{
        if (direction === 'L'){
          results.push('turnLeft')}
        else if (direction === 'R'){
          results.push('turnRight')}
        else if (direction === 'A'){
          results.push('advance')}
      })
      return results
    }

    place({x, y, direction}){
      this.coordinates = [x,y]
      this.bearing = direction 
    }

    evaluate(series){
      var stringArr = series.split('')
      stringArr.forEach((direction)=>
      {
        if (direction === 'L'){
          this.turnLeft()}
        else if (direction === 'R'){
          this.turnRight()}
        else if (direction === 'A'){
          this.advance()}
      })
    }
}

