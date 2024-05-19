import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Pagination } from '../Pagination';
import Dropdown from '../Dropdown';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Vegan() {
    const recipes = [
        {
            type:"vegan",
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
        <Card className="mt-6 w-72">
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
            {item.description.slice(0,100).concat(".....")}
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
