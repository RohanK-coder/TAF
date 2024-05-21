import React from 'react'
import { useRef } from 'react';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import BandAid from '../assets/bandAid.svg'
import ImgDoc from '../assets/ImgDoc.png'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader
  } from "@material-tailwind/react";
  import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  import { List, ListItem} from "@material-tailwind/react";
  function TestimonialCard({ img, client, title, clientInfo }) {
    return (
      <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
        <CardHeader color="transparent" floated={false} shadow={false}>
          <Typography
            color="blue-gray"
            className="lg:mb-20 mb-4 text-2xl font-bold"
          >
            &quot;{title}&quot;
          </Typography>
        </CardHeader>
        <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <Typography variant="h6" color="blue-gray">
              {client}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              {clientInfo}
            </Typography>
          </div>
          <img src={img} className="max-w-[8rem]" alt={client} />
        </CardBody>
      </Card>
    );
  }
  
  const testimonials = [
    {
      title:
        "As someone who values holistic health, this Ayurvedic app is a treasure. The option to book appointments both in-person and online provides flexibility. The health camps are a fantastic initiative, fostering a sense of unity in the pursuit of well-being. The store is my go-to for authentic Ayurvedic products. The nutrition guidance and BMI tracking features make this app stand out – it's not just a tool but a guide on my wellness journey.",
      client: "Leela M",
      clientInfo: "Hyderabad, India",
      
    },
    {
      title:
        "I've been using this Ayurvedic app for a year now, and it has truly transformed my approach to healthcare. Booking appointments with Ayurvedic doctors, whether in-person or online, is a breeze. The health camps provide a unique and accessible way to prioritize my well-being.The nutrition guidance and BMI feature are invaluable additions, making it a holistic health companion. Highly recommend to everyone to use it.",
      client: "Rajarshi M",
      clientInfo: "Mumbai, India",
      
    },
  ];
export default function HomeTest() {

  const passionRef = useRef();
  const introRef = useRef();
  const whatRef = useRef();
  const testimonialsRef = useRef();
  const doctorsRef = useRef();
  const navigate = useNavigate(); 
    const handleClick = () => navigate('/signup'); 
    const handleShop = () => navigate('/shop');
    const logout = () => {
      localStorage.removeItem('accessToken');
      navigate("/");
    };
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
  return (
    <>
    {/* Navbar */}
    <nav class="bg-gray-700 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 " id="navbar">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} class="h-8" alt="Flowbite Logo"/>
      
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  {accessToken ? (
        <>
        <p className='text-white pr-10 pt-2 opacity-80'>Signed in as {username}</p>
        <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logout}>Logout</button>
        
        </>
        ) : (
        <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Sign Up / Sign In</button>)}
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    <li>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 border-none bg-transparent px-3 py-2 text-sm  text-white shadow-sm  ring-inset ring-gray-300 hover:bg-transparent mt-1 font-semibold">
          Home
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
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
                <button
                  onClick={()=>
                    passionRef.current?.scrollIntoView({
                        behavior:"smooth"
                    })
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Passion
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>
                    introRef.current?.scrollIntoView({
                        behavior:"smooth"
                    })
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Introduction
                </button>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>
                    testimonialsRef.current?.scrollIntoView({
                        behavior:"smooth"
                    })
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Testimonials
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>
                    doctorsRef.current?.scrollIntoView({
                        behavior:"smooth"
                    })
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Doctors
                </button>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        {/* <a href="/" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a> */}
      </li>
      <li className='mt-2'>
        <a href="/shop" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
      </li>
      <li className='mt-2'>
        <a href="/blog" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
      </li>
      <li className='mt-2'>
        <a href="/recipes" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</a>
      </li>
      <li className='mt-2'>
        <a href="/dosha" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dosha</a>
      </li>
      
    </ul>
  </div>
  </div>
  
  
</nav>
{/* Text On Image */}
<div className='text-image' id="text-img">
        <p>We are here for your care</p>
        <h1>Best Care and Professional Doctors</h1>
        <p>ThinkAyurvedaFirst is the worlds first Ayurvedic platform app that focuses on both Disease Prevention and Management. Our aim is to make everyone ThinkAyurvedaFirst while seeking medical assistance.</p>
    </div>
    {/* Content 1 */}
    <div className='content1' id="content1" ref={passionRef}>
      <div className='con1'>
        <h1>Keep Going With Your Passion</h1>
        <p>ThinkAyurvedaFirst™ is a Business entity from Omni Health Care Solutions PVT Ltd. Our vision at ThinkAyurvedaFirst™ is to be the global leader in promoting Ayurveda as a holistic approach to health, empowering individuals to prioritize disease prevention and effective disease management</p>
        
        <p>We are committed to providing a comprehensive platform that blends ancient Ayurvedic wisdom with modern technology</p>
        
        <p>
          We aim to make Ayurveda accessible to all through our Android and iOS-compatible App
        </p>
      </div>
      <div className='con2'>
        <div>
          <img src={ImgDoc} alt=""/>
        </div>
      </div>
    </div>
    {/* Content 2 */}
    <div className='content2' id="content2" ref={introRef}>
      <div className='con21'>
        <Card className="mt-6 w-96">
        <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/05/s-fea-icon-1.png" alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
        Access to verified Ayurveda practitioners
        </Typography>
        <Typography>
        Verified practitioners ensure trustworthy access for users on platform
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/icons8-online-appointment-68.png" alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
        Online ayurveda consultations
        </Typography>
        <Typography>
        Secure online Ayurveda consultations for convenient healthcare access
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/icons8-reviews-64.png" alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
        Ayurveda user reviews and rating
        </Typography>
        <Typography>
        Users access reviews for insights on Ayurveda healthcare quality
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/05/s-fea-icon-1.png" alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
        Ayurveda wellness services
        </Typography>
        <Typography>
        ThinkAyurvedaFirst™ helps locate Ayurveda wellness facilities and service
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    </div>
        <div className='con22'>
            <h1>Introduction</h1>
            <p>ThinkAyurvedaFirst™ is the pioneering app dedicated to Ayurveda, emphasizing both disease prevention and management. With a global reach, it promotes the holistic approach of Ayurveda while addressing the challenge of accessing reliable treatments and consultations. It aims to make Ayurvedic healthcare accessible and personalized worldwide</p>
            <Card className="w-96 m-10">
             <List>
              <ListItem>Convenient Access</ListItem>
              <ListItem>Time and Cost Effective</ListItem>
              <ListItem>Increased Privacy</ListItem>
              <ListItem>Improved Continuity</ListItem>
             </List>
            </Card>
        </div>
    </div>
    {/* Numbers */}
    <div className='nums' id="numbers">
      <div>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/06/counter-icon-4.png" alt="" />
        <h1>540+</h1>
        <p>Expert Doctors</p>
      </div>
      <div>
      <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/06/counter-icon-5.png" alt="" />
        <h1>899+</h1>
        <p>Problems Solved</p>
      </div>
      <div>
      <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/06/counter-icon-6.png" alt="" />
        <h1>100+</h1>
        <p>Awards Winner</p>
      </div>
    </div>
    <div className='services'>
      <div className='heading'>
        <h1>What we do for you.</h1>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/05/section-title-line.png" alt="" width={250}/>
      </div>
      <div className='cards'>
      <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/onlineconsultants.png" alt="" className='pb-5'/>
        <p className='pagination'>01</p>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Appointment Booking
        </Typography>
        <Typography>
        Experience personalized consultations with our skilled Ayurvedic doctors, tailored to your constitution and health concerns. Choose between in-person appointments for intimacy or online sessions for convenience. Our dedicated professionals are committed to supporting your journey to optimal health
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/Screenshot-2024-03-06-1608151.png" alt="" className='pb-5'/>
        <p className='pagination'>02</p>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Health Camp
        </Typography>
        <Typography>
        We believe that by organizing health camps in local communities, Ayurveda can be extended beyond conventional bounds. These camps function as venues for educating people about Ayurvedic principles and providing treatments and consultations on-site. It’s how we help those who are most in need of Ayurvedic healing
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/icons8-shipping-48-1.png" alt="" className='pb-5'/>
        <p className='pagination'>03</p>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Ayurveda Shop
        </Typography>
        <Typography>
        Explore our curated range of Ayurvedic goods crafted to boost holistic well-being. From dietary supplements to skincare essentials, our platform offers diverse products sourced from trusted suppliers, adhering to Ayurvedic standards. Rest assured, each item aligns with Ayurvedic principles for a confident shopping experience
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/icons8-bmi-64-1.png" alt="" className='pb-10'/>
        <p className='pagination'>04</p>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        BMI / Nutrition
        </Typography>
        <Typography>
        Knowing your Body Mass Index (BMI) is essential for understanding your overall health. You can easily determine your body composition from the comfort of your home with our BMI testing option. Enter your height and weight to get your BMI quickly, along with tailored suggestions to help you reach your health objectives
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
      </div>
    </div>
    {/* Testimonials */}
    <section className="px-8 py-10 lg:py-28" id='testimonials' ref={testimonialsRef}>
        <div className="container mx-auto">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl"
          >
            The heartfelt testimonials of our community
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
          >
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
  
          
        </div>
      </section>
      {/* Doctors */}
      <div className='doctorsDiv' id='doctors' ref={doctorsRef}>
      <div className='heading'>
        <h1>Our Doctors</h1>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2019/05/section-title-line.png" alt="" width={250}/>
      </div>
      <div className='images'>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/maturu-varshini-Ayurveda-Panchakarma.jpg" alt="" width={200}/>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/SWETHA-SURESH-Ayurvedic-Panchakarma-and-Nutrition-Expert.jpg" alt="" width={200}/>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/Akshay-kale-skinpaimpediatries.jpg" alt="" width={200}/>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/Dr-Ganjam-GayatriDevi-Infertilityskin-diseases-etc1.jpg" alt="" width={200}/>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/Mallikarjuna-eleri-BAMSMS-AYURVEDA.jpg" alt="" width={200}/>
        <img src="https://thinkayurvedafirst.com/wp-content/uploads/2024/03/Abhinandana-Prasuti-tantra-and-stree-roga2.jpg" alt="" width={200}/>
      </div>
    </div>
    {/* Footer */}
    <footer class="bg-gray-600 dark:bg-gray-900" id='footer'>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={Logo} class="h-8 me-3" alt="FlowBite Logo" />
                  
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Reach Us</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline">+91 8055000016</a>
                      </li>
                      <li>
                          <a href="/" class="hover:underline">info@thinkayurvedafirst.com</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="/" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
    </>
  )
}
