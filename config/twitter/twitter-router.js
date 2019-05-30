const router = require('express').Router();
const Twitter = require('twitter')
const TwitterModel = require('./twitter-model');

// const griipeDB = require('./twitter-model')

const client = new Twitter({
    consumer_key: "sHlkWYen1bco2X3HWnsFMH9hK",
    consumer_secret: "zlYYHGJewvKYfmP8V51Vm2aFwJcNk9YSLUk9fTQAjYs57XmmsK",
    access_token_key: "1127276108158779392-WAOjLcyRaXaIOkISZw1u9c7ILkFcqn",
    access_token_secret: "wK301G5c4bH2PccMLMkytJ3uZt2H508pVmciTiB3TRVXf"
});


router.post('/makeatweet', async (req, res) => {
    try {
        const tweet = req.body;
        const tweetConfirm = await client.post('statuses/update', tweet);
        console.log(tweetConfirm);
        // const dbTweet = await TwitterModel.createTweet(tweetConfirm);
        // console.log(dbTweet);
        res.status(200).json({
            message: `New Tweet Created : Id number: ${tweetConfirm.id} with text ${tweetConfirm.text}`
            // message: `New Tweet Created : ${dbTweet.tweet_text}`
        })
    } catch (error) {
        res.status(500).json({
            message: `unable to create tweet : ${error}`
        })
    }
})

module.exports = router;