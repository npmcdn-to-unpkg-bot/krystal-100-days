var model = {
  currentQuote: null,
  quotes: [
    {
      quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
      source: "Norwegian Wood"
    },
    {
      quote: "Sometimes I get real lonely sleeping with you.",
      source: "A Wild Sheep Chase"
    },
    {
      quote: "Spend your money on the things money can buy. Spend your time on the things money can’t buy.",
      source: "The Wind-Up Bird Chronicle"
    },
    {
      quote: "Memories warm you up from the inside. But they also tear you apart.",
      source: "Kafka on the Shore"
    },
    {
      quote: "Pain is inevitable. Suffering is optional.",
      source: "What I Talk About When I Talk About Running"
    },
    {
      quote: "Whatever it is you're seeking won't come in the form you're expecting.",
      source: "Haruki Murakami"
    },
    {
      quote: "Why do people have to be this lonely? What's the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?",
      source: "Sputnik Sweetheart"
    },
    {
      quote: "Nobody likes being alone that much. I don't go out of my way to make friends, that's all. It just leads to disappointment.",
      source: "Norwegian Wood"
    },
    {
      quote: "Don't feel sorry for yourself. Only assholes do that.",
      source: "Norwegian Wood"
    },
    {
      quote: "But who can say what's best? That's why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. My experience tells me that we get no more than two or three such chances in a life time, and if we let them go, we regret it for the rest of our lives.",
      source: "Norwegian Wood"
    },
    {
      quote: "Lost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive. But inside our heads - at least that's where I imagine it - there's a little room where we store those memories. A room like the stacks in this library. And to understand the workings of our own heart we have to keep on making new reference cards. We have to dust things off every once in awhile, let in fresh air, change the water in the flower vases. In other words, you'll live forever in your own private library.",
      source: "Kafka on the Shore"
    },
    {
      quote: "Unfortunately, the clock is ticking, the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting.",
      source: "Dance Dance Dance"
    },
    {
      quote: "Silence, I discover, is something you can actually hear.",
      source: "Kafka on the Shore"
    },
    {
      quote: "If you can love someone with your whole heart, even one person, then there's salvation in life. Even if you can't get together with that person.",
      source: "1Q84"
    },
    {
      quote: "Despite your best efforts, people are going to be hurt when it's time for them to be hurt.",
      source: "Norwegian Wood"
    },
    {
      quote: "Taking crazy things seriously is a serious waste of time.",
      source: "Kafka on the Shore"
    },
    {
      quote: "Don't you think it would be wonderful to get rid of everything and everybody and just go some place where you don't know a soul?",
      source: "Haruki Murakami"
    },
    {
      quote: "As time goes on, you'll understand. What lasts, lasts; what doesn't, doesn't. Time solves most things. And what time can't solve, you have to solve yourself.",
      source: "Dance Dance Dance"
    },
    {
      quote: "The most important thing we learn at school is the fact that the most important things can't be learned at school.",
      source: "What I Talk About When I Talk About Running"
    },
    {
      quote: "A certain type of perfection can only be realized through a limitless accumulation of the imperfect.",
      source: "Kafka on the Shore"
    }
  ]
};

var quoteController = {
  init: function() {
   //Go to the model and get the first quote in the array
    model.currentQuote = model.quotes[0];
    
    //Initialize views
    quoteView.init();
    newQuoteButton.init();
    tweetButton.init();
  },
  
  getQuotes: function() {
    return model.quotes;
  },
  
  getCurrentQuote: function() {
    return model.currentQuote;
  },
  
  //Use the object that's passed in to show new quote when button is clicked
  getRandomQuote: function(quote) {
    var randomQuote = model.quotes[Math.floor(Math.random() * model.quotes.length)];
    model.currentQuote = randomQuote;
  }, 
  
  openURL: function(url) {
    window.open(url, 'Share', 'width=550, height=300, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }
};

var quoteView = {
  init: function() {
    //Create pointers
    this.quoteText = document.getElementById("quoteText");
    this.quoteSource = document.getElementById("quoteSource");
    
    //Update DOM
    this.render();
  },
  
  render: function() {
    var currentQuote = quoteController.getCurrentQuote();
    
    this.quoteText.textContent = currentQuote.quote;
    this.quoteSource.textContent = currentQuote.source;
    
  }
  
};

var newQuoteButton = {
  init: function() {
    var newQuote = document.getElementById("newQuote");
  
    this.render();
  },
  
  render: function() {
    newQuote.addEventListener('click', (function(quoteCopy) {
      return function() {
        quoteController.getRandomQuote(quoteCopy);
        quoteView.render();
      }
    })());
  }  
};

var tweetButton = {
  init: function() {
    var tweet = document.getElementById("tweet");
    
    
    this.render();
  },
  
  render: function() {
  var tweetContent = document.getElementById("quoteText").innerHTML;
  var tweetSource = document.getElementById("quoteSource").innerHTML;
    
  tweet.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=murakami&related=freecodecamp&text=' + encodeURIComponent('"' + tweetContent + '" ' + tweetSource));
   
  tweet.addEventListener("click", function(){
    console.log(tweetContent);
    quoteController.openURL('https://twitter.com/intent/tweet?hashtags=murakami&related=freecodecamp&via=codeseeders&text=' + encodeURIComponent('"' + tweetContent + '" ' + tweetSource ));
  });   

  }
  

};

quoteController.init();





