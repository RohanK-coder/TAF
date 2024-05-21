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
      heading:" Harnessing Ayurveda: Effective Remedies For Migraine Relief ",
      description:"   Introduction: Migraines can be debilitating, affecting millions of people worldwide. While conventional medicine offers solutions, Ayurveda, the ancient Indian system of medicine, presents holistic approaches […]",
      imgLink:"https://thinkayurvedafirst.com/wp-content/uploads/2024/03/5.jpg ",
    },


  {
      heading: "Revolutionizing Healthcare: ThinkAyurvedaFirst Receives The 2024 Global C-Suite Communitys Innovative Company Award",
      description:" We are ecstatic to share the incredible news that ThinkAyurvedaFirst™, under the leadership of our esteemed CEO Mr. Uppuluri Sreenivasa Sreekanth, has been bestowed with […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/HAR05804-scaled.jpg ",
    },
  {
      heading:" Understanding Eczema From An Ayurvedic Perspective",
      description:" Eczema, known as Vicharchika in Ayurveda, is a skin disorder that manifests as red, itchy, and inflamed patches on the skin. According to Ayurveda, eczema […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/eczema-types.webp ",
    },
  {
      heading:" Embracing Menopause: An Ayurvedic Perspective And Natural Remedies For Transition",
      description:" Introduction: Menopause is a profound transition in a woman’s life, marking the cessation of her reproductive years. This natural process, often accompanied by a range […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/menopause-hair-loss-blog.jpg",
    },
  {
      heading:" Ayurveda: Nurturing Kidney Health Through Ancient Wisdom And Modern Understanding",
      description:" Introduction: In our journey towards holistic health, the kidneys play an indispensable role. These bean-shaped organs filter waste products, regulate electrolyte balance, and maintain fluid […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Ensuring-kidney-health-is-important-for-optimum-wellbeing.png ",
    },
  {
      heading:" “Unlocking Ayurvedic Insights: A Holistic Approach To Type 2 Diabetes Management”",
      description:" Introduction: In the realm of traditional medicine, Ayurveda stands as a beacon of holistic healing, offering profound insights into the interconnectedness of body, mind, and […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/05/a5c482b2-c51e-4b17-b4e0-0639104b1e99-1.jpg ",
    },
  {
      heading:" “Ageless Wisdom: Ayurvedic Strategies For Graceful Aging”",
      description:" Introduction: In a world where the pursuit of eternal youth seems to be never-ending, ancient wisdom offers a profound perspective on aging gracefully. Rooted in […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/beauty-1000x531-1.jpg ",
    },
  {
      heading:" Ayurvedic Approach To Managing Rheumatoid Arthritis: A Comprehensive Guide",
      description:" Introduction: Rheumatoid Arthritis (RA) is a chronic autoimmune disorder that primarily affects the joints, leading to inflammation, pain, stiffness, and eventually joint damage. While modern […]",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/05/5964859-scaled.jpg ",
    },
  {
      heading:" Approach To Childhood Developmental Disorders: Ayurvedic Insights And Therapies",
      description:" Introduction: Childhood developmental disorders, including autism spectrum disorders (ASD), attention deficit hyperactivity disorder (ADHD), and developmental delays, pose unique challenges for both children and their […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/40d6960524dd7662ca10f9ddf8e221a1.jpg ",
    },
  {
      heading:" “Holistic Cancer Support: Ayurvedic Perspectives On Alleviating Side Effects, Enhancing Well-Being, And Integrating Care”",
      description:" Introduction: In the realm of cancer care, Ayurveda offers a holistic approach that focuses on restoring balance to the body, alleviating side effects of treatment, […] ",
      imgLink:" https://thinkayurvedafirst.com/wp-content/uploads/2024/05/ayurveda.jpg ",
    },
  ] 
  const blogMainItems = blogMain.map(card => 
    <li>
      <Card className="mt-8 w-72">
      <CardHeader color="blue-gray" className="relative h-36">
        <img
          src={card.imgLink}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {card.heading.slice(0,60).concat("...")}
        </Typography>
        <Typography>
          {card.description.slice(0,100).concat("...")}
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
      className="rounded-xl mt-5 mr-5"
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
        src=" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/HAR05804-scaled.jpg "
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src=" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/menopause-hair-loss-blog.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src=" https://thinkayurvedafirst.com/wp-content/uploads/2024/04/Ensuring-kidney-health-is-important-for-optimum-wellbeing.png "
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
