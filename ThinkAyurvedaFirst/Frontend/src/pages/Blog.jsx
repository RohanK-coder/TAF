import React from 'react'
import { Slider } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Logo from '../assets/logo.png'
import { Pagination } from '../components/Pagination';
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader
} from "@material-tailwind/react";
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
      href: '#',
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
  const blogs = [
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },
    {
      heading:"Ayurvedam",
      text: "daflkdlf jldskfald kldfhlkda khlsdfkhldsj khjsdhfljdhasl lkdhflkjdsh lsjdhfueKJ n dfhdaskfbdsahkj lskdfhiuehkjbc fjkhdfiohf",
    },

  ]
  const listItems = blogs.map(card =>
    <li>
      <Card className="w-25 mb-4">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {card.heading}
        </Typography>
        <Typography>
          {card.text}
        </Typography>
      </CardBody>
      
      
    </Card>
    </li>
  )

  const blogMain = [
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
    {
      heading: "UI/UX Review Check",
      text:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    },
  ] 
  const blogMainItems = blogMain.map(card => 
    <li>
      <Card className="mt-8 w-72">
      <CardHeader color="blue-gray" className="relative h-45">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {card.heading}
        </Typography>
        <Typography>
          {card.text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </li>
  )

export default function Blog() {
  return (
    <>
    <div className='shop'>
        <div className='shop0'>
            
            <img src={Logo} alt="" width={250}/>
        </div>
            <div className='shop1'>
                <h1 className='text-5xl text-black font-black tracking-wide mt-5'>BLOGS</h1>
                <h1 className='text-xl text-gray-500 font-black tracking-wide'>People's Words</h1>
                
                <ul>{listItems}</ul>
      
    
            </div>
        <div className='shop2'>
        <div className='carousel'>
          <Carousel
      className="rounded-xl mt-5"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
        </div>
        <div className="bg-white">
        <ul className='flex items-start justify-start flex-wrap gap-10 mb-8'>{blogMainItems}</ul>
      
        </div>
          <Pagination/>
        </div>
      
    </div>
    </>
  )
}
