const express = require('express');
const router = express.Router();

const posts = require('../../modal/Posts');

// @route   GET api/posts/test
// @dsec    Tests Post route
// @access  Public
router.get('/test', (req, res) => {
    res.json({msg: "posts works"});
});

router.get('/', (req, res) => {
    posts.getPosts({}, (rest) => {
        res.json(rest);
    })
})

module.exports = router;
