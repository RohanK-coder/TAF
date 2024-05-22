import React from 'react'
import { Slider } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Logo from '../assets/logo.png'
import { Pagination } from '../components/Pagination';
const products = [
    {
      id: 1,
      name: 'A Flu-O-Cil-30tb-Dhootapapeshwar',
      href: '#',
      price: '₹216.00',
      imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/03/dp-1-300x300.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Abhayarishta-Baidyanath-450ml',
      href: '/shopsample',
      price: '₹170.00',
      imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Baidyanath-Abhayarishta-Main-300x300.webp',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Abhayarishta-Dhootapapeshwar -450ml',
      href: '#',
      price: '₹170.00',
      imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Abhayarishta-600x765-1-300x300.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Acne N Pimple Cream-120gm',
      href: '#',
      price: '₹240.00',
      imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Screenshot-34-e1714469947998-280x300.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Agnitundi Vati',
        href: '#',
        price: '₹189.00 – ₹4,725.00',
        imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Agnitundi-Vati-300x300.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Aloevera – Neem',
        href: '#',
        price: '₹80.00',
        imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Screenshot-38-e1712921580985-300x300.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'ALONE Guntagalagara Oil',
        href: '#',
        price: '₹200.00',
        imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/03/MicrosoftTeams-image-2-300x300.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Amalaki – 1000mg Tablet',
        href: '#',
        price: '₹495.00',
        imageSrc: 'https://thinkayurvedafirst.com/wp-content/uploads/2024/05/522D335E-AC3B-410A-A66D-8326769E6F0A_1400x-300x300.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      
    // More products...
  ]

export default function Shop() {
  return (
    <div className='shop'>
        <div className='shop0'>
            
            <img src={Logo} alt="" width={250}/>
        </div>
        <div className='shop1'>
        <h1 className='text-5xl text-black font-black tracking-wide mt-5'>SHOP</h1>
        <div className="w-72 ">
             <Input label="Search for product" />
          </div>
            <div className='flex flex-col items-start justify-start '>
              <div>
                <h3 className='text-l mb-2 font-bold'>Filter by Price</h3>
              </div>
              <div className='flex flex-row gap-5'>
                <div><sub>500/-</sub></div>
                <div><input type="range" id="cowbell" name="cowbell" min="0" max="100" defaultValue="50" step="20" /></div>
                <div><sub>5000/-</sub></div>
              </div>
            </div>
            <div>
                <form class="max-w-sm mx-auto">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Categories</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Diarrhea</option>
                    <option value="US">Abdominal Colic</option>
                    <option value="CA">Abdominal Pain</option>
                    <option value="FR">Acne Care and Prevention</option>
                    <option value="DE">Asthma</option>
                    <option value="DE">Beard Wash</option>
                    <option value="DE">Anti Aging</option>
                    <option value="DE">Beauty</option>
                    <option value="DE">Black Spots</option>
                    </select>
                </form>
            </div>


          
        </div>
        <div className='shop2'>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Pagination/>
        </div>
      
    </div>
  )
}
