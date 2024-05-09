import {
    Card,
    CardBody,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
  
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
  
  export function TestimonialSection16() {
    return (
      <section className="px-8 py-10 lg:py-28">
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
    );
  }
  
  export default TestimonialSection16;