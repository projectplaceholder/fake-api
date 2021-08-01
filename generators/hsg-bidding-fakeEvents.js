const moment = require("moment");
const faker = require("faker");
const amount_courses = 600;
//const amount_weeks = 14;

const func = (next) => (create) => {
  const path = `fakeEvents.json`;
  const data = (amount_courses) => {
    var fakeEvents = [];

    for (var course_id = 0; course_id < amount_courses; course_id++) {
    
      // defining the start moment and the random length of courses (in 30 min intervals)
      var date = new Date('2021-07-26T08:00');
      var rnd_days = parseInt(Math.floor(Math.random()*8)*60*60*1000);
      var rnd_hours = parseInt(Math.floor(Math.random()*5)*24*60*60*1000);
      var rnd_length = parseInt((Math.floor(Math.random() * 3) + 1) * 30);

      // adding random days (0-5) and hours (0-8) to the start moment
      var startdate = new Date(date.setTime(date.getTime()+rnd_days+rnd_hours)).toISOString();
      var enddate = new Date(date.setTime(date.getTime()+rnd_days+rnd_hours+rnd_length)).toISOString();
      
      // converting to YYYY-MM-DD HH:mm
      //final_start = moment.utc(startdate).format('YYYY-MM-DD HH:mm');
      //final_end = moment.utc(enddate).format('YYYY-MM-DD HH:mm');

      fakeEvents.push({
        "id": course_id,
        "calendarId": "1",
        "title": "testevent "+course_id,
        "category": "time",
        "dueDateClass": "",
        "start": startdate,
        "end": enddate,
      });
    }
    return { "fakeEvents": fakeEvents };
  };
  create({ data: { fakeEvents: data(amount_courses) }, path: path });
  next(create);
};
module.exports = func;
