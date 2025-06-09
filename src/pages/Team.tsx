import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kenil Gopani",
    role: "Lead Developer & Project Creator",
    bio: "Full-stack developer and tech enthusiast who loves exploring the intersection of history and technology. Created Hackstory to make history more engaging through the lens of modern technology.",
    image: "/images/team/kenil.jpg",
    github: "https://github.com/kenilgopani",
    linkedin: "https://linkedin.com/in/kenilgopani"
  },
   
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src={process.env.PUBLIC_URL + member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=10B981&color=fff&size=512`;
                }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-green-400 mb-2">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              <div className="flex space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 
