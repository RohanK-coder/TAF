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

export default function Pitta() {
    const recipes = [
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
