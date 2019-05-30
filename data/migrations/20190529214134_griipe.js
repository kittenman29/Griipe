exports.up = function(knex, Promise) {
    return knex.schema.createTable('griipe', tbl => {
        tbl.increments()
        
        tbl
        .string('DisplayName', 50)
        .notNullable()
        
        tbl
        .string('Email', 50)
        .notNullable()
        
        tbl
        .string('UID', 160)
        .notNullable()
        
        tbl
        .string('StoreName', 50)
        .notNullable()
        
        tbl
        .string('StoreLocation', 50)
        .notNullable()
        
        tbl
        .string('StorePhoneNumber', 50)
        
        tbl
        .integer('StoreGoogleRating', 50)
        
        tbl
        .string('StoreWebsite', 128)
        
        tbl
        .text('tweet').notNullable()
        
        tbl
        .integer('upVote')
        .defaultTo(0)

        tbl
        .integer('downVote')
        .defaultTo(0)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('form')
  };
  