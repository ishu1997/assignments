const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const adminUser = new User( {
        username : req.headers.username,
        password : req.headers.password
        })
    
        User.findOne({
            username: adminUser.username
        })
        .then(function(value) {
            if (value) {
                res.status(403).json({
                    msg: "user already exist"
                })
            }           
            });
    
            await User.create({
                username: username,
                password: password
            })
        
            res.json({
                message: 'User created successfully'
            })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const course = await Course.find({_id:id});
    res.json({courses: course});

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router