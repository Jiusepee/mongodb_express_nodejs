const Course = require('../models/Course');

// @desc SET Course INSERT INTO DB
// @route SET /api/courses

const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.author) res.status(404).send("Not found");


    const course = await Course.create({
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    })
    res.status(200).json(course)

}

// ______________________________________
//@desc GET Courses From DB
//@route GET /api/courses
const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses)
};
//________________________________________________

//@desc PUT Courses
//@route PUT /api/courses/:id
const updateCourse = async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    }, {new: true})
    res.status(200).json(course)
};

//________________________________________________

//@desc DELETE Courses
//@route DELETE /api/courses/:id
const deleteCourse = async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json(course)
};


module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    //toliau vardinate get, update, 
    //delete metodus-funkcijas, kurias cia busite aprase
}
