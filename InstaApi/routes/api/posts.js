const express = require('express');
const router = express.Router();

const posts = require('../../modal/Posts');

// @route   GET api/posts/test
// @dsec    Tests Post route
// @access  Public
router.get('/test', (req, res) => {
    res.json({msg: "posts works"});
});

router.post('/', (req, res) => {
    posts.getPosts(req.body, (rest) => {
        res.json(rest);
    })
})

module.exports = router;
