"use client";

import ServiceCard from "../serviceCard/ServiceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContent = () => {
  const services = [
    {
      title: "Family Law",
      description:
        "We provide comprehensive legal services for all aspects of family law, including divorce, child custody, and child support.",
      icon: "/criminalLaw.jpg", // Replace with your icon path
    },
    {
      title: "Criminal Defense",
      description:
        "Our experienced attorneys represent clients facing criminal charges, ensuring their rights are protected throughout the legal process.",
      icon: "/criminalLaw.jpg", // Replace with your icon path
    },
    {
      title: "Estate Planning",
      description:
        "We help individuals and families create comprehensive estate plans to ensure their wishes are carried out after their passing.",
      icon: "/estateLaw.jpg", // Replace with your icon path
    },
    {
      title: "Estate Planning",
      description:
        "We help individuals and families create comprehensive estate plans to ensure their wishes are carried out after their passing.",
      icon: "/estateLaw.jpg", // Replace with your icon path
    },
    {
      title: "Estate Planning",
      description:
        "We help individuals and families create comprehensive estate plans to ensure their wishes are carried out after their passing.",
      icon: "/estateLaw.jpg", // Replace with your icon path
    },
  ];

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite looping
    slidesToShow: 1, // Show one card at a time on small screens
    slidesToScroll: 1, // Scroll one card at a time
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for medium screens
        settings: {
          slidesToShow: 1, // Show two cards on medium screens
        },
      },
      {
        breakpoint: 1024, // Adjust breakpoint for large screens
        settings: {
          slidesToShow: 2, // Show three cards on large screens
        },
      },
    ],
  };
  return (
    <section className="content-section bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Practice Areas
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
        <div className="">
          <Slider {...settings}>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Slider>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
};

export default MainContent;
