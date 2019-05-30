require('dotenv').config();
const Twitter = require('twitter');
const db = require('../../data/dbConfig');

const client = new Twitter({
    consumer_key: "sHlkWYen1bco2X3HWnsFMH9hK",
    consumer_secret: "zlYYHGJewvKYfmP8V51Vm2aFwJcNk9YSLUk9fTQAjYs57XmmsK",
    access_token_key: "1127276108158779392-WAOjLcyRaXaIOkISZw1u9c7ILkFcqn",
    access_token_secret: "wK301G5c4bH2PccMLMkytJ3uZt2H508pVmciTiB3TRVXf"
});

// TWITTER_CONSUMER_KEY="sHlkWYen1bco2X3HWnsFMH9hK"
// TWITTER_CONSUMER_SECRET="zlYYHGJewvKYfmP8V51Vm2aFwJcNk9YSLUk9fTQAjYs57XmmsK"
// TWITTER_ACCESS_TOKEN_KEY="1127276108158779392-WAOjLcyRaXaIOkISZw1u9c7ILkFcqn"
// TWITTER_ACCESS_TOKEN_SECRET="wK301G5c4bH2PccMLMkytJ3uZt2H508pVmciTiB3TRVXf"

module.exports = {
    get: function(){
        return db('tweets')
    },
    getSingleTweet: function(id){
        return db('tweets')
        .where(tweet_id, id)
        .first()
    },
    createTweet: function(tweet) {
        return db('tweets')
        .insert(
            {twitter_id: tweet.id, tweet_text: tweet.text}
        )
        .then(([tweet_id]) => {
            this.getSingleTweet(tweet_id)
            // db('complaint')
            // .insert({tweet_key: twitter_id})
        })
    },
    deleteTweet: function(id) {
        return db('tweets')
        .where({id})
        .del()
    }
}