import { Component } from '@angular/core';
import { interval } from 'rxjs';
import dayjs from 'dayjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  // obsebable$ = interval(2000);
  constructor(){
    this.convert();
  }

  convert() {
    const start = dayjs();
    const days = 30;

    // const map = new Map();
    // const arr = [];
    // // const map = new Map();
    // for(let i = 0; i < days; i++) {
    //   let date = start.add(i, 'day').format('YYYY MM DD');
    //   map.set(date, 1);
    //   arr.push(date);
    // }
    // const end = dayjs().add(30, 'day');

    // const s = dayjs().format('YYYY MM DD');

    // console.log(start);
    // console.log(end);

    // console.log(map, arr);

    const alerts = this.genHourAlert();

    console.log(alerts);
    console.log(dayjs("2021 05 02 02", "YYYY MM DD HH"));


    // this.inWeek();

    // this.inMonth();
    // this.inADay();

    // this.inHour(this.generateMinAlert());

    // console.log(end.diff(start));
  }

  genAllAlert = () => {
    const start = dayjs();
    const hrs = 60;
    const alerts = [];
    for (let i = 0; i < hrs; i ++) {
      let date = start.subtract(i, "day");
      let rand = Math.floor(Math.random() * 2);
      for (let j = 0; j < rand; j++) {
        alerts.push(date.toISOString());
      }
    }
    return alerts;
  }

  genHourAlert = () => {
    const start = dayjs();
    const hrs = 60;
    const alerts = [];
    for (let i = 0; i < hrs; i += 5) {
      let date = start.subtract(i, "minute");
      let rand = Math.floor(Math.random() * 4);
      for (let j = 0; j < rand; j++) {
        alerts.push(date.add(j, "minute").toISOString());
      }
    }
    return alerts;
  }

  genDayAlert = () => {
    const start = dayjs();
    const hrs = 24;
    const alerts = [];
    for (let i = 0; i < hrs; i ++) {
      let date = start.subtract(i, "hour");
      let rand = Math.floor(Math.random() * 4);
      console.log(rand);
      for (let j = 0; j < rand; j++) {
        alerts.push(date.toISOString());
      }
    }
    return alerts;
  }

  genWeekAlert = () => {
    const start = dayjs();
    const hrs = 7;
    const alerts = [];
    for (let i = 0; i < hrs; i ++) {
      let date = start.subtract(i, "day"); // make half day (12hrs) later
      let rand = Math.floor(Math.random() * 4);
      console.log(rand);
      for (let j = 0; j < rand; j++) {
        alerts.push(date.toISOString());
      }
    }
    return alerts;
  }

  genMonthAlert = () => {
    const start = dayjs();
    const duration = 30;
    const alerts = [];
    for (let i = 0; i < duration; i++) {
      let date = start.subtract(i, "day"); // make half day (12hrs) later
      let rand = Math.floor(Math.random() * 2);
      console.log(rand);
      for (let j = 0; j < rand; j++) {
        alerts.push(date.toISOString());
      }
    }
    return alerts;
  }

  // generateMinAlert() {
  //   const start = dayjs();
  //   const hrs = 60;
  //   const alerts = [];
  //   for(let i = 0; i < hrs; i+=5) {
  //     let date = start.subtract(i, 'minute')
  //     let rand = Math.floor(Math.random() * 4);

  //     for(let j = 0; j < rand; j++) {
  //       alerts.push(date.add(j, 'minute'));
  //     }
      
  //   }

  // // console.log(i);
  //   return alerts;
  // }


  inHour(alerts: any[]){
    const start = dayjs();
    const hrs = 60;

    const map = new Map();
    const arr = [];
    
    for(let i = 0; i < hrs; i+=5) {
      let date = start.subtract(i, 'minute').format('YYYY MM DD HH mm');
      map.set(date, 0);
      arr.push(date);
      // console.log(i);
    }

    // const alerts = []

    for(let i = 11, j = 0; i >= 0 && j < alerts.length;) {

      // console.log(dayjs(arr[i]), dayjs(arr[i]));
      if( dayjs(arr[i]).isAfter( dayjs(alerts[j]) )) {
        map.set(arr[i], map.get(arr[i]) + 1);
        j++;
      } else {
        i--;
      }
    }

    console.log(map);
  }


  inADay(){
    const start = dayjs();
    const hrs = 24;

    const map = new Map();
    const arr = [];
    
    for(let i = 0; i < hrs; i++) {
      let date = start.subtract(i, 'hour').format('YYYY MM DD HH');
      map.set(date, 1);
      arr.push(date);
    }

    console.log(arr);
  }

  inWeek(){
    const start = dayjs();
    const days = 7;

    const map = new Map();
    const arr = [];
    
    for(let i = 0; i < days; i++) {
      let date = start.subtract(i, 'day').format('YYYY MM DD');
      map.set(date, 1);
      arr.push(date);
    }

    console.log(arr);
  }
  
  inMonth(){
    const start = dayjs();
    const days = 30;

    const map = new Map();
    const arr = [];

    for(let i = 0; i < days; i++) {
      let date = start.subtract(i, 'day').format('YYYY MM DD');
      map.set(date, 1);
      arr.push(date);
    }

    console.log(arr);
  }
}
