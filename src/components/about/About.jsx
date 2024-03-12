import TeamMember from "../teamMember/TeamMember";

function AboutUsSection() {
  const team = [
    {
      name: "John Doe",
      title: "Founding Partner",
      description:
        "John Doe has over 20 years of experience in family law, and is passionate about advocating for his clients.",
      image: "/faceTwo.jpg", // Replace with your image path
    },
    {
      name: "Jane Smith",
      title: "Criminal Defense Attorney",
      description:
        "Jane Smith is a skilled criminal defense attorney, dedicated to protecting the rights of her clients.",
      image: "/faceOne.jpg", // Replace with your image path
    },
    // Add more team members here
    {
      name: "Janet Parker",
      title: "Criminal Defense Attorney",
      description:
        "Jane Smith is a skilled criminal defense attorney, dedicated to protecting the rights of her clients.",
      image: "/faceThree.jpg", // Replace with your image path
    },
  ];

  return (
    <section className="about-us bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Firm</h2>
        <p className="text-xl text-gray-700 text-center mb-12">
          Our is a trusted law firm dedicated to providing exceptional legal
          services to clients in [your location] and surrounding areas. We are
          committed to understanding your unique needs and goals, and working
          tirelessly to achieve the best possible outcome for your case.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
