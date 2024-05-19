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

export default function Vata() {
    const recipes = [
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
