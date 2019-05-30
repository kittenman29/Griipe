require('dotenv').config();

const knex = require('knex')

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/griipe.db3'
    },
    useNullAsDefault: true
};

const db = knex(knexConfig);

module.exports = {
    getPosts,
    getPostByUser,
    addPost,
    postTweet
};

function getPosts() {
    return db('griipe');
}

function getPostByUser(id) {
    return db('griipe')
      .where({ UID: id })
      
  }

function getByID(id) {
    return db('griipe')
      .where({ id })
      .first();
  }

function addPost(post) {
    return db('griipe')
    .insert(post)
    .then(ids => {
      return getByID(ids[0])
    });
}

function postTweet(tweets) { 
    client.post('statuses/update', tweets)
    .then(tweet => {
        console.log(tweet)
    })
    .catch(error => {
        console.log(error)
})
}
