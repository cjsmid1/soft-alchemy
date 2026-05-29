const divider = `
  <div class="handwritten-divider">
    <img src="/images/handwriting/floral-divider.png" alt="">
  </div>
`;

const posts = [
	{
		id: "echo-collage",
		title: "📸 A Completely Normal Amount of Dog Photos",
		metaDescription:
			"A totally reasonable collection of Echo photos featuring dramatic ear floofs, suspicious levels of cuteness, and ongoing small supervisor energy.",
		category: "Life",
		tags: ["dog-approved"],
		excerpt: "The time I used blogging as an excuse to create an entirely necessary archive of puppy photos...",
		content: `<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>A joyful and perfectly reasonable collection of Echo photos.
		    Frankly, withholding these feels unethical.</p>
	  </section>
		<div class="photo-collage photo-collage--3-column" id="echo-gallery"></div>
		<p>Echo would like it noted that this archive remains ongoing.</p>
		${divider}
	`,
	},
	{
    id: "chocolate-milkshake",
		title: "🥤 Mint Chocolate Milkshake",
		metaTitle: "🥤 Mint Chocolate Milkshake | Soft Alchemy",
		metaDescription:
			"A ridiculously indulgent homemade mint chocolate milkshake recipe made with Aero, vanilla ice cream, and chocolate spread. Easily adapted into Biscoff, Banoffee, Honeycomb and more.",
    image: "/images/milkshake-portrait.jpg",
		imageAlt:
			"Homemade mint chocolate milkshake topped with crushed Aero chocolate",
    category: "Recipe",
    tags: ["quick", "sweet", "vegetarian"],
		excerpt: "The time a milkshake earned an instant second order and a homemade remake.",
    content: `
      <img class="card-image" src="/images/milkshake-cover.jpg">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>This is the best milkshake flavour. Yes, I will die on this hill.<br>
		Recipe makes two small portions, or one large depending on the level of indulgence required.</p>
	  </section>
	  <h2>Ingredients</h2>
    <ul>
		  <li>40g Aero Mint Chocolate</li>
		  <li>500g Vanilla Ice Cream</li>
		  <li>Splash of Milk</li>
		  <li>1 tbsp Chocolate Spread</li>
		  <li>(Opt) 1 tbsp Double Cream</li>
	  </ul>
		
    <h2>Instructions</h2>
    <ol class="instructions">
		    <li>Blitz the Aero mint chocolate in a blender/food processor till fine, check for larger lumps and place to one side.<br>
				You can also use a pestle & mortar but, fair warning, lack of a blender/food processor is going to make the rest of this recipe a workout!</li>
				<li>Separately blend 500g vanilla ice cream with a glug of milk (depending on your preferred milkshake thickness) until smooth.<br>
				For this milkshake in particular, thicker is better as it stops the Aero sinking to the bottom as much!</li>
				<li>Add a very enthusiastic tablespoon of chocolate spread to the ice cream mixture & blend.</li>
				<li>Final thickness check: add more ice cream if too thin, or milk if too thick. Also add the optional double cream if you want full indulgence.</li>
				<li>Add back in most of the crushed Aero and give everything one final mix.</li>
				<li>Pour into your fanciest available drink vessel and garnish with a sprinkle of the remaining Aero chocolate!</li>
				<figure class="post-image">
		      <img src="/images/milkshake-pour.jpg">
        </figure>
      </ol>
	  ${divider}
	  <p>Enjoy! The best part of this recipe is how easy it is to adapt, so while mint chocolate is undoubtedly my favourite, here are a few variations I'm planning to experiment with next:</p>
		<section class="table">
  <table>
    <thead>
      <tr>
        <th>Flavour</th>
        <th>Switch the Aero for...</th>
        <th>Replace the chocolate spread with...</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Biscoff</td>
        <td>Biscoff biscuits</td>
        <td>Biscoff spread</td>
      </tr>

      <tr>
        <td>Banoffee</td>
        <td>Banana</td>
        <td>Caramel sauce</td>
      </tr>

      <tr>
        <td>Reese's</td>
        <td>Peanut butter cups</td>
        <td>Peanut butter or keep it chocolate spread!</td>
      </tr>

      <tr>
        <td>Honeycomb</td>
        <td>Crunchie bar</td>
        <td>Golden syrup?<br>Might be too sweet. Then again, is that really a problem?</td>
      </tr>      
			
			<tr>
        <td>Gingerbread</td>
        <td>Sacrificial Gingerbread Men</td>
        <td>Gingerbread Syrup<br>(meant for coffee - better with hot chocolates & milkshakes!)</td>
      </tr>
    </tbody>
  </table>
</section>
    `,
	},
  {
    id: "affirmations",
    title: "💭 Tiny Stories We Tell Ourselves",
    metaTitle: "Tiny Stories We Tell Ourselves | Soft Alchemy",
    metaDescription:
      "A reflective exploration of affirmations, attention, identity and the quiet ways repeated words may shape the person we become.",
    category: "Study",
    tags: ["reflection", "self-improvement"],
    excerpt: "The time I investigated the value of affirmations...",
    content: `
		<p>
		I must admit that the quote "if you open your mind too much, your brain will fall out" never fails to make me chuckle. Having said that, I prefer to lead with empathetic curiosity and so when I encountered the world of affirmations, especially given the cynicism it brings out in many, further exploration was required.
		</p>
		<p>
		Anyone who has ever wanted a specific dog breed and suddenly started seeing them everywhere already knows this feeling. The same thing happens with cars, hobbies, and (apparently) even baby names. What we objectively see with our eyes and what our brain chooses to pay attention to are very different things.<br>
		Filtering information is simply more efficient than trying to process everything at once. Otherwise we'd all end up admiring soap bubbles while the saucepan boils over. Where things become especially interesting is whether we can change what our brain views as important & therefore worthy of your attention. 
		</p>
		<br>
		<h3>Priming the Brain</h3>
		<p>
		My philosopher friend may find a way to disagree, but I'm going to start with the assumption that our worldview influences what we think, say & do. I would also argue that what we think, say & do, influence our worldview (especially when it has immediate physical or social feedback!).
		</p>
		<p>
		Note from a half forgotten statistics lesson: you can think of your current worldview as your brain's null hypothesis, and it's running constant tests to check if it needs adjusting. This means, you need some statistically significant evidence to make it reject that current worldview otherwise it will continue to default to that null hypothesis (i.e. your current worldview) rather than the new alternative.<br>
		Whether or not repeating affirmations or mantras to yourself daily is statistically significant enough, is for you to decide.
		</p>
		<p>
		The old adage "sticks and stones may break my bones, but words will never hurt me" makes sense up until the point you remember we're fundamentally social creatures, or until someone says "It's probably better if I do it myself".<br>
		In short, words have Power. This begs the question: would a phrase I repeat daily have power and, more specifically, would it have enough power to change my worldview & hence, my future thoughts, words & actions?
		</p>
		<p>
		Personally my curiosity is piqued enough to warrant experimentation...
		</p>
		<br>
		<h3>Using Affirmations</h3>
		<p>A reminder at this point: I am absolutely not an expert, but the following makes sense to me. Even if you come up with the world's best affirmation, it's going to be more effective if you think about or say it regularly rather than once. Think of it like teaching your brain something new (note to self: would spaced repetition work on affirmations?). This regular mental prompting can include:</p>
		<ul>
		<li>Visual prompting: leaving sticky notes around where you see them daily like the bathroom mirror or your phone background (just remember it'll lose novelty over time so changing up the location can help here).<br>
		I just realised my vision board as my laptop background could actually be considered a kind of "visual affirmation"!</li>
		<li>Meditative prompting: if you already have a meditation habit you can use your affirmation as an anchor in the same way you would your breath or sound.</li>
		<li>Written prompting: start each journal/diary entry with your affirmation (this worked especially well for me as it would then naturally encourage me to reflect on said affirmation).</li>
		<li>Verbal prompting: yes this is the traditional speaking to yourself in the mirror idea, and yes it makes me feel very silly so I'll stick to the other options!</li>
		</ul>
		<p>There are two types of thinking: active and passive. Active thinking is what you're doing when you're journaling, solving a maths problem without a calculator, or desperately trying to come up with a compliment on a first date (basically your conscious brain). Passive thinking is what happens when your brain wanders/daydreams (you can liken it to slow cooker mode), for example it's the source of that eureka moment in the shower, mid dog walk or while doing the dishes (basically your subconscious brain).
		</p>
		<p>
		Why this is relevant is that affirmations tap into both ways of thinking, by actively thinking about the affirmation during the regular prompting, you then encourage the brain to also think about it passively. This helps you come up with new ways to follow through on the affirmation, and new ways to interpret the world according to the affirmation - or at least that's my theory.</p>
		<br>
		<h3>Creating Affirmations</h3>
		<p>While I lived in London, I attended monthly GPS sessions hosted by Ingeniusly. These sessions were essentially group coaching to help create personal compass direction for the upcoming month. In hindsight, I've realised they were a form of monthly affirmation, and so I suddenly feel slightly more justified in giving the following guidance!</p>
		<ul>
		<li>Positive: focus on what you want to be true, not what you want to eliminate (after all if I tell you to not think about a purple elephant, what did you just think about?)</li>
		<li>Personal: starting with "I ..." is a safe bet, it keeps it relevant to you and your identity.</li>
		<li>Present: use the present tense! The future leaves far too much wiggle room.</li>
		<li>Concise: the simpler it is, the easier to remember (and yes I ran out of P words)</li>
		</ul>
		<p>You're looking for that gut response of "yes that's the one", and honestly crafting your own affirmation is a useful reflection exercise in itself. I'll give you some personal examples to get you started, but the real value comes from crafting one that genuinely resonates with you.<br>
		The promised examples:</p>
		<ul>
		<li>I give and receive kindness</li>
		<li>I build up from my foundations</li>
		<li>I'm excited to wait</li>
		<li>I live my life with intention</li>
		<li>I make time to express myself</li>
		<li>I nurture new possibilities</li>
		<li>I contribute value</li>
		</ul>

		<p>Regardless of any further debate around affirmations and their effectiveness; even if they're just tiny course corrections repeated often enough to matter. I suspect the stories we tell ourselves quietly shape the people we become, and that alone makes them worth experimenting with.</p>
		`,
  },
  {
    id: "roasted-aubergine",
    title: "🍆 Roasted Aubergine",
    metaTitle: "🍆 Roasted Aubergine | Soft Alchemy",
    metaDescription:
      "Sticky roasted aubergine with bulgogi glaze, crispy pak choi, noodles & vegetables. An easy vegetarian comfort recipe packed with savoury umami flavour.",
    image: "/images/roasted-aubergine.jpg",
    imageAlt:
      "Roasted glazed aubergine served with noodles, pak choi and vegetables",
    category: "Recipe",
    tags: ["asian", "vegan", "vegetarian"],
    excerpt: "The time I got hold of the Korean answer to barbecue sauce...",
    content: `
      <img class="card-image" src="/images/roasted-aubergine.jpg">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Easily my favourite way to cook aubergine, and it works beautifully with a variety of different flavours, so feel free to get creative. This latest iteration used bulgogi sauce, which made it sticky and sweeter than the umami punch miso provides. Bulgogi sauce, if you've never come across it before, is a sweet, savoury and garlicky Korean barbecue marinade.<br>As written, this recipe happily feeds 2 people.</p>
	  </section>
	  <h2>Ingredients</h2>
    <ul>
		  <li>1 Large Aubergine</li>
		  <li>Flavouring (Miso Paste, Hoisin Sauce, Bulgogi Sauce, etc.)</li>
		  <li>2 Pak Choi</li>
		  <li>Assorted Vegetables (We used green beans, sweetcorn & peas)</li>
		  <li>Noodles (Rice would also work)</li>
		  <li>(Opt) Sesame Seeds</li>
	  </ul>
		<p class="ingredient-section">Sauce:</p>
	  <ul>	
		  <li> 1 tbsp Sesame Oil</li>
		  <li> 6 tbsp Soy Sauce (Ketjap Manis also works well if you have it)</li>
		  <li> 1 garlic clove, finely minced or grated</li>
		  <li> Sprinkle of chilli flakes (depending on your spice tolerance)</li>
		</ul>
		
    <h2>Instructions</h2>
    <ol class="instructions">
		    <li>Preheat oven to 180°C.</li>
		    <li>Cut the aubergine lengthwise in half, and score into the flesh in a grid pattern (try not to break the skin).</li>
		    <li>Cut the pak choi lengthwise in half, brush both the pak choi and aubergine halves with oil, and season with salt and pepper.</li>
		    <li>Brush the aubergine with your flavouring of choice (try to get an even coat right up to the edges)</li>
		    <li>Place everything cut-side up on a baking tray and bake for 20 to 25 minutes.</li>
				<br>
		    <li>While it's baking, mix together the sesame oil, soy sauce, minced garlic & chilli flakes to make the sauce (this was inspired by the <a href="https://hungryhealthyhappy.com/roasted-pak-choi/"> Roasted Pak Choi</a> recipe, though we found it too enthusiastic with the sesame oil).</li>
		    <li>(Opt) Brush half the sauce over the pak choi halfway through cooking.</li>
		    <li>Fill a pan with boiling water, and boil the noodles & assorted vegetables (you may need to add some vegetables earlier depending on how quickly they cook).</li>
		    <li>Mix the sauce in with the noodles and vegetables, and plate up with some optional sesame seeds as garnish.</li>
      </ol>
	  ${divider}
	  <p>Enjoy! While writing this post I learned that bulgogi sauce is actually reasonably easy to make yourself according to <a href="https://www.chilipeppermadness.com/recipes/bulgogi-sauce/#wprm-recipe-container-26186">Chili Pepper Madness</a>. However with a name like that, and my personal spice tolerance hovering only just above "startled by black pepper", I'll definitely be making James taste any future attempts first. Bulgogi is apparently most commonly used with meat, but as a pescatarian all I heard was: "this would probably be incredible with mushrooms."</p>
    `,
  },
  {
    id: "quote-page",
    title: "💎 Verbal Treasures",
    metaTitle: "Verbal Treasures | Favourite Quotes & Tiny Reflections",
    metaDescription:
      "A playful collection of favourite quotes, thoughtful lines, and tiny reflections gathered in the Soft Alchemy quote aviary.",
    image: "/images/pinterest/quote-page-pin.jpg",
    imageAlt: "A screenshot of floating quotes",
    category: "Life",
    tags: ["books"],
    excerpt: "The time other people said it better...",
    content: `
	    <section class="summary-note">
	      <div class="summary-note-label"></div>
	 	  <p>I have a habit of hoarding good quotations whenever I come across them.<br>
			These have escaped! Catch one to reveal the full quote below.</p>
        </section>
	  
	    <div class="quote-filter">
          <select id="quoteCategoryFilter"></select>
        </div>
        <div class="flying-quotes" id="flyingQuotes"></div>
      
        <article class="quote-reveal" id="quoteReveal">
          <button class="close-quote" type="button">×</button>
          <p id="revealText" class="quote-text"></p>
          <p id="revealAuthor" class="quote-author"></p>
          <p id="revealCommentary" class="quote-commentary handwritten"></p>
        </article>
    `,
  },
  {
    id: "bingo-life",
    title: "🔢 A Bingo Life",
    metaTitle: "A Bingo Life | Gamify Your Goals with Personal Bingo Cards",
    metaDescription:
      "How to use personalised bingo cards to make goals, habits, dates, and monthly challenges more playful and achievable.",
    image: "/images/bingo-year.jpg",
    imageAlt: "A handwritten yearly bingo goal card",
    category: "Study",
    tags: ["goals", "self-improvement"],
    excerpt: "The time I gamified my goals and made bingo nerdy...",
    content: `
	<section class="summary-note">
	    <div class="summary-note-label"></div>
		<p>Create your own personalised bingo cards to make goals fun & set yourself a challenge. Make a grid to complete this week/month/year - you choose!</p>
      </section>
	  <p>
	  Do you struggle with an endless to-do list, or are you the type of person who doesn't know what they want? Interestingly this next framework helps for both! <br><br>
	  I'm assuming at this point, the concept of gamification is not new (turn your life into a game and things become more fun!), but how do you actually manage to do that successfully? 
	  The answer is by adapting an already existing game to make it suit your needs. In the case of bingo, you take a grid & fill it with your desires (large or small, all are welcome!), then you give yourself a deadline & see if you can get bingo. Simple enough? Here are some guidelines to flesh it out properly.
	  </p>
	  <br>
	  <h3>Choose your difficulty:</h3>
	  <ul>
	    <li>Easy Mode: Just aiming for a row, column or diagonal.</li>
	    <li>Hard Mode: Complete the full grid.</li>
	  </ul>
	  <h3>Choose your commitment:</h3>
	  <ul>
	    <li>5x5: This is the traditional size so you'll have 25 boxes to fill out.</li>
	  </ul>	
	  <ul class="picture-list picture-square">
        <li><img src="/images/bingo-jan.jpg"></li>
        <li><img src="/images/bingo-feb.jpg"></li>
        <li><img src="/images/bingo-march.jpg"></li>
        <li><img src="/images/bingo-april.jpg"></li>
        <li><img src="/images/bingo-may.jpg"></li>
      </ul>
	  <ul>
	    <li>4x4: Easier to complete as it's only 16 boxes and might be a good way to try out "Hard Mode" without it getting too crazy.</li>
	  </ul>
	  <h3>Choose your duration:</h3>
	  <ul>
	    <li>Day: Wouldn't recommend as it's not the quickest setup, but I can't stop you!</li>
	    <li>Week: Yet to try but a good way to feel accomplished each week.</li>
	    <li>Month: Useful for specifying goals for the month, I keep mine in my bullet journal's monthly spreads.</li>
	    <li>Year: Think of it as new years resolutions but without the guilt!
		<figure class="post-image">
		  <img src="/images/bingo-year.jpg">
		  <figcaption>I got creative with some friends & we each make one for the Chinese New Year - yes technically "Create a Blog" should be ticked off by now</figcaption>
        </figure>
		</li>
	  </ul>
	  <h3>Choose your goals:</h3>
	  <ul>
	    <li>Difficulty: Aim for a variety of easier & harder tasks, this lets you stretch yourself while also getting some quick wins.</li>
	    <li>Area: Unless it's topic specific like a relationship bingo card, try to choose goals across different areas (exercise, creative, social, financial, fun, work etc).
		<figure class="small-post-image">
		  <img src="/images/bingo-relationship.jpg">
		  <figcaption>Topic specific example: My partner & I made a relationship bingo card for dates/activities together</figcaption>
        </figure>
		</li>
	    <li>Placement: Either plop each goal wherever you like or get tactical so each column & row has a variety of difficulty level and different areas!</li>
	    <li>Blank Spaces: If you run out of goals before you run out of spaces consider having the middle point as a "free" space, adding some wacky things outside of your normal day-to-day, asking a friend, or looking at example bingo cards online.</li>
	  </ul>
	  ${divider}
	`,
  },
  {
    id: "the-library",
    title: "📚 The Library",
    metaTitle:
      "The Soft Alchemy Library | Book Recommendations for Curious Minds",
    metaDescription:
      "A growing collection of fantasy, thoughtful nonfiction, cosy reads, and quietly life-changing books from the Soft Alchemy library.",
    image: "/images/echo/echo-book.jpg",
    imageAlt: "Echo the papillon sitting beside a travel book",
    category: "Life",
    tags: ["books", "recommendation"],
    excerpt:
      "The time I tried to read in peace and was immediately supervised...",
    content: `
	<div class="two-column-layout left-wide">

      <section class="card start-here-card">
    
        <div class="start-here-content">
          <h3 class="start-here-title">
            Follow the Paw Prints
          </h3>
    
          <p>
            Wander through the shelves...
          </p>
	  	<ul class="chaos-list">
          <li><a href="/post.html?id=the-library#fantasy">Fantasy</a></li>
          <li><a href="/post.html?id=the-library#nonfic">Non-Fiction</a></li>
          <li><a href="/post.html?id=the-library#child">Young Adult</a></li>
          <li><a href="/post.html?id=the-library#games">Board Games</a></li>
          <li><a href="/post.html?id=quote-page">Quotes</a></li>
          <li><a href="/post.html?id=the-library#media">Youtube</a></li>
	    </ul> 
        
        </div>
        <div class="start-paw-trail">
          <img class="paw-print" style="--i:1" src="/images/paw-print.png" alt="">
          <img class="paw-print" style="--i:2" src="/images/paw-print.png" alt="">
          <img class="paw-print" style="--i:3" src="/images/paw-print.png" alt="">
          <img class="paw-print" style="--i:4" src="/images/paw-print.png" alt="">
          <img class="paw-print" style="--i:5" src="/images/paw-print.png" alt="">
        </div>
      </section>

			<section class="card quote-content">
	  <a href="/post.html?id=quote-page" class="quote-card-link">
        <blockquote>
          “Books are a uniquely portable magic.”
        </blockquote>
        <cite>
          — On Writing, Stephen King
        </cite>
	  </a>
    </section>
</div>

	<section class="card reading-shelf">
      <h3>⏳ Current Bookshelf</h3>
      <div id="current-bookshelf" class="shelf"></div>
    </section>
	<section id="fantasy" class="card reading-shelf">
	  <h3>✨ For Escaping Reality</h3>
      <div id="fantasy-bookshelf" class="shelf"></div>
    </section> 
	<section id="nonfic" class="card reading-shelf">
	  <h3>🔍 For Understanding the World</h3>
      <div id="nonfiction-bookshelf" class="shelf"></div>
    </section>
	<section id="child" class="card reading-shelf">
	  <h3>💖 For Your Inner Child</h3>
      <div id="nostalgia-bookshelf" class="shelf"></div>
    </section>
	<section id="media" class="card reading-shelf">
	  <h3>🎥 For Digital Rabbit Holes</h3>
      <div id="other-media-bookshelf" class="shelf"></div>
    </section>
	<section id="games" class="card reading-shelf">
	  <h3>🎲 For Gathering Around a Table</h3>
      <div id="board-game-bookshelf" class="shelf"></div>
    </section>
	
	<section class="card quote-content">
	  <a href="/post.html?id=quote-page">
	    <blockquote>
          “You want weapons? We're in a library. Books are the best weapon in the world. This room's the greatest arsenal we could have. Arm yourself!”
        </blockquote>
        
        <cite>
          — Doctor Who, Russell T. Davies
        </cite>
	  </a>
    </section>
		${divider}
	`,
  },
  {
    id: "sourdough-starter",
    title: "🥣 Starting a Sourdough Starter",
    metaTitle: "How to Start a Sourdough Starter | Beginner Guide",
    metaDescription:
      "A beginner-friendly guide to making a sourdough starter from flour, water, and a willingness to adopt a needy yeast pet.",
    image: "/images/sourdough-starter.jpg",
    imageAlt: "Homemade sourdough starter in a container",
    category: "Recipe",
    tags: ["sourdough", "vegan", "vegetarian"],
    excerpt:
      "The time I made a stinky, needy yeast pet and never looked back...",
    content: `
	  <img class="card-image" src="/images/sourdough-starter.jpg">
	  <section class="summary-note">
	    <div class="summary-note-label"></div>
		<p>All sourdough recipes call for a mysterious "starter", this is how you actually make your own: congrats on your new yeast baby! Yes it does take at least a week of daily feeding unless you can steal some from a friend or want to throw money at the problem.</p>
      </section>
      <h2>Ingredients</h2>
      <ul>
        <li>Flour (Which type? <a href="#qa">Check the Q&A below</a>)</li>
        <li>Water</li>
        <li>Patience</li>
      </ul>
      <h2>Instructions</h2>
      <ol>
        <li><b>Conception:</b> To start your starter mix together 50g of flour with 50ml water. Then abandon it with a loose lid for ~24 hours.</li>
        <li><b>Nurturing:</b> To grow your doughy lump into a strong bubbly starter you need to feed it daily. It wants equal parts starter, flour and water (e.g. 50g starter mixed with 50g flour & 50ml water).<br> 
		When it inevitably gets too big you'll want to remove some starter before adding the flour and water, this is called sourdough discard & can be used for multiple recipes (pancakes, crumpets, wraps, etc - just don't expect your discard to act as a raising agent the way an active starter will!)</li>
        <li><b>Maturity:</b> After about a week of daily feeding, your sourdough starter is ready to explore the wide world of making bread! You should be seeing the starter increase in size after its daily feeding and then partially collapse back down again. Timing your baking to use the starter at peak growth (~4 hours after it's last feeding) will set you up for maximum success.</li>
	  </ol>
	  <div class="qa-board" id="qa">
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Does the container matter?</span>
		</summary>
        <p>Not really as long as it's food safe! I've got one starter in an old food processor container & another in a plastic ex-crispy onions pot. Glass mason jars seem to be the internet's go to favourite option. Ideally your container will have some form of lid that you can loosely place on top to allow for airflow while minimising things falling in. (Having said that, even with a loose lid my kitchen's fly population seem annoyingly interested in both starters - just do what you can! 😅)</p>
      </details>
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">What type of flour should I use?</span>
		</summary>
        <p>The easiest (& usually cheapest) flour to start with is white bread flour, it keeps things civil & there are plenty of resources online to ask for help if things get sticky. You can also try using brown bread flour or rye flour. I would recommend sticking with one type while you're setting up your initial yeast colony & once it's mature you can change up what type you feed it based on what's available in the cupboard.<br>
		My first sourdough starter is now a combination of mostly white bread flour and occasionally brown bread flour. My second sourdough starter is pure rye flour (I also added some apple peel & left it outside for 24 hours as an experiment to see if that changes up the yeast & hence the bread flavour)</p>
      </details>
	  <details class="qa-card qa-card--long">
        <summary class="qa-click-area">
		<span class="qa-label">I have a life so can't feed daily - are my sourdough dreams ruined?</span>
		</summary>
        <p>No! Well... it depends, but probably not!<br>
		Ideally you will have a period of roughly a week where you can feed your starter daily, but after that your starter will be able to handle extended time alone provided you leave it in the fridge. This slows down the yeast & means it doesn't require feeding anywhere near as often - think of it as a time out for your starter. Once you're back and wanting to use it, take it back out of the fridge to room temperature & continue feeding daily as before. This is exactly what I do for both my starters if I'm gone for a long weekend or even if I'm just overwhelmed by the endless supply of discard dictating my lunch options because I refuse to throw away food.</p>
      </details>
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Why does it smell like nail varnish remover...?</span>
		</summary>
        <p>Don't worry - so do mine! 😅 It just means that your starter is hungry, and is still perfectly safe to bake with. Supposedly occasionally underfeeding a mature starter can improve the bread flavour but I may have just wanted to believe that as I naturally end up feeding inconsistently regardless!</p>
      </details>
      <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">My bread is dense - help!</span>
		</summary>
        <p>If your first loaf is a little dense fear not, your starter will continue to mature & improve over time (both of my starters first loaves were a bit dense). You can also add more starter to your recipe to help it along, just bear in mind you'll be changing the hydration proportion so your dough will likely be stickier unless you adjust the water/liquid to accommodate.<br>
		I also got a pretty dense loaf when I tried adding in a mix of whey & buttermilk instead of water, most likely I should have given it longer to rise to accommodate, another failed experiment to learn from!</p>
      </details>
	  <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">You make your starters sound like your babies - are you okay?</span>
		</summary>
        <p>It's perfectly normal to name your starters I'll have you know! The daily commitment and stinkiness of my starters just made the analogy inevitable, so there's nothing to read into. At all. So there.</p>
      </details>
    </div>
    `,
  },
  {
    id: "75-soft-plan",
    title: "🏆 75 Soft Challenge",
    metaTitle:
      "75 Soft Challenge Plan | Gentle Habits, Fitness & Self Improvement",
    metaDescription:
      "My personalised 75 Soft Challenge plan with meditation, reading, hydration, protein breakfasts, and 45 minutes of daily exercise.",
    image: "/images/75-soft-plan.jpg",
    imageAlt: "Handwritten 75 Soft Challenge commitment notes",
    category: "Study",
    tags: ["challenge", "goals", "self-improvement"],
    excerpt:
      "The time I joined the self-improvement internet hype three years late...",
    content: `
	<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>My 75 soft challenge daily commitment to a protein breakfast, meditation, reading, 6 glasses of water & 45 minutes of exercise. The plan is set in theory, time will tell how it works out in practice.</p>
	</section>
	<h2>What actually is a 75 Soft Challenge?</h2>
	<p>In case you missed the frenzy back in 2023; 75 Soft is the less harsh cousin of the 75 Hard Challenge. It focuses on building healthy routines rather than creating your own personal military bootcamp hell. <br>
	While the challenge spans 75 days, my hope is to create habits that are sustainable beyond that rather than collapsing in a drooling psychological heap 3 months from now. Typical rules/areas of focus include:</p>
    <ul>
      <li>🥑 Healthy eating/following some specific diet (this can also involve being mindful of alcohol & treats)</li>
      <li>💧 Hydration (drinking lots of water)</li>	
      <li>📖 Reading</li>	
      <li>🧘🏻‍♀️ Meditation</li>
      <li>💪 Daily exercise</li>	  
    </ul>
	<p> One of the main advantages of 75 Soft is that it allows for a lot of individual customisation, it also doesn't insist you restart the count to 75 if a day doesn't go as planned!</p>
	<h2>Planning my 75 Soft Commitments</h2>
	<ul>
	  <li>🍽️ <b>Diet:</b> Originally the plan was to reduce my snack addiction but after realising just how many snacks we have in the house after Easter & the latest bulk food shop I decided to leave that for a later challenge and switch gears.<br>
	  Generally I don't eat breakfast, and am powered by a combination of tea & sunshine. Having said that, I learned that unlike for men where intermittent fasting & a reduced eating window is very healthy; women's bodies are different to men's(!) and as a fairly skinny woman in her 30's I would majorly benefit from telling my body it doesn't need to panic and go into starvation mode each morning.<br>
	  ➜ Interested? Look up Dr. Stacy Sims <a href="https://www.youtube.com/watch?v=gZF-Ehfb3_o">Why Women Shouldn't Skip Breakfast</a></li><br>
	  <li>🫖 <b>Hydration:</b> I really don't want to spend all my time on the porcelain altar so rather than buying a mega water bottle & chugging 3L of water a day, I'm going to keep it simple. The NHS guidelines for adult women recommend 2 litres of fluid per day; my mugs & glasses contain roughly ~300-350ml, so I'm good as long as I have 6 drinks per day. Also notice how I said fluid rather than water? That means TEA COUNTS! 🎉🎉🎉 <br>
	  In short my goal is: glass of water as I wake up (~9am), morning English breakfast tea (~10am), water/drink with my lunch (~2pm), afternoon mint tea (~4pm), water/drink with dinner (~7.30pm), evening mint tea or even a celebratory chai/hot chocolate! (~9pm)
	  </li>
	  <br>
	  <li>🎧 <b>Reading:</b> I love reading, especially fantasy. Needless to say I'm not overly worried about this part. Having said that, I seem to have an existing to-do item in my backlog to actually read the many physical books gathering dust on the bookshelves, what's more I've had this to-do item for at least 6 years... 😅<br>
	  While I will happily add the daily commitment to either listen to 10 mins of audiobook or read 10 physical pages, I'm secretly hoping I won't always default to the audiobook and may actually finish a physical book or two!</li>
	  <br>
	  <li><img class="emoji" src="/images/medito-logo.png"><b>Meditation:</b> This is where I'm ahead of the game because one of last month's growth areas was learning how to meditate! (Yes I might have been paranoid about committing to so many things in the 75 soft challenge and figured I would set myself up for success as much as possible without cheating the system.)<br>
	  I currently am using the Medito app to follow daily guided meditations in the morning before my first tea (don't underestimate that specific caveat, it's a very powerful motivator for me!). The plan is to aim for 10 minutes with the option to increase or decrease the time as required by the day's commitments.</li>
	  <br>
	  <li>🏃🏻‍♀️ <b>Exercise:</b> Ah yes the final boss. Granted I would consider myself reasonably fit, and having a certain fluffball who insists on being walked certainly doesn't hurt when it comes to forcing myself to exercise. However, I want to actually challenge myself rather than just coasting through this on a 45 minute dog walk a day. I've also been wanting to improve my strength based exercise so that I might have visible abs sometime this year, and given bikinis are much better at showing off abs than Christmas jumpers, there's no time like the present to get started! Hence each day I get to take my pick of 45 minutes of the following exercise options:
	  <ul>
	    <li>Rucking while on a dog walk (fancy term for wearing a heavy backpack/weighted vest)</li>
	    <li>Jogging (with or without Echo)</li>
	    <li>Resistance/strength based work out</li>
	    <li>Tennis</li>
	    <li>Gentle recovery dog walk (aim for weekends only or if I really need it)</li>
	    <li>Any other legitimate exercise opportunity that comes up</li>
		</ul>
	  </li>
	</ul>
    <figure class="post-image">
	  <img src="/images/75-soft-plan.jpg">
	  <figcaption>Commitment Summary Notes</figcaption>
    </figure>	
	<h2>Implementing my 75 Soft Commitments</h2>
	<p>Did you notice how the tracker in my 75 Soft journal plan started with 1st May? That was meant to be my test day before I start properly on Wednesday 6th May after getting back from my Devon trip (yes James & I went to Devon to celebrate our 2 year anniversary - more on that in a later post!). Did you also notice how that test day doesn't have a complete row of ticks, and just a normal walk as my exercise? Turns out I might have been wrong to be so confident in all my commitment areas... 😅<br>
	Now that I've been suitably humbled, it's Wednesday 6th May 2026 and just turned 3pm on my first proper day of 75 Soft, and I think it's time to actually have lunch & do some exercise before I have to go back and pretend I meant to start tomorrow all along!</p>
	`,
  },
  {
    id: "tuna-sweetcorn-dumplings",
    title: "🥟 Tuna Sweetcorn Dumplings",
    metaTitle: "Tuna Sweetcorn Dumplings | Easy Pierogi-Inspired Recipe",
    metaDescription:
      "A cosy pierogi-inspired tuna sweetcorn dumpling recipe with homemade dough, creamy filling, and freezer-friendly batch cooking potential.",
    image: "/images/tuna-sweetcorn-dumplings.jpg",
    imageAlt: "Homemade tuna sweetcorn dumplings served with garnish",
    category: "Recipe",
    tags: ["dinner-party", "fish"],
    excerpt:
      "The time I discovered pierogi and immediately made them less traditional...",
    content: `
      <img class="card-image" src="/images/tuna-sweetcorn-dumplings.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Polish dumplings meet tuna sweetcorn filling, very moreish! Time consuming but worth it, makes around 30 depending on size & they freeze well for batch cooking.<br>Recipe inspired by <a href="https://www.recipetineats.com/pierogi-ruskie-polish-dumplings/">Pierogi Ruskie Polish Dumplings</a></p>
	  </section>
	  <h2>Ingredients</h2>
	  <p class="ingredient-section">Dough:</p>
      <ul>
		<li>300g Plain Flour</li>
		<li>50g Butter, melted</li>
		<li>125ml Water</li>
		<li>1 Egg</li>
	  </ul>
		<p class="ingredient-section">Filling:</p>
	  <ul>	
		<li>1 can Tuna (160g)</li>
		<li>100g Sweetcorn</li>
		<li>4 tbsp Mayo or Cream Cheese</li>
		<li>(Opt) 1 tbsp Soy Sauce</li>
      </ul>
	  <p class="ingredient-section">Optional Garnishes:</p>
	  <ul>	
		<li>Melted butter</li>
		<li>Crispy Onions</li>
		<li>Spring Onions (chopped)</li>
		<li>Chives</li>
		<li>Parsley</li>
		<li>Some sort of dip (Mayo, Sweet Chilli, take your pick)</li>
      </ul>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Make the Dough:</li>
		<li>Mix the flour with the melted butter and a pinch of salt</li>
		<li>Add the water and egg, and mix till combined</li>
		<li>Knead the dough on a floured surface until smooth (~5 minutes depending on enthusiasm)</li>
        <li>Leave it to rest for 30 minutes while you make the filling.</li>
        <li class="section-title">Make the Filling:</li>
		<li>Drain the tuna and mix with the sweetcorn & mayonnaise/cream cheese</li>
		<li>Season and optionally add any additional desired flavourings such as the soy sauce</li>
		<li class="section-title">Assembly and Cook:</li>
		<li>Roll out the dough on a floured surface & cut out circles (can use a mug or any circular object - I used roughly 3 inch diameter)</li>
		<li>Repeat with the scraps until you have as many identical circles as possible</li>
		<li>
          Place 1–2 tsp filling in the centre of the circle, brush the edge with water & fold in half using your fingers as indents to seal.
          <br>
          ➤ Freeze any you don't want to eat at this point! ❄️
        </li>
		<li>Bring a large pan of water to the boil and place the dumplings in a few at a time. Cook until they float (~5 minutes)</li>
		<li>(Optional) pan fry in melted butter for a crispy texture <br>(the onion butter sauce from the inspirational recipe is also great)</li>
		<li>Serve with your pick of melted butter over the top, parsley/chives, crispy onions (always a favourite) or some chopped spring onions, alongside a dip of your choice</li>
      </ol>
	  ${divider}
	  <p>Enjoy! My partner & I made a mix of these and the traditional cheesy potato Pierogi filling, needless to say we lost track of which was which and had mystery dumplings for dinner 😂 We served them with butter, crispy onions & parsley; ate half and froze the rest for a dumpling soup.</p>
    `,
  },
  {
    id: "echo-first-birthday",
    title: "🎂 Do Dog Birthdays Count?",
    metaTitle: "Do Dog Birthdays Count? | Echo’s First Birthday Adventure",
    metaDescription:
      "Echo the papillon celebrates his first birthday with Walkies at Wisley, dog ice cream, birthday cake, and a very serious dog review.",
    image: "/images/echo/echo-wisley.jpg",
    imageAlt: "Echo the papillon visiting RHS Wisley gardens",
    category: "Life",
    tags: ["dog-approved", "dog recipe", "recommendation"],
    excerpt:
      "The time my puppy turned one and somehow acquired an itinerary...",
    content: `
	<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Echo had his first birthday, <a href="#wisley">RHS Wisley gardens</a> do a dog event, he also got <a href="#ice-cream">dog ice cream</a> and his own <a href="#birthday-cake">birthday cake</a>!</p>
	</section>
	<p>
	It turns out for me dog birthdays definitely count. While I won't go as far as to organise a full-on birthday party, it is a wonderful excuse to crack out the dog cookbook I got for Christmas and give the dog approved birthday cake recipe a go. It is also the perfect excuse to upgrade the usual walk... 
	<h3 id="wisley">Exploring Wisley Gardens</h3>
	<img class="card-image" src="/images/echo/echo-wisley.jpg" alt="Nice view">
	<p>For those of you who live close enough to be interested: yes there is a special event <a href="https://www.rhs.org.uk/gardens/wisley/whats-on/walkies-at-wisley">Walkies at Wisley</a> where you can bring your favourite furry friends along to enjoy the beautiful scenery.
	</p>
	<p> Wisley Mini Review - the good: </p>
	<ul>
	<li>Gardens are gorgeous, especially the tulips during end of April (which sits close to my Dutch heart)</li>
	<li>Perfect dog exposure for puppies (to Echo's delight there were so many dogs there & he did his absolute best to say hello to all of them 😆). As an added bonus from a puppy perspective, all dogs need to stay on leads so you're able to control the interactions much more than you would on a normal walk, there's also likely to be a large variety of breeds so your puppy would get to meet big dogs, small dogs, old dogs, young dogs, the list goes on!</li>
	<li>Everyone was super friendly (granted this applies on most dog walks, there's just something about walking a dog that lets you open up to strangers in a wonderfully unique way)</li>
	</ul>
	<p>Wisley Mini Review - the bare in mind:</p>
	<ul>
	<li>There are only limited Walkies at Wisley events so make sure to plan ahead, this isn't something you can do on impulse but that also makes it more special</li>
	<li>The event only lasted 2 hours (6-8pm) which is a good chunk of time to see most of the gardens, but if your dog wants to sniff at every flower pot you'll want to look ahead at what parts of the garden you're specifically interested in seeing! (For me it was the wisteria walk and cherry blossoms - though I was sadly unsuccessful in finding the latter)</li>
	<li>Unlike your usual dog walks, there is a price for entry, though I would argue the effort put into the gardens fully justifies it & there is a membership option if you plan to go multiple times</li>
	</ul>
	<h3 id="ice-cream">Time to cool down</h3>
	<p>Another special event linked to Echo's birthday was his first introduction to dog ice cream! </p>
	<section class="dog-review">
      <div class="dog-title">Echo's Review - Ice Cream</div>
      <div class="dog-image">
 	   <img src="/images/echo/echo-ice-cream.jpg" alt="Dog Ice Cream">
 	   </div>
      <div class="dog-columns">
        <div class="dog-good">
          <h4>good</h4>
          <ul>
            <li class="loud">food!</li>
            <li>human hold pot</li>
            <li>tasty</li>
 	   	<li>human take extra home for dinner</li>
          </ul>
        </div>
      
        <div class="dog-bad">
          <h4>bad</h4>
          <ul>
            <li>too cold but must eat</li>
            <li class="sad">gone</li>
          </ul>
        </div>
      </div>
    </section>
	<h3 id="birthday-cake">Let them eat cake</h3>
    <div class="photo-collage">
      <img src="/images/cake-recipe.jpg">
      <img src="/images/frankie-cake.jpg">
      <img src="/images/dogs-birthday-cake-eating.jpg">
      <img src="/images/cake-mix.jpg">
      <img src="/images/dogs-impatient.jpg">
      <img src="/images/cake-cutting.jpg">
    </div>
	<div class="collage-caption">
      Recipe from <a href="https://www.amazon.co.uk/Tasty-Treats-Happy-Henrietta-Morrison/dp/1529105501/ref=asc_df_1529105501?mcid=6a48275ed91134a4b594982783c5be3e&th=1&psc=1&tag=googshopuk-21&linkCode=df0&hvadid=697222099338&hvpos=&hvnetw=g&hvrand=10954306607156466962&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9193746&hvtargid=pla-849129083265&psc=1&hvocijid=10954306607156466962-1529105501-&hvexpln=0&gad_source=1">Lily's Kitchen: Tasty Treats for Happy Dogs</a> 🐶🍰
    </div>

	`,
  },
  {
    id: "growth-areas",
    title: "🌿 Growth Areas",
    metaTitle: "Growth Areas | A Gentle System for Focused Self Improvement",
    metaDescription:
      "A simple monthly planning system for choosing three growth areas, reducing overwhelm, and turning too many goals into a focused plan.",
    image: "/images/grow-area-summary.jpg",
    imageAlt: "A handwritten growth areas planning page",
    category: "Study",
    tags: ["goals", "self-improvement"],
    excerpt: "The time I learned how to not overcommit myself...",
    content: `
	<p>
	Have you ever felt overwhelmed & like you should be doing a thousand things, while each day ends with the disappointment of having done what feels like nothing? If so, then I empathise and have been there with you most of my adult life! Each day dawns with the potential of 24 glorious hours to be filled with...
	</p>
	<ul class="chaos-list">
      <li>Learn Spanish</li>
      <li>Play Piano</li>
      <li>Reply to Emails</li>
      <li>Journal</li>
      <li>Learn about Flower Arranging</li>
      <li>Walk the Dog</li>
      <li>Bake Something</li>
      <li>Resistance Workout</li>
      <li>Water the Plants</li>
      <li>Shower</li>
      <li>Learn how to stop killing my plants</li>
      <li>Book next holiday</li>
      <li>Sort Finances</li>
      <li>Get better at coding</li>
      <li>Watch Brooklyn 99</li>
      <li>Cook epic dinner</li>
      <li>Try out CAD Program for Interior Design</li>
      <li>Dog Training</li>
      <li>Practice Handstands</li>
      <li>Do Yoga</li>
      <li>Shave my legs</li>
      <li>Go Jogging</li>
      <li>Sell Unwanted Clothes on Vinted</li>
      <li>Learn to Meditate</li>
      <li>Tidy the Kitchen</li>
      <li>Start 75 Soft Challenge</li>
      <li>Start the Bookclub Book</li>
    </ul>
	<p>Before you get overwhelmed, I present the answer: Growth Areas!</p>
	<h3>What are Growth Areas?</h3>
	<p>A growth area, is an area/topic you want to actively improve in. It's something where you want to focus intentional effort for a set period of time, in order to gain meaningful improvement. Most importantly I'm only allowed to have 3 growth areas per month (your own limit and time period you can of course choose for yourself!). The secret power in only having 3 is that every other potential growth area goes into a backlog list in my journal where it can no longer make me feel guilty for not giving it attention. The daily onslaught of "shoulds" goes <b>way</b> down to only the activities linked to the growth areas I've actively committed myself to (for example this month I'm focusing on daily meditation, this site and my garden).</p>
	<p> As a bonus if you enjoy planning, because you've actively committed to these specific growth areas you can also make a specific plan for what tasks you want to complete relating to that area, which reduces the overwhelm down even more to just the next action for each area.<br>
	<h3>Planning a Growth Area</h3>
	Some areas will be fairly simple:</p>
	<ul><li>Meditation plan: meditate daily using the Medito beginner course</li></ul>
	<p>Others will be a lot more complicated and can include:
	<ul>
	<li>Books to read</li> 
	<li>Things to buy (such as seeds & soil for my Garden Grow Area)</li>
	<li>General research (though I recommend being careful with this one as it's easy to fall down the "research" rabbit hole and come out the other end of the month wondering what you actually achieved. In short wherever possible be specific!)</li>
	<li>A list of tasks to do (I tend to keep mine in my monthly spread BuJo style given the growth areas span a month)</li>
	</ul>
	Here is my most complicated growth area plan to date: 
	</p>
	<figure class="small-post-image">
	  <img src="/images/house-grow-area-plan.jpg" alt="House Grow Area Plan">
	  <figcaption>I tried combining cooking, interior design, and more into a home making monster growth area.<br> As you can see I overcommitted 😅 </figcaption>
    </figure>
	<p>
	If you've already heard of the concept of a personal curriculum where you build your own learning pathway outside of the structure of school/university, growth areas fit in perfectly as they essentially represent one module/subject each which can be combined together to create the ultimate personal learning semester! Assuming you're onboard and ready to give it a go (given you've read this far) this is what a summary page of your grow areas can look like along with the tasks for my May Gardening Growth Area (a list on your phone also works fine, I'm just addicted to my journal):
	</p>
	<figure class="small-post-image">
	  <img src="/images/grow-area-summary.jpg" alt="Grow Area Overview">
    </figure>
	<div class="qa-board">
      <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">Can I still do tasks outside my planned growth areas?</span>
		</summary>
        <p>Of course! You can think of them as one off fun tasks to do alongside the growth areas without committing to a whole new project. In fact one off tasks are a great way to explore what future growth areas you might enjoy, for example playing a single song on an instrument for the fun of it without the pressure of needing to practice daily.</p>
      </details>
      <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">I'm doing a no-buy, would that count as a growth area?</span>
		</summary>
        <p>Unless your no-buy comes with learning about budgets & finance, it would count as a constraint not a growth area. Something is only a growth area if you are actively learning something (usually for the first time). Having said that, a no-buy is definitely something to keep in mind when deciding which growth areas to focus on so that those areas are possible without spending any money!</p>
      </details>
    </div>
	`,
  },
  {
    id: "sourdough-bread",
    title: "🍞 Sourdough Bread",
    metaTitle:
      "Simple Sourdough Bread Recipe | Beginner-Friendly Homemade Loaf",
    metaDescription:
      "A beginner-friendly sourdough bread recipe using simple ingredients, stretch and folds, overnight fridge proofing, and no fancy equipment.",
    image: "/images/sourdough-bread-half.jpg",
    imageAlt: "A homemade sourdough loaf cut in half",
    category: "Recipe",
    tags: ["sourdough", "vegan", "vegetarian"],
    excerpt:
      "The time I joined the 30 year old woman bandwagon and made sourdough bread...",
    content: `
	  <img class="card-image" src="/images/sourdough-bread-half.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Sourdough is epic and surprisingly less effort than traditional bread as it requires minimal kneading! I make mine over a 2 day period so heads up, it does take patience and some preplanning. Also note you don't need special equipment to make good bread: I use my hands, a bowl, weighing scales & my glass casserole dish - that's it!</p>
	  </section>
      <h2>Ingredients</h2>
	  <ul>
		<li>500g White Bread Flour (I'm sure you can use other bread flours I just haven't tried that yet!)</li>
		<li>350ml Water</li>
		<li>150g Sourdough Starter</li>
		<li>10g Salt</li>
		<li class="section-title">That's it unless you want to have fun with fillings or flavourings!</li>
      </ul>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Making the Dough (Day 1):</li>
		<li>First off feed your sourdough starter with an equal mix of flour and water, if you haven't already! You're aiming for your starter to be bubbly & have ideally doubled in volume (usually around 4 hours after feeding is best).</li>
		<li>Mix the flour and water together in a bowl</li>
		<li>Abandon it for a while to do something else, you're allowing for the autolyse process to happen which makes life easier for you. An hour is great, 20/30 mins if you are short on time will also work.</li>
        <li>Mix in sourdough starter and salt, and ideally leave for another 30 minutes</li>
        <li class="section-title">Stretch & Fold time (Still Day 1):</li>
		<li>
		Wet your hand (optional but helps dough stick less) then grab part of your dough and stretch it upwards, then plonk the stretched part on top.<br> 
		If that didn't make sense here is the video I used: <a href="https://www.youtube.com/shorts/_xdrLqeO9Bc">Stretch and Fold 101</a>
		</li>
		<li>Repeat this 4 times (though honestly I've done a couple more when I lost count)</li>
		<li>Leave for 30 minutes (a timer is highly recommended!)</li>
		<li>Repeat this process at least twice more (you're aiming for a minimum of 3 stretch and fold sessions, though more doesn't hurt especially if you've found a partner/minion to do it for you!)</li>
		<li>
		(Opt) Shape the dough (yes this is entirely optional!) but it helps the rise and makes it look prettier. You're essentially aiming to create tension within the dough surface without beating all the air out of it.<br>
		It's also hard to explain in text so here is the video I used: <a href="https://www.youtube.com/shorts/Z2Was_SY9Z0">How to Shape Sourdough</a>
		</li>
        <li>Place onto a floured banneton if you're fancy, or just straight into what you're going to bake it in (I use my circular glass caserole dish)</li>
		<li>Leave in the fridge overnight (or until you're ready to bake, I've left it up to 2 days before - it was slightly overproofed but still airy and tasty)</li>
		<li class="section-title">Bake (Day 2):</li>
		<li>Preheat oven to 220°C fan</li>
		<li>Transfer to desired baking vessel if not already done so & (opt) score the top with a knife</li>
		<li>Bake for 20 minutes with a lid (Dutch oven or casserole lid if you have it, otherwise tin foil will work too)</li>
		<li>Remove lid & bake for 20-25 more minutes</li>
		<li>Remove from oven and leave for 1 hour before slicing and eating (yes this is the hardest part)</li>
      </ol>
	  ${divider}
	  <p>Enjoy! I'm sure I don't need to tell you what to put on bread.<br> 
	  If you do get as obsessed with making sourdough as I have I highly recommend an electric bread knife!</p>
	  <img class="card-image" src="/images/sourdough-slices.jpg" alt="Nice view">
    `,
  },
  {
    id: "mushroom-wellington",
    title: "🍄 Mushroom Wellington",
    metaTitle:
      "Vegetarian Mushroom Wellington | Puff Pastry Dinner Party Centrepiece",
    metaDescription:
      "A vegetarian mushroom wellington with hoisin-style filling, puff pastry, rice paper anti-sog layer, and dinner party centrepiece energy.",
    image: "/images/mushroom-wellington-puff.jpg",
    imageAlt: "A golden vegetarian mushroom wellington wrapped in puff pastry",
    category: "Recipe",
    tags: ["dinner-party", "vegetarian"],
    excerpt:
      "The time I took a beef wellington, turned it vegetarian and sent it off to Asia...",
    content: `
      <img class="card-image" src="/images/mushroom-wellington-puff.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Great pastry centre piece for a roast, I fed 7 people and had leftover filling for sandwiches so feel free to half the recipe if desired. Be sure to leave enough time as the recipe includes some cooling steps and 20 minutes in the fridge before final bake!</p>
	  </section>
	  <h2>Ingredients</h2>
	  <p class="ingredient-section">Filling:</p>
      <ul>
		<li>2 tbsp Sesame Oil</li>
		<li>500g Mushrooms (finely chopped)</li>
		<li>6 cloves Garlic, minced</li>
		<li>1 tbsp Ginger, grated or minced</li>
		<li>6 Spring Onions, finely sliced</li>
		<li>(Opt) 2 tbsp Sherry, White Wine or Rice Wine</li>
        <li>300g Vegetarian Shredded “Duck” (Linda McCartney Vegetarian Shredded Hoisin Duck is my favourite)</li>
        <li>1 tin Water Chestnuts (drained + finely chopped)</li>
		<li>2 tbsp Soy Sauce</li>
		<li>2 tbsp Hoisin Sauce</li>
		<li>2 tsp Sesame Seeds</li>
	  </ul>
		<p class="ingredient-section">Structure:</p>
	  <ul>	
		<li>3 sheets Rice Paper (can do more if you want to double them)</li>
		<li>1–2 tsp Sesame Oil (for brushing)</li>
		<li>2 sheets Ready-rolled Puff Pastry</li>
		<li>1 egg or plant milk (for glazing)</li>
      </ul>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Make the Filling:</li>
		<li>Pan fry mushrooms in the sesame oil with a pinch of salt. Stir occasionally and cook till water completely cooked off and browned (expect 15-20 mins)</li>
		<li>Add garlic, ginger & spring onions, mix & cook for couple minutes</li>
		<li>Add vegetarian duck, water chestnuts, soy sauce & hoisin. Cook until hot & the liquid is all gone (we want the filling as dry as possible!)</li>
        <li>Mix in sesame seeds, taste & adjust as desired, then leave to cool</li>
        <li class="section-title">Make the Rice Paper Barrier (the anti-sog protection):</li>
		<li>Briefly dip each piece of rice paper in water and lay flat to let soften for ~30 seconds</li>
		<li>Lightly overlap 3 sheets to form a wide base & brush with sesame oil (I did this on top of baking paper to have extra control and reduce sticking)</li>
		<li>Pile filling onto rice paper and form a tight log, gently wrap the edges of the rice paper over the top to form a giant sausage shape (my rice paper broke a little but final wellington was still great so don't panic!)</li>
		<li>(Optional) cook in oven at 180°C for 10 minutes to improve the rice paper texture and let cool</li>
		<figure class="post-image">
		  <img src="/images/mushroom-wellington-prepuff.jpg" alt="Mushroom Wellington wrapped in rice paper coating">
		  <figcaption>If it looks anything like this, you're doing great! 🙌</figcaption>
        </figure>
		<li class="section-title">Final Assembly and Bake:</li>
		<li>Roll out the puff pastry, sealing the 2 sheets together with your fingers or a rolling pin</li>
		<li>Place the cooled log in the centre and wrap the pastry around it (decorate the top with any remaining pastry however you like, or place it seam down for minimalist look)</li>
		<li>Chill in fridge for 20 minutes</li>
		<li>Brush with egg wash or milk & bake 35 minutes at 180°C fan till deep golden</li>
      </ol>
	  ${divider}
	  <p>Enjoy! I served mine with a honey onion gravy, though if you want to fully embrace the Asian influence you can also use a soy & rice vinegar dip, or just more hoisin sauce!</p>
    `,
  },
  {
    id: "sabbatical-plans",
    title: "🌿 Sabbatical Plans",
    category: "Life",
    tags: ["goals", "reflection"],
    excerpt: "What I want to explore during my time off...",
    content: `
		<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>
		The plan is a lie, as is this post.<br>
	  I use it as a shameless template, who knows maybe one day I'll actually fill in the details 😅</p>
	  </section>
		`,
  },
];
