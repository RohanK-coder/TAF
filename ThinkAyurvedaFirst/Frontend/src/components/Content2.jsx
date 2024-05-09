import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { List, ListItem} from "@material-tailwind/react";

export default function Content2() {
  return (
    <>
    <div className='content2'>
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
    </>
  )
}
