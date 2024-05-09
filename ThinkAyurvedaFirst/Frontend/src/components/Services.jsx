import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function Services() {
  return (
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
  )
}
