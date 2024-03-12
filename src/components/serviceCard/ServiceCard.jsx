function ServiceCard({ service }) {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center mx-2">
      <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-700 text-base">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
