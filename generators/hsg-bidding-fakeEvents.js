const faker = require("faker");
const amount_courses = 600;
//const amount_weeks = 14;

const func = (next) => (create) => {
  const path = `hsg-bidding-fakeEvents.json`;
  const data = (amount_courses) => {
    var hsgBiddingFakeEvents = [];

    for (var course_id = 0; course_id < amount_courses; course_id++) {
      const date = new Date(2021, 9, 13, 8, 0);
      var starttime_course = date.addDays(
        faker.datatype.number({ min: 0, max: 5 })
      );
      var starttime_course = date.addHours(
        faker.datatype.number({ min: 0, max: 10 })
      );
      var endtime_course = date.addMinutes(
        (Math.floor(Math.random() * 3) + 1) * 30
      );

      fakeCourses.push({
        "id": course_id,
        "starttime": starttime_course,
        "endtime": endtime_course,
      });
    }
    return { "hsg-bidding-fakeEvents": hsgBiddingFakeEvents };
  };
  create({ data: { hsgBiddingFakeEvents: data(amount_courses) }, path: path });
  next(create);
};
module.exports = func;
