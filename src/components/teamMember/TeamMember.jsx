function TeamMember({ member }) {
  return (
    <div className="team-member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-gray-700 text-base">{member.title}</p>
      <p className="text-gray-600 text-sm mt-2">{member.description}</p>
    </div>
  );
}

export default TeamMember;
