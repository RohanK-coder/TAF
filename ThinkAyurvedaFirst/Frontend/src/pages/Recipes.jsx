import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Pagination } from '../components/Pagination';
import Dropdown from '../components/Dropdown';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  

export default function Recipes() {
  const recipes = [
    {
    type:"Vegan",
    name: "Ayurvedic Digestion & Detox Spice Mix",
    description: "Ayurvedic cooking seeks to involve the SIX TASTES in every meal. The six tastes—sweet, salty, bitter, astringent, pungent, and sour—are composed of the five elements and are important for balancing your prakriti (individual nature).  An Ayurvedic spice mix is an easy way to incorporate the six tastes into your diet. By blending your own spice mix, you can not only enhance the flavor of your meals but also enjoy a myriad of medicinal benefits for the mind and body.",
    ingredients: "1 part TURMERIC 2 parts ground CUMIN 3 parts ground CORIANDER 4 parts ground FENNEL A pinch of BLACK PEPPER and GINGER (if you are extremely sensitive to spice, these last two can be left out)",
    
    
    preparation:"Mix these spices together in bulk and store in a jar. When you are cooking a meal, place a small amount of ghee in a frying pan and heat on medium. Add detoxifying spice mixture, measuring out one teaspoon of spice mixture per serving of vegetables. Sauté spices until the aroma is released (but be careful not to burn). Add salt and black pepper to taste. Add STEAMED VEGETABLES, mix lightly and sauté together for one minute. Or you can sauté the spice mixture in ghee and drizzle on vegetables or grains.",
    imgLink : "https://mapi.com/cdn/shop/articles/104_105_-_Digest_Detox_Spice_Mix_1200x_crop_center.png?v=1666876672",
    },
    
    
    {
    type:"vegan",
    name: "Ayurvedic Avocado Toast: Two Ways",
    description:"The popularity of avocado toast has boomed in recent years—and for good reason! It’s quick, convenient, and makes the perfect simple snack or LIGHT MEAL.This is just what’s called for when life gets busy, you’re feeling hangry, or you’re travelling without many fresh food options.Avocados are a good source of HEART-HEALTHY monounsaturated fat, and contain many vitamins and minerals. ",
    ingredients: "1-2 slices homemade or store bought whole-grain bread. ½-1 just-ripe avocado. Curry powder. Pink Himalayan salt ~Optional for Kapha:Garlic Pepper Tomatoes",
    preparation: "Toast bread in a toaster*, or in a pan with a bit of GHEE. Slice the avocado and fan it out across the bread. Smash the avocado with a fork if desired. For savory avocado toast, dollop some chutney or pesto on top, followed by a few shakes of curry powder and a pinch of pink Himalayan salt. For sweet avocado toast, dollop some organic jam on top, followed by a drizzle of tahini for extra creaminess.",
    imgLink : "https://mapi.com/cdn/shop/articles/Avocado_toast_900x_crop_center.jpg?v=1666876641",
    },
    
    
    
    {
    type:"vegan",
    name: "Chyawanprash Jam Dot Cookies",
    description:"Chyawanprash has long been used as a nutritive spread that helps to balance all the doshas. It helps to boost immunity, strengthen digestion and assimilation and boost memory and overall well-being. It can be a beneficial addition to our Winter routines that supports the respiratory and immune system.Because it’s blended in a base of amla or Indian gooseberry and honey, it has a jammy consistency and spiced flavor that also makes it a perfect addition to holiday treatswith great nutritional benefits. The key is not baking the precious chyawanprash to maintain the integrity of the spread without creating ama. Enjoy our take on the classic recipe - they won’t last long!",
    ingredients: "1 cup superfine almond flour 3 Tablespoons ghee, softened 3 Tablespoons maple syrup 1 teaspoon vanilla extract ⅛ teaspoon salt ½ cup Chyawanprash",
    preparation: "Preheat oven to 350°F. Line a baking tray with parchment paper. Add all ingredients (except for Chyawanprash) to a large mixing bowl, blending with a spoon or whisk until smooth and well combined. Using a tablespoon measure, portion out and shape cookies into balls and place on the baking tray, allowing room for cookies to expand in the oven. Using your thumb or backside of a tablespoon, indent a deep center where the chyawanprash will go after baking.To help the cookies maintain their shape in the oven, refrigerate for 20 minutes before baking. Bake for 10-12 minutes until golden. You may want to use a backside of a spoon to indent the centers further after baking while warm if your centers have evened out in the oven.Once cookies have cooled completely, using a teaspoon measure, portion out Chyawanprash to each center of the cookies, gently spreading and leveling as needed.",
    imgLink : "https://mapi.com/cdn/shop/articles/Chyawanprash_Jam_Dot_Cookies_900x_crop_center.jpg?v=1639604001",
    },
    
    
    
    {
    type:"vegan",
    name: "Fiber- Rich Apple And Date Breakfast Muffins",
    description:"These apple and date muffins are filled with fiber and warming and grounding spices to fuel your day during cold winter mornings. Combined with the high fiber ingredients of apple, dates, oats, almond flour and flax, they make for the perfect Vata pacifying morning meal or snack.We love ours with a dollop of ghee or nut butter.",
    ingredients: "1 ½ cup almond flour (can substitute flours with all purpose baking or whole wheat) ½ cup cassava or arrowroot flour ¼ cup rolled oats1 medium apple diced (approx 1 cup) ½ cup chopped dates 1- 1 ½ cup nut milk of choice ⅓ cup ghee or coconut oil, melted ¼ cup maple syrup 1 Tablespoon cinnamon powder 1 teaspoon cardamom powder 1 teaspoon vanilla bean powder or vanilla extract 1 teaspoon baking powder 1 teaspoon baking soda ½ teaspoon salt",
    preparation: "Preheat the oven to 350 degrees Fahrenheit, and grease a muffin tin with ghee or coconut oil. Chop and dice your apples and dates and set aside. Prepare flax egg and set aside for about 2 minutes to gel by simply combining flax meal with warm water. In a large mixing bowl, combine all dry ingredients and mix well. Next add your melted ghee or coconut oil, maple syrup and nut mix and again, mix well. Now fold in your apples and dates, adding additional nut milk if the batter is too dry. This is a thick batter that holds its shape, but it shouldn’t be crumbly. Using an ice cream scoop or large spoon, portion out into muffin tins to fill the whole tin. Because these muffins are so dense, they will not rise much. Bake at 350 degrees for 25-30 minutes until a toothpick comes out clean. Allow to cool slightly and enjoy warm with additional ghee or nut butter. Makes 12 small or 9 large muffins.",
    imgLink : "https://mapi.com/cdn/shop/articles/Fiber-_Rich_Apple_And_Date_Breakfast_Muffins_900x_crop_center.jpg?v=1642185184",
    },
    
    
    
    {
    type:"vegan",
    name: "Baked Grapefruit With Honey, Cardamom and Cinnamon",
    description:"In Ayurvedic practice, fruits are best consumed alone and cooked to get the most benefit. This light and detoxifying winter citrus makes the perfect breakfast or even dessert for a delicious dish that boosts immunity and helps to detox during the winter month for Vata and Kapha doshas. Grapefruit is rich in vitamin C, fiber, antioxidants and helps to cleanse and detox the whole system, stimulating digestion and bile production. In deep winter, we can begin to introduce some more purgative ingredients to help prepare our bodies for the coming Spring season and begin to move stagnant energy. The addition of raw honey adds a touch of grounding sweetness and immune-boosting properties, while cinnamon and cardamom help to additionally warm and stimulate the system.",
    
    ingredients: "As many grapefruit as desired 1 tablespoon honey per serving ½ teaspoon cardamom ½ teaspoon cinnamon",
    
    preparation: "Preheat oven to 350 degrees Fahrenheit. Slice grapefruit in half and sprinkle with spices. Set on a baking tray and bake for approximately 10-15 minutes until tender. Remove and allow to cool slightly before drizzling honey and additional spices, if desired.",
    imgLink : "https://mapi.com/cdn/shop/articles/Article_Baked_Grapefruit_900x_crop_center.jpg?v=1645633934",
    },
    
    
    
    {
    type:"Gluten Free",
    name: "Vegetable Barley Soup",
    description:"This hearty vegetable barley soup is cozy and delicious! Super easy to make, this healthy vegan soup is meal-worthy and perfect with a big crusty piece of bread.",
    ingredients: "2 tablespoons ghee 2 teaspoons Vata Churna or preferred spice mix 2 stalks celery, Thinly slice 2 carrots, Chopped 1 cup green beans, ⅓ cup pearl barley 4 cups water 1 bay leaf ½ teaspoon dried basil ¼ teaspoon dried thyme 1 teaspoon salt Pinch of freshly-ground black pepper ",
    preparation: "Heat ghee in a large pot and sauté the spice mix for 30 seconds. Add celery and carrots and sauté for 5 minutes. Add the rest of the ingredients and bring soup to a boil. Cover, lower heat and cook slowly, stirring occasionally, until barley is soft, about 2 hours. You can significantly reduce cooking time if you make this soup in a pressure cooker. Follow step one of the recipe, but in step two, after you add all ingredients, seal pressure cooker and bring it up to high pressure. Reduce heat to maintain pressure and cook for 15 minutes.",
    imgLink : "https://mapi.com/cdn/shop/articles/HP_Slider_Desktop_2600_x_1734_px_-_2024-01-19T123107.326_1512x_crop_center.png?v=1705686685",
    },
    
    {
    type:"Gluten Free",
    name: "Pomegranate Hot Toddy Mocktail",
    description:"Alcohol is not promoted in an Ayurvedic lifestyle or diet and wine is considered astringent and warming and can easily exacerbate symptoms of indigestion and pitta qualities. But during the holidays, there is something timeless about a warm hot toddy. More and more people have swapped alcohol for more beneficial beverages. Instead of a base of alcohol, pomegranate juice makes a perfect nutritive swap that has a similar flavor and is aligned with the seasonal energies of Winter. Pomegranates are loaded with Vitamin C, antioxidants, and additionally help to reduce inflammation and boost immunity. The addition of holiday warming spices also help to warm and promote digestion during the holiday season.",
    ingredients: "4 cups pomegranate juice 1 orange ¼ cup cranberries or pomegranate seeds 1 thumb fresh ginger, peeled and sliced 2 Tablespoons maple syrup 2 cinnamon sticks 3 star anise 4 cloves",
    preparation: "Slice the orange and reserve a couple pieces, specifically the peel for garnish. Add all ingredients to a large stock pot and heat on medium heat for approximately 5 minutes, until mixture begins to boil. Reduce heat to low and continue to cook for approximately 10 minutes, stirring occasionally. Serve warm with orange peel garnish.",
    imgLink : "https://mapi.com/cdn/shop/articles/Pomegranate_Hot_Toddy_Mocktail_1086x_crop_center.jpg?v=1639603822",
    },
    
    
    {
    type:"Gluten Free",
    name: "Herbed Gravy",
    description:"Celebrate the holidays with a plant-based gravy that doesn’t compromise flavor or irritate sensitive digestion this time of year. Using vegetable broth and nut milk instead of the traditional animal based alternatives, and fresh herbs, this gravy will compliment nearly any holiday meal.",
    ingredients: "2 cups of vegetable broth 2 leeks, finely chopped 2 garlic cloves, finely chopped ½ cup ghee 1 cup almond milk or other nut milk 4 tbsps all purpose flour 2 teaspoons ground cumin 1 tablespoon tarragon or sage, finely chopped Salt to taste",
    preparation: "Prep all vegetables. In a large hot pan over medium heat, add ghee, garlic and leeks until softened and caramelized. Stir often to prevent from burning. In a stock pot add almond milk and flour and whisk until all clumps are dissolved and mixture thickens. In a separate stock pot, add vegetable broth, herbs, leek mixture and almond milk and flour mixture together and whisk until well combined on medium heat. Allow to boil and whisk often until mixture reduces and thickens. Serve warm over our holiday nut loaf and stuffing.",
    imgLink : "https://mapi.com/cdn/shop/articles/Herbed_Gavy_900x_crop_center.jpg?v=1638548851",
    },
    
    
    {
    type:"Gluten Free",
    name: "Kitchari for the Monthly Cycle",
    description:"During your MONTHLY MENSTRUAL CYCLE—a time of purification and rejuvenation—your body naturally craves more rest. It’s a great time to take it easy (if you can!), avoid heavy exercise and activities, and nourish your body with easy-to-digest foods. In Ayurveda, kitchari is considered a great choice for the monthly cycle because it soothes and relaxes the digestive system. Kitchari is an easy, one-pot meal made with BASMATI RICE and MUNG BEANS cooked in a ratio of 2:1, with water and a little ghee. A simple but versatile Ayurvedic stew, kitchari can be made in 100 different ways for different purposes.",
    ingredients: "½ cup of Basmati rice ¼ cup split mung dahl (this is the green dahl, split in half with the green cover intact) 1 tablespoon of ghee ½ teaspoon of cumin seeds A pinch of hing ½ teaspoon of turmeric powder About ½ -1 teaspoon of fresh ginger root, peeled and grated 2 cups of fresh, seasonal vegetables like carrots, green beans, zucchini, squash, etc., diced (small) 4 cups of water Sea salt to taste",
    preparation: "Wash rice and dahl separately in at least 3 changes of water and soak for about ½ hour. In a medium saucepan, heat the ghee; add asafetida and cumin seeds. When the seeds splutter and change color, add the ginger root and turmeric. Discard the water that the dahl and rice have been soaking in and add to the saucepan. Add 4 cups of water and salt and stir. Bring to a boil on high, then lower the heat to the lowest possible and cover pan. Allow to cook until rice and dahl are tender. Add the vegetables and cover again and allow to cook for 10 more minutes. If you desire the kitchari to be soupier, heat some more water separately and add to this for a more liquid consistency.",
    imgLink : "https://mapi.com/cdn/shop/articles/Khichadi_900x_crop_center.jpg?v=1615894811",
    },
    
    
    
    {
    type:"vegeterian",
    name: "Saffron Risotto with Asparagus and Zucchini",
    description:"This saffron risotto recipe is a derivative of the delectable Mediterranean variety. Arborio is the standard variety of risotto found today. However, there are others available in specialty stores. We urge you to try them all. This family of rice is famous for its creamy texture and will absorb many times its weight in water. The unctuous quality can be a great comfort!",
    ingredients: "2 tablespoons GHEE 1 tablespoon Maharishi Ayurveda ORGANIC VATA CHURNA Pinch of SAFFRON 1½ cups of arborio rice 5¼ cups of warm water 1 large zucchini ½ pound of asparagus (about 12 medium spears) ½ yellow onion (optional) 1 tsp. lemon pepper seasoning ½ lemon Salt Fresh ground PEPPER Fresh cilantro for garnish",
    preparation: "Melt ghee in a medium stockpot. Bring to a medium-high heat, being careful not to burn. Sauté finely-chopped onion over medium-high heat until golden and add Organic Vata Churna. Stir in the saffron and the arborio. Bring the water to a boil in a kettle and set aside.Sauté above ingredients for a few seconds, then add ¼ cup water to slow cooking. Add cubed zucchini, chopped asparagus and the lemon pepper, and sauté lightly, mixing the contents of the pot well. Add 3 cups of water and bring to a boil. Cover and reduce heat to a medium simmer. Add remaining 2 cups of warm water, a quarter cup at a time, stirring frequently as the rice mixture absorbs the liquid. Stir in the juice of the lemon and ½ tsp. of salt. The absorption time is approximately 25 minutes, which may vary slightly according to cooking temperature. After the liquid is integrated and the dish is creamy, as a good risotto should be, turn off the stove and allow the dish to sit, covered, for five minutes. Add salt and fresh ground pepper to taste. Garnish with fresh chopped cilantro. Serve with ground Pecorino or Parmesan on the side, which can be sprinkled liberally over the top. Enjoy your delicious saffron risotto!",
    imgLink : "https://mapi.com/cdn/shop/articles/Safrron_asparagus_risotto_article_1200x_crop_center.jpg?v=1627987879",
    },
    
    {
    type:"vegeterian",
    name: "Vitality-Boosting Indian Pancakes",
    description:"Try Sunday brunch the Ayurveda way! Whip up a batch of delicious, protein-rich chilla (MUNG BEAN) pancakes in as little as 15 minutes! These versatile,EASY-TO-MAKE RECIPES can be modified any number of ways to be sweet, savory, or anything in between.",
    ingredients: "1 cup yellow split mung beans, washed 3-4 times and soaked in plenty of water to cover overnight Mung bean soak water ½ bunch cilantro (leaves and soft stems) 2 tablespoons FENNEL seeds 2 tablespoons CUMIN seeds Salt to taste GHEE for frying",
    preparation: "Add the soaked mung beans to a blender, retaining their soak water (the soak water contains nutrients and is used to blend the mung beans).Add 1 cup of soak water to the blender to start with, plus the spices and cilantro. Blend the beans, water, and spices to a smooth pancake batter consistency, adding a little bit more water as needed. Warm up a cast iron skillet or nonstick frying pan over medium heat. Add about 1 tablespoon of ghee.Once the pan is hot, but not smoking, ladle the batter onto the pan and quickly make a circular shape. Cook for 3-4 minutes, or until the underside appears golden. Add a little bit more ghee on top of the pancake, and then flip. Repeat with the remaining batter. Cook crispy (more time) or soft (less time), according to your preference. Serve warm, with savory toppings of choice.",
    imgLink : "https://mapi.com/cdn/shop/articles/Vitality-Boosting_Indian_Pancakes_1200x_crop_center.jpg?v=1666876700",
    },
    
    {
    type:"vegeterian",
    name: "Sourdough Stuffing",
    description:"Using fresh ingredients, Vata pacifying spices, and unprocessed sourdough bread, this stuffing helps to make a heavy meal, grounding and soothing to sensitive Vata season digestion without sacrificing a holiday classic.",
    ingredients: "1 loaf stale sourdough bread, or bread crumbs 24 oz vegetable broth 1 onion, chopped 3-4 stalks celery, chopped 1-2 large apples, diced 1 cup of pecans or walnuts, broken into smaller pieces 2 tablespoons equal parts fresh sage and thyme, finely chopped 1 tablespoon Vata Churna (may also use Pitta or Kapha churna) 1 tablespoon fennel seeds 3 tablespoons ghee or coconut oil Salt to taste",
    preparation: "Slice or tear stale bread and add to a large baking dish. Prepare nuts by rolling them in a dish towel and crushing them with a mallet or rolling pin to break into smaller pieces. Add to baking dish. Add ghee to a medium hot pan and add chopped onion. Cook, stirring often until translucent and add apples, celery and spices, and vegetable broth. Stir and reduce heat to medium low and cook until soft and tender. Approximately 5 minutes. Preheat oven to 375 degrees Fahrenheit. Pour mixture over bread crumbs and bake for approximately 45 minutes until golden browned. Serve with our holiday nut loaf and gravy.",
    imgLink : "https://mapi.com/cdn/shop/articles/Sourdough_Stuffing_1068x_crop_center.jpg?v=1638548686",
    },
    
    
    
    {
    type:"vata",
    name: "Chyawanprash Jam Dot Cookies",
    description:"Chyawanprash has long been used as a nutritive spread that helps to balance all the doshas. It helps to boost immunity, strengthen digestion and assimilation and boost memory and overall well-being. It can be a beneficial addition to our Winter routines that supports the respiratory and immune system. Because it’s blended in a base of amla or Indian gooseberry and honey, it has a jammy consistency and spiced flavor that also makes it a perfect addition to holiday treats with great nutritional benefits. The key is not baking the precious chyawanprash to maintain the integrity of the spread without creating ama. Enjoy our take on the classic recipe - they won’t last long!",
    ingredients: "1 cup superfine almond flour 3 Tablespoons ghee, softened 3 Tablespoons maple syrup 1 teaspoon vanilla extract ⅛ teaspoon salt ½ cup Chyawanprash",
    preparation: "Preheat oven to 350°F. Line a baking tray with parchment paper. Add all ingredients (except for Chyawanprash) to a large mixing bowl, blending with a spoon or whisk until smooth and well combined. Using a tablespoon measure, portion out and shape cookies into balls and place on the baking tray, allowing room for cookies to expand in the oven. Using your thumb or backside of a tablespoon, indent a deep center where the chyawanprash will go after baking.To help the cookies maintain their shape in the oven, refrigerate for 20 minutes before baking. Bake for 10-12 minutes until golden. You may want to use a backside of a spoon to indent the centers further after baking while warm if your centers have evened out in the oven. Once cookies have cooled completely, using a teaspoon measure, portion out Chyawanprash to each center of the cookies, gently spreading and leveling as needed.",
    imgLink : "https://mapi.com/cdn/shop/articles/Chyawanprash_Jam_Dot_Cookies_900x_crop_center.jpg?v=1639604001",
    },
    
    
    
    {
    type:"vata",
    name: "Vata Season Tofu Stir-Fry",
    description:"Warning: You’ll most likely make this every other night.",
    ingredients: "2 14-ounce packages of extra-firm tofu, drained and diced into 1-inch cubes 1 tablespoon of ghee 2 teaspoons sesame oil 2 tablespoons of sesame seeds3 tablespoons of soy sauce, divided ½ a white onion, diced 3 garlic cloves, minced 1 tablespoon minced fresh ginger 10 ounces baby chard 1 carrot, julienned 1 zucchini, chopped into 1-inch quarters 2 cups cooked basmati rice",
    preparation: "In a non-stick skillet, melt the ghee over medium-high heat. Add in the tofu, and drizzle one tablespoon of soy sauce over top. Stir the tofu in the skillet until all sides are brown. Add in the carrots, garlic, onion, and ginger—Cook for one minute. Add in the zucchini and remaining soy sauce and cook for two minutes. Add in the baby chard, and saute until the leaves are wilted.Stir in the sesame seed and sesame oil. Plate the stir fry along with half a cup of rice. Garnish with sesame seeds. Serve and enjoy!",
    imgLink : "https://mapi.com/cdn/shop/articles/TofuStirFry_1200x_crop_center.jpg?v=1633533359",
    },
    
    {
    type:"vata",
    name: "Golden Glow Tonic",
    description:"Add a shimmering radiance to your complexion.You'll be glowing in no time from this healthy and delicious drink.",
    ingredients: "· 1 cup water · ½ tsp. ground ginger · ½ tsp. ground turmeric · 1 teaspoon honey · Juice of half a lemo · Juice of one carrot · Sparkling water for topping (optional)",
    preparation: "Combine all ingredients in a glass jar and whisk until well combined. Pour into a rocks glass three-quarters of the way, and top the glass with sparkling water.",
    imgLink : "https://mapi.com/cdn/shop/articles/Golden_Glow_Tonic_1200x_crop_center.jpg?v=1635178641",
    },
    
    {
    type:"vata",
    name: "Prostate Balancing Yoghurt Drink",
    description:"",
    ingredients: "1 quart plain, whole-fat yoghurt 3 leaves of holy basil teaspoon of fennel seeds¼ teaspoon coriander seeds 6 white pumpkin seeds or 6 fresh cucumber seeds",
    preparation: "1. In a small saucepan, bring half a cup of water to a boil. Add in the holy basil, fennel seed, coriander seed, and 6 white pumpkin seeds or 6 fresh cucumber seeds. 2. After boiling for 5 minutes, remove from heat and allow for the water to cool completely. 3. In a blender, add in yoghurt. Strain the water from the saucepan into the blender, and blend until smooth. 4. Serve and store the leftovers in a jar in the fridge.",
    imgLink : "https://mapi.com/cdn/shop/articles/Prostate_Balancing_Yoghurt_Drink_b35c600d-5a36-4463-a4cb-9ef91f83b53b_900x_crop_center.jpg?v=1636132728",
    },
    
    {
    type:"vata",
    name: "Turmeric Coconut Smoothie",
    description:"Need a midday pick-me-up, or some post-yoga hydration? This sweet and salty Ayurvedic smoothie recipe is light, filling, and full of energizing vitamins and minerals. The star ingredient is TURMERIC—India’s golden spice. It also contains bananas and salt for post-workout potassium and electrolyte balancing. ",
    ingredients: "1 cup almond milk or coconut milk ½ cup mango chunks and/or ½ cup pineapple chunks 1 medium banana 1 tablespoon coconut oil ½ teaspoon turmeric (can increase to 1 tsp.) ½ teaspoon CINNAMON ½ teaspoon GINGER A dash of Himalayan pink salt; adjust to taste A pinch of freshly-ground black pepper; adjust to taste A little honey (optional) if you like it a little sweeter",
    preparation: "Using a high-speed blender, combine all ingredients in the blender and blend until smooth. Adjust all seasonings to taste. Enjoy!",
    imgLink : "https://mapi.com/cdn/shop/articles/Coconut_Smoothie_900x_crop_center.jpg?v=1642637276",
    },
    
    
    {
    type:"pitta",
    name: "Summer Pasta with Cream Sauce",
    description:"This bright, veggie-rich pasta casserole is a wonderful choice for warm summer nights. It's fast, delicious, and lighter than you might think! You can find many of the ingredients at your local farmers market. Nothing beats a cool evening on the patio with a bowlful of farm-fresh summer pasta! ",
    ingredients: "16 oz. ziti, rotini or fusilli, cooked until al dente 16 oz. shredded skim organic mozzarella 6 organic Roma tomatoes 3 large organic zucchini (cubed) ½ pint thick coconut milk (not cream) 2 oz. organic Parmesan (grated) ½ cup water 2 tbsp. organic olive oil 2 tbsp. organic ghee with lemon, dill and thyme1 tbsp. ORGANIC PITTA CHURNA 1 tbsp. rubbed sage 1 tsp. salt Fresh ground pepper",
    preparation: "Combine ghee and olive oil in a large frying pan and bring heat to medium high. Add the Organic Pitta Churna, sage, salt and cubed zucchini and sauté on medium for four minutes, stirring constantly. Add water (and coconut milk) and cover. Return to high until mixture boils and then reduce to medium heat and cook for 10 minutes until slightly reduced in liquid. Add three chopped Roma tomatoes, cover and simmer for an additional five minutes. Remove from stove. In a large casserole dish, spread the cooked pasta evenly. Gently pour the cooked zucchini-and-cream mixture on top of the cooked pasta. Grind pepper to taste over the top, then add the shredded mozzarella. Finally, garnish with the last three Roma tomatoes (sliced) and the Parmesan. Cover casserole tightly and place in a 400 °F oven for 15 minutes.",
    imgLink : "https://mapi.com/cdn/shop/articles/Shopify_Images_3af0f476-5df6-4124-837e-a25267c4504f_900x_crop_center.png?v=1690204784",
    },
    
    {
    type:"pitta",
    name: "Rose Petal Thirst Quencher",
    description:"In Ayurveda, the rose is recognized as a potent remedy for many imbalances, especially to help cool an excess of fiery PITTA DOSHA. The essence of rose appears in aromatherapy, and tonics are made from mixing rose paste, water, and spices. Rose is equally beneficial externally. Cold poultices with rose and sandalwood paste are sometimes recommended to cool any burning on the skin. The rose enhances beauty in many ways. Creams and poultices cool, moisturize, and tone the skin.Massaging the body with rose and sandalwood sachets augment the glow and complexion of the skin.",
    ingredients: "2 cups of organic MILK, or plant-based milk  ½ teaspoon of FENNEL 1 pod of CARDAMOM seeds (crushed but not powdered) 1 small piece of LICORICE root 1 tablespoon of ORGANIC ROSE PETAL SPREAD",
    preparation: "Boil milk and other ingredients, except the conserve, for five minutes. Let cool to room temperature. Mix in one tablespoon of Organic Rose Petal Spread. Add to a thermos to sip and keep warm. ",
    imgLink : "https://mapi.com/cdn/shop/articles/Rose_Petal_Thirst_Quencher_1200x_crop_center.png?v=1623184159",
    },
    
    {
    type:"pitta",
    name: "Be Trim Balancing Latte",
    description:"",
    ingredients: "1 cup nut milk 1 cup warm brewed Be Trim Tea 1 tablespoon Maple syrup 1 teaspoon to tablespoon ghee or coconut butter 1 teaspoon of chai spice mix or cinnamon (optional) Chai spice mix - cardamom, cinnamon, fennel, ginger, star anise, coriander, clove",
    preparation: "Brew 6-8 oz. (1 tea bag) of Be Trim Tea for 5-8 mins. Add all ingredients to a high speed blender and blend until well combined and smooth and creamy. Serve warm sprinkle with additional cinnamon or cardamom and serve with a cinnamon stick if desired.",
    imgLink : "https://mapi.com/cdn/shop/articles/02A8D8D9-ADB1-421B-B7D0-3A0044ACBA42_1_105_c_900x_crop_center.jpg?v=1640833096",
    },
    
    {
    type:"pitta",
    name: "Pomegranate Hot Toddy Mocktail",
    description:"Alcohol is not promoted in an Ayurvedic lifestyle or diet and wine is considered astringent and warming and can easily exacerbate symptoms of indigestion and pitta qualities. But during the holidays, there is something timeless about a warm hot toddy. More and more people have swapped alcohol for more beneficial beverages. Instead of a base of alcohol, pomegranate juice makes a perfect nutritive swap that has a similar flavor and is aligned with the seasonal energies of Winter. Pomegranates are loaded with Vitamin C, antioxidants, and additionally help to reduce inflammation and boost immunity. The addition of holiday warming spices also help to warm and promote digestion during the holiday season.",
    ingredients: "4 cups pomegranate juice 1 orange ¼ cup cranberries or pomegranate seeds 1 thumb fresh ginger, peeled and sliced 2 Tablespoons maple syrup 2 cinnamon sticks 3 star anise 4 cloves",
    preparation: "Slice the orange and reserve a couple pieces, specifically the peel for garnish. Add all ingredients to a large stock pot and heat on medium heat for approximately 5 minutes, until mixture begins to boil. Reduce heat to low and continue to cook for approximately 10 minutes, stirring occasionally. Serve warm with orange peel garnish.",
    imgLink : "https://mapi.com/cdn/shop/articles/Pomegranate_Hot_Toddy_Mocktail_900x_crop_center.jpg?v=16396038",
    },
    
    
    {
    type:"kapha",
    name: "Caffeine-Free Kapha Tea Chai",
    description:"In India, a warm cup of well-spiced chai (tea) is synonymous with comfort. And while most traditional recipes call for a base of black tea, this Ayurvedic recipe is made using caffeine-free KAPHA TEA. Perfect for cool, rainy weather and days when you’re feeling sluggish or congested, Kapha tea is a zesty blend of stimulating spices. Brew it with extra spices and almond/oat milk, and you have a delicious, caffeine-free take on traditional chai. ",
    ingredients: " 6 tea bags of KAPHA TEA 4 cups of water A few cinnamon sticks 10 cloves A slice of fresh ginger ½ gallon of almond milk or oat milk Sugar to taste",
    preparation: "Boil 4 cups of water with 6 bags of KAPHA TEA for 10 minutes. Try not to let the water evaporate; add more if needed. Add a few cinnamon sticks and a small bunch of cloves (around 10 or so), along with a slice of fresh ginger (adding more or less, to your taste). Continue to boil it until the color becomes rich and golden. Next, add 1/2 gallon of almond milk or oat milk. Finally, add sugar to taste and bring to a final slow boil, making sure to stir now and then. (Be sure not to use too high heat, otherwise your chai will taste slightly burnt.)",
    imgLink : "https://mapi.com/cdn/shop/articles/Link_Card_Sizing_-_2022-12-08T130819.293_900x_crop_center.png?v=1670504954",
    },
    
    {
    type:"kapha",
    name: "Baked Delicata Squash",
    description:"This lovely vegetable is a winter squash that is conveniently found this time of year. Look for the enticing green and gold striations that flank its ridges. The raw vegetable makes a beautiful addition to a centerpiece based on a fall theme.",
    ingredients: "2 large delicata squash, eight to ten inches in length, split lengthwise and seeds and pulp removed with a spoon. ¼ cup of ghee with garlic and rosemary 2 teaspoons of Organic Kapha Churna ¼ cup of golden raisins Salt Dark brown sugar",
    preparation: "Preheat the oven to 425 °F. In a rectangular casserole dish, bake the prepared squash, covered, cut side down in ¼ inch of water for 30-35 minutes or until tender. Insert a sharp knife into the back of one of the halves to check for tenderness. Leave covered while preparing the sauce. In a small saucepan, add the ghee and bring to a high heat. Add the golden raisins and Organic Kapha Churna, and salt to taste. Stir the ingredients together well until the aroma of spices is released, for about one minute. Remove from the stove and lay the squash halves upright so that the cavity is exposed on each half. With a teaspoon, divide the sauce equally between the squash and lightly blend. Then take several pinches of brown sugar and sprinkle over the top. Serve immediately, while hot. ",
    imgLink : "https://mapi.com/cdn/shop/articles/159_-_Baked_Delicata_Squash_900x_crop_center.png?v=1619637786",
    },
    
    {
    type:"kapha",
    name: "Vegetable Barley Soup",
    description:"",
    ingredients: "2 tablespoons ghee 2 teaspoons Vata Churna or preferred spice mix 2 stalks celery, Thinly slice 2 carrots, Chopped 1 cup green beans, ⅓ cup pearl barley 4 cups water 1 bay leaf ½ teaspoon dried basil ¼ teaspoon dried thyme 1 teaspoon salt Pinch of freshly-ground black pepper ",
    preparation: "Heat ghee in a large pot and sauté the spice mix for 30 seconds. Add celery and carrots and sauté for 5 minutes. Add the rest of the ingredients and bring soup to a boil. Cover, lower heat and cook slowly, stirring occasionally, until barley is soft, about 2 hours. You can significantly reduce cooking time if you make this soup in a pressure cooker. Follow step one of the recipe, but in step two, after you add all ingredients, seal pressure cooker and bring it up to high pressure. Reduce heat to maintain pressure and cook for 15 minutes.",
    imgLink : "https://mapi.com/cdn/shop/articles/HP_Slider_Desktop_2600_x_1734_px_-_2024-01-19T123107.326_900x_crop_center.png?v=1705686685",
    },
  ]    
  return (
    <>
    <div className='recipes'>
       <div className='bg-green-500 mb-5 '>
       <h1 className='text-5xl text-white font-black tracking-wide mt-20 opacity-70 ml-5'>Nutritious Recipes</h1>
       <h4 className='text-l text-black font-black tracking-wide opacity-70 m-5'>In Ayurveda, food is medicine. Fuel yourself with delicious Ayurvedic meals, healthy entrées, snacks, and desserts that bring balance to your unique mind-body type. Search by meal—or explore our extensive collection of Ayurvedic recipes for Vata, Pitta, and Kapha dosha types.</h4>
       </div>
       <div className='flex ml-10 mb-5'>
        <p className='mr-5'>Filter By : </p>
        <div>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
           By Diet  
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/vegan"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Vegan
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/glutenfree"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Gluten Free
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/veg"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Vegetarian
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        </div>
        <div>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          By Dosha
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/vata"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Vata
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/pitta"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pitta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/kapha"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Kapha
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        </div>
       </div>
       <div className='recipes-cards'>
       {recipes.map(item=>(
        <Card className="mt-6 w-64">
        <CardHeader color="blue-gray" className="relative h-36">
          <img
            src={item.imgLink}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <Typography variant='p' color='red'>
            type : {item.type}
          </Typography>
          <Typography variant='p'>
            {item.description.slice(0,30).concat(".....")}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
        
       ))}
       </div>
       <Pagination/>
    </div>
    
    </>
  )
}
