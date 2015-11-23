export class CalendarController {
  constructor(moment) {
    'ngInject';

    this.startDate = new Date();
    this.endDate = new Date();
    this.hoursPerDay = 8;
    this.totalAmount = 0;
    this.endDate.setMonth(this.endDate.getMonth() + 1);
    this.moment = moment;
    this.days = [];
  }

  calculateTotal() {
    this.buildWorkingDayList();

    this.totalWorkingDays = this.days.length;
    var day;
    let hours = 0;
    for (day of this.days) {
      hours += day.hours;
    }
    this.workingHours = hours;
    this.totalAmount = this.rate * this.workingHours;
  }

  buildWorkingDayList() {
    let day = this.moment(this.startDate);
    let end = this.moment(this.endDate);

    this.days = [];
    while (day <= end) {
      if (day.day() != 0 && day.day() != 6) { // exclude weekends
        this.days.push({
          day: day,
          label: day.format('dddd MMM Do'),
          hours: this.hoursPerDay,
          amount: this.hoursPerDay * this.rate
        });
      }
      day.add(1, 'days');
    }
  }
}
