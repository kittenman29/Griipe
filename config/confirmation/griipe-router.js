const router = require('express').Router();

const griipeDB = require('./griipe-model')

//changes



router.get('/posts', (req,res) => {
    
    griipeDB
        .getPosts()
        .then(form => {
            res.status(200).json(form)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get dishes"
            })
        })
})


router.get('/posts/:UID', (req,res) => {
        const id = req.params.UID
        
        griipeDB

        .getPostByUser(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get by id"
            })
        })
})


router.post('/makepost', (req, res) => {
    const post = req.body;

    griipeDB
    .addPost(post)

    .then(post => {
        res.status(201).json({post})
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})

router.post('/makenewtweet', (req, res) => {
    const post = req.body;

    griipeDB
    .postTweet(post)

    .then(post => {
        res.status(201).json({post})
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})

router.delete('/posts/:id', (req, res) => {
    const id = req.params.id;

    griipeDB
        .deletePost(id)
        .then(post => {
            res.status(204).json({success: "post has been deleted"});  
        })
        .catch(error => {
            res.status(500).json({
                error: "post cant be removed"
            })
        })

}) 

router.put('/posts/:id', (req, res) => {

    const id = req.params.id;
    const postbod = req.body;
  
    griipeDB
        .updatePost(id, postbod)
        .then(updated => {
            res.status(200).json({sucess: "It worked!"})
        })
        .catch(error => {
            res.status(500).json({
                error: "The post information could not be modified."
            });
        })
   
})


module.exports = router;