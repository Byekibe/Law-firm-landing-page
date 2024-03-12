function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial bg-white shadow-md rounded-lg p-4">
      <p className="text-gray-700 text-base mb-4">{testimonial.quote}</p>
      <div className="flex items-center">
        <img
          src="/faceOne.jpg" // Replace with a generic avatar image
          alt="Client Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h4 className="text-xl font-bold">{testimonial.name}</h4>
          {testimonial.company && (
            <p className="text-gray-600 text-sm">{testimonial.company}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
