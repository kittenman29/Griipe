exports.seed = function(knex, Promise) {
    return knex('griipe').insert([
  
      { DisplayName: "Jawad Hussein",
        Email: "jawaddhussein@gmail.com",
        UID: "asdfghjkl;",
        StoreName: "Mcdonalds",
        StoreLocation: "Portland",
        StorePhoneNumber: "503-295-3998",
        StoreGoogleRating: 3,
        StoreWebsite: "https://www.mcdonalds.com/us/en-us.html",
        tweet: "Terrible service! My mchicken was blue!",
      },
        { DisplayName: "Randy Jones",
        Email: "RandyyRand@gmail.com",
        UID: "a1s2d3f4g5;",
        StoreName: "Walmart",
        StoreLocation: "San Jose",
        StorePhoneNumber: "619-825-0998",
        StoreGoogleRating: 2.3,
        StoreWebsite: "https://www.walmart.com/",
        tweet: "Clerk was very rude, store was not clean, and I slipped on a banana peel on my way out!",
      },
      { DisplayName: "John Smith",
        Email: "jsmith2365@icloud.com",
        UID: "a1s2d3f4g5h6j7;",
        StoreName: "7-eleven",
        StoreLocation: "Keizer",
        StorePhoneNumber: "971-265-9375",
        StoreGoogleRating: 3.7,
        StoreWebsite: "https://www.7-eleven.com/",
        tweet: "AM PM slurpees are way better.",
      },
      { DisplayName: "Randy Jones",
        Email: "RandyyRand@gmail.com",
        UID: "a1s2d3f4g5;",
        StoreName: "Wells Fargo",
        StoreLocation: "San Jose",
        StorePhoneNumber: "285-053-9418",
        StoreGoogleRating: 1.5,
        StoreWebsite: "https://www.walmart.com/",
        tweet: "Terrible Company! Ive been thinking of switching to chase for awhile but this was the last straw. They closed my bank account without warning! Save your time and go with Chase or Key-Bank",
      }
      ]);
  };