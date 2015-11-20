export class CalendarController {
  constructor(moment) {
    'ngInject';

    this.startDate = new Date();
    this.endDate = new Date();
    this.hoursPerDay = 8;
    this.totalAmount = 0;
    this.endDate.setMonth(this.endDate.getMonth() + 1);
    this.moment = moment;
  }

  calculateTotal() {
    let days = this.countWorkingDays();

    this.totalWorkingDays = days;
    this.workingHours = days * this.hoursPerDay;

    this.totalAmount = this.rate * this.hoursPerDay * days;
  }

  countWorkingDays() {
    let start = this.moment(this.startDate);
    let end = this.moment(this.endDate);

    let first = start.clone().endOf('week'); // end of first week
    let last = end.clone().startOf('week'); // start of last week
    let days = last.diff(first, 'days') * 5 / 7; // this will always multiply of 7
    let wfirst = first.day() - start.day(); // check first week

    if (start.day() == 0) --wfirst; // -1 if start with sunday
    let wlast = end.day() - last.day(); // check last week
    if (end.day() == 6) --wlast; // -1 if end with saturday

    this.days = this.buildWorkingDayList(start, end, this.hoursPerDay);

    return wfirst + days + wlast;
  }

  buildWorkingDayList(start, end) {
    let day = start;
    let days = [];

    while (day <= end) {
      if (day.day() != 0 && day.day() != 6) {
        days.push({
          label: day.format('dddd MMM Do'),
          hours: this.hoursPerDay,
          amount: this.hoursPerDay * this.rate
        });
      }
      day.add(1, 'days');
    }

    return days;
  }
}
