const { Router } = require("express");
const {Admin,Course} = require('../db');
const adminMiddleware = require("../middleware/admin");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const adminUser = new Admin( {
    username : req.headers.username,
    password : req.headers.password
    })

    Admin.findOne({
        username: adminUser.username
    })
    .then(function(value) {
        if (value) {
            res.status(403).json({
                msg: "admin already exist"
            })
        }           
        });

        await Admin.create({
            username: username,
            password: password
        })
    
        res.json({
            message: 'Admin created successfully'
        })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

   const course = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    });

    res.status(201).json({
        message: 'course created successfully',
        CourseId: course._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses  = await Course.find({});
    res.status(200).json({courses: allCourses});

});

module.exports = router;