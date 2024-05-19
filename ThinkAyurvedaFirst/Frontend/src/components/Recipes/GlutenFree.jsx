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

export default function GlutenFree() {
    const recipes = [
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
