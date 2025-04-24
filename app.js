import React from 'react';

function App() {
  const images = [
    { src: 'img/shaun.jpg', name: 'Shaun Russelle Obsenares' },
    { src: 'img/kate.jpg', name: 'Kate Justine Pades' },
    { src: 'img/cristel.jpg', name: 'Cristel Nicole Vergara' },
  ];

  const projects = [
    { title: 'Project 1', desc: 'Description of Project 1', img: 'img/project1.jpg', link: '#' },
    { title: 'Project 2', desc: 'Description of Project 2', img: 'img/project2.jpg', link: '#' },
    { title: 'Project 3', desc: 'Description of Project 3', img: 'img/project3.jpg', link: '#' },
  ];

  const profiles = {
    'Shaun Russelle Obsenares': {
      role: ['Full Stack Developer'],
      education: ['BS in Information Technology - Cavite State University'],
      skills: ['React', 'JavaScript', 'CSS'],
      resume: 'resume/shaun.pdf',
      image: 'img/shaun.jpg',
    },
    'Kate Justine Pades': {
      role: ['Frontend Developer'],
      education: ['BS in Information Technology - Cavite State University'],
      skills: ['HTML', 'CSS', 'JavaScript'],
      resume: 'resume/kate.pdf',
      image: 'img/kate.jpg',
    },
  };

  const getIdFromName = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-6xl tracking-wider mb-10">PORTFOLIO</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {images.map((img, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <div className="w-40 h-52 border-8 border-[#333] shadow-lg bg-white relative transition-transform duration-300 hover:scale-105">
                <a href={`#${getIdFromName(img.name)}`} className="w-full h-full">
                  <img src={img.src} alt={img.name} className="w-full h-full object-cover" />
                </a>
              </div>
              <a href={`#${getIdFromName(img.name)}`} className="mt-3 text-[#ffcc70] font-bold">{img.name}</a>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="py-20 px-[10%] text-center">
        <h2 className="text-4xl text-[#ffcc70] mb-5">About Us</h2>
        <p className="text-gray-300">Welcome to our portfolio!</p>
      </section>

      <section id="projects" className="py-20 px-[10%]">
        <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 opacity-0"></a>
              <img src={proj.img} alt={proj.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <h3 className="text-[#ffcc70] mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-300">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {Object.keys(profiles).map((name, i) => (
        <section key={i} id={getIdFromName(name)} className={`py-24 px-5 min-h-screen text-center ${i % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111]'}`}>
          <h2 className="text-3xl text-[#ffcc70] mb-5">{name}</h2>
          <div className="relative inline-block">
            <div className="w-36 h-36 rounded-lg shadow-lg bg-white relative">
              <img src={profiles[name].image} alt={name} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl text-[#ffcc70] mb-3">Role</h2>
            <ul className="text-white list-disc list-inside">
              {profiles[name].role.map((role, r) => <li key={r}>{role}</li>)}
            </ul>
            <h2 className="text-2xl text-[#ffcc70] mt-10 mb-3">Education</h2>
            <ul className="text-white list-disc list-inside">
              {profiles[name].education.map((edu, j) => <li key={j}>{edu}</li>)}
            </ul>
            <h2 className="text-2xl text-[#ffcc70] mt-10 mb-3">Technical Skills</h2>
            <ul className="text-white list-disc list-inside">
              {profiles[name].skills.map((skill, k) => <li key={k}>{skill}</li>)}
            </ul>
            {profiles[name].resume && (
              <div className="mt-5">
                <a href={profiles[name].resume} target="_blank" rel="noopener noreferrer" className="text-[#ffcc70] font-bold hover:underline">
                  📄 View Resume
                </a>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;