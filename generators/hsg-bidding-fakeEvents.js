const moment = require("moment");
const faker = require("faker");
const amount_courses = 600;
//const amount_weeks = 14;

const func = (next) => (create) => {
  const path = `hsg-bidding-fakeEvents.json`;
  const data = (amount_courses) => {
    var hsgBiddingFakeEvents = [];

    for (var course_id = 0; course_id < amount_courses; course_id++) {
    
    // defining the start moment and the random length of courses (in 30 min intervals)
    var startdate = new Date('2021-09-13T08:00');
    var length = (Math.floor(Math.random() * 3) + 1) * 30;

    // adding random days (0-5) and hours (0-8) to the start moment
    startdate.getTime()+Math.floor(Math.random()*8)*60*60*1000;
    startdate.getTime()+Math.floor(Math.random()*5)*24*60*60*1000;
    enddate = startdate.getTime()+length*60*1000;
    
    // converting to YYYY-MM-DD HH:mm
    final_start = moment.utc(startdate).format('YYYY-MM-DD HH:mm');
    final_end = moment.utc(enddate).format('YYYY-MM-DD HH:mm');

      hsgBiddingFakeEvents.push({
        "id": course_id,
        "starttime": final_start,
        "endtime": final_end,
        "raw_start": startdate,
        "raw_end": enddate,
      });
    }
    return { "hsg-bidding-fakeEvents": hsgBiddingFakeEvents };
  };
  create({ data: { hsgBiddingFakeEvents: data(amount_courses) }, path: path });
  next(create);
};
module.exports = func;
