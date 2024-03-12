import TestimonialCard from "../testimonialCard/TestimonialCard";

function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Jones",
      quote:
        "John Doe and his team at [Your Law Firm Name] were incredibly helpful and supportive throughout my case. They kept me informed every step of the way, and I felt confident in their representation. I highly recommend them!",
      company: "ABC Company",
    },
    {
      name: "David Miller",
      quote:
        "Jane Smith was a fantastic attorney who listened to my concerns and fought hard for me. I am very grateful for her expertise and dedication.",
    },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
