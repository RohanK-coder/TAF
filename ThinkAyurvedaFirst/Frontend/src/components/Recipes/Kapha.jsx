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

export default function Kapha() {
    const recipes = [
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
