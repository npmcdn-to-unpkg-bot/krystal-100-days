var model={currentQuote:null,currentColor:null,colors:["#423E37 ","#A39594 ","#6E675F","#8693AB","#5B9279","#8E5572"],quotes:[{quote:"If you really want to know something, you have to be willing to pay the price.",source:"After Dark"},{quote:"Life is so uncertain: you never know what could happen. One way to deal with that is to keep your pajamas washed.",source:"1Q84"},{quote:"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",source:"Norwegian Wood"},{quote:"Unclose your mind. You are not a prisoner. You are a bird in fight, searching the skies for dreams.",source:"Hard-Boiled Wonderland and the End of the World"},{quote:"Sometimes I get real lonely sleeping with you.",source:"A Wild Sheep Chase"},{quote:"Spend your money on the things money can buy. Spend your time on the things money can’t buy.",source:"The Wind-Up Bird Chronicle"},{quote:"Memories warm you up from the inside. But they also tear you apart.",source:"Kafka on the Shore"},{quote:"Pain is inevitable. Suffering is optional.",source:"What I Talk About When I Talk About Running"},{quote:"Whatever it is you're seeking won't come in the form you're expecting.",source:"Haruki Murakami"},{quote:"Why do people have to be this lonely? What's the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?",source:"Sputnik Sweetheart"},{quote:"Nobody likes being alone that much. I don't go out of my way to make friends, that's all. It just leads to disappointment.",source:"Norwegian Wood"},{quote:"Don't feel sorry for yourself. Only assholes do that.",source:"Norwegian Wood"},{quote:"But who can say what's best? That's why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. My experience tells me that we get no more than two or three such chances in a life time, and if we let them go, we regret it for the rest of our lives.",source:"Norwegian Wood"},{quote:"Lost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive. But inside our heads - at least that's where I imagine it - there's a little room where we store those memories. A room like the stacks in this library. And to understand the workings of our own heart we have to keep on making new reference cards. We have to dust things off every once in awhile, let in fresh air, change the water in the flower vases. In other words, you'll live forever in your own private library.",source:"Kafka on the Shore"},{quote:"Unfortunately, the clock is ticking, the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting.",source:"Dance Dance Dance"},{quote:"Silence, I discover, is something you can actually hear.",source:"Kafka on the Shore"},{quote:"If you can love someone with your whole heart, even one person, then there's salvation in life. Even if you can't get together with that person.",source:"1Q84"},{quote:"Despite your best efforts, people are going to be hurt when it's time for them to be hurt.",source:"Norwegian Wood"},{quote:"Taking crazy things seriously is a serious waste of time.",source:"Kafka on the Shore"},{quote:"Don't you think it would be wonderful to get rid of everything and everybody and just go some place where you don't know a soul?",source:"Haruki Murakami"},{quote:"As time goes on, you'll understand. What lasts, lasts; what doesn't, doesn't. Time solves most things. And what time can't solve, you have to solve yourself.",source:"Dance Dance Dance"},{quote:"The most important thing we learn at school is the fact that the most important things can't be learned at school.",source:"What I Talk About When I Talk About Running"},{quote:"A certain type of perfection can only be realized through a limitless accumulation of the imperfect.",source:"Kafka on the Shore"},{quote:"Whiskey, like a beautiful woman, demands appreciation. You gaze first, then it's time to drink.",source:"Hard-Boiled Wonderland and the End of the World"},{quote:"There are ways of dying that don't end in funerals. Types of death you can't smell.",source:"Blind Willow, Sleeping Woman"},{quote:"I’m the kind of person who likes to be by himself. To put a finer point on it, I’m the type of person who doesn’t find it painful to be alone.",source:"What I Talk About When I Talk About Running"},{quote:"Things outside you are projections of what's inside you, and what's inside you is a projection of what's outside. So when you step into the labyrinth outside you, at the same time you're stepping into the labyrinth inside.",source:"Kafka on the Shore"}]},quoteController={init:function(){model.currentQuote=model.quotes[0],quoteView.init(),newQuoteButton.init(),tweetButton.init()},getQuotes:function(){return model.quotes},getCurrentQuote:function(){return model.currentQuote},getRandomQuote:function(e){var t=model.quotes[Math.floor(Math.random()*model.quotes.length)];model.currentQuote=t},getRandomColor:function(e){var t=model.colors[Math.floor(Math.random()*model.colors.length)];return model.currentColor=t},getTweet:function(e){var t=this.getCurrentQuote();return t},openURL:function(e){window.open(e)}},quoteView={init:function(){this.quoteText=document.getElementById("quoteText"),this.quoteSource=document.getElementById("quoteSource"),this.render()},render:function(){var e=quoteController.getCurrentQuote();this.quoteText.textContent=e.quote,this.quoteSource.textContent=e.source}},newQuoteButton={init:function(){document.getElementById("newQuote");this.render()},render:function(){newQuote.addEventListener("click",function(e,t){var o=document.querySelector("body");return function(){quoteController.getRandomQuote(e),o.style.background=quoteController.getRandomColor(t),quoteView.render()}}())}},tweetButton={init:function(){document.getElementById("tweet");this.render()},render:function(){tweet.addEventListener("click",function(){var e=quoteController.getTweet(),t=e.quote,o=e.source;tweet.setAttribute("href","https://twitter.com/share?hashtags=murakami&via=codeseeder&text="+encodeURIComponent('"'+t+'" '+o)),quoteController.openURL("https://twitter.com/share?hashtags=murakami&via=codeseeders&text="+encodeURIComponent('"'+t+'" '+o))})}};quoteController.init();