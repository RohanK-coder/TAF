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

export default function Vegetarian() {
    const recipes = [
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
