require('dotenv').config();
const Twitter = require('twitter');
const db = require('../../data/dbConfig');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


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