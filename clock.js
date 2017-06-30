class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    console.log(date);

    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // console.log(this.seconds);
    // console.log(this.seconds++);
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    this._tick();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    this.seconds++;
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours >= 25) {
      this.hours = 0;
    }

    // console.log(this);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one seconds
    // 2. Call printTime.
    setInterval(this.printTime.bind(this),1000);
  }
}

const clock = new Clock();
