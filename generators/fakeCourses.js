const faker = require('faker');
const amount = 50;

 const func =next =>create => {
    const path = `fakeCourses.json`;
    const data = (amount)=>{

        var fakeCourses = [];
    
        for (var id = 0; id<amount; id++){
            var exam_types = ["central", "decentral"];
            var languages = ["EN", "DE", "FR"];
    
            var title = faker.vehicle.model();
            var email = faker.internet.email();
            var lecturer1 = faker.name.findName();
            var lecturer2 = faker.name.findName();
            var ects = Math.floor(Math.random()*5) + 3;
            var language = languages[Math.floor(Math.random() * languages.length)];
            var selected = Math.round(Math.random() * 1);
            var filtered = Math.round(Math.random() * 1);
            var type = Math.floor(Math.random()*3)+1;
            var exam_type1 = exam_types[Math.floor(Math.random() * exam_types.length)];
            var exam_type2 = exam_types[Math.floor(Math.random() * exam_types.length)];
            var exam_duration1 = (Math.floor(Math.random() * 3)+1)*30
            var exam_duration2 = (Math.floor(Math.random() * 3)+1)*30
    
            fakeCourses.push({
    
                "id": id,
                "selected": selected,
                "filtered": filtered,
                "title": title,
                "email": email,
                "type": type,
                "lecturers": [
                    {
                      "name": lecturer1
                    },
                    {
                        "name": lecturer2
                    }
                  ],
                "ects": ects,
                "language": language, 
                "examinations": [
                {
                    "exam_type": exam_type1,
                    "duration": exam_duration1,
                },
                {
                    "exam_type": exam_type2,
                    "duration": exam_duration2,
                }
                ],
    
              }
            )
        }
        return {"fakeCourses": fakeCourses}   
    }
    create({data: {courseList: data(amount)}, path: path})
    next(create);

}
module.exports = func;