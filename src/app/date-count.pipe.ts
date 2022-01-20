import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):  any{
      let today: Date = new Date()
      let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      let dateDifference = Math.floor(+todayWithNoTime - +new Date(value))
      const secondsInDay = 86400
      let dateDifferenceSeconds = dateDifference * 0.001
      let dateCounter = Math.floor(dateDifferenceSeconds/ secondsInDay) 
  
  
      console.log(dateDifferenceSeconds/secondsInDay)
      return dateCounter  
  

  }

}
