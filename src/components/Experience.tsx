import SureTrust from '../assets/suretrust.jpeg';
import InfinityBit from '../assets/infinityBit.png';
import Sikharthy from '../assets/sikharthyInfotech.png';
import CertificateIcon from '../assets/SikharthyCompletion.jpeg';
import { DownloadIcon } from 'lucide-react';


type ExperienceProps = {
    darkMode: boolean;
  };
  
  const Experience = ({ darkMode }: ExperienceProps) => {
    const experiences = [
        {
          id: 1,
          company: 'SURE Trust ProED',
          logo: SureTrust,
          position: 'Full Stack Developer Intern',
          duration: 'Jun 2025 – Dec 2025',
          technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node.js',
            'MongoDB',
            'Tailwind CSS',
          ],
          // certificate: CertificateIcon,
          color: 'from-orange-500 to-yellow-500',
        },
        {
          id: 2,
          company: 'InfinityBit Pvt. Ltd.',
          logo: InfinityBit,
          position: 'Frontend Developer Intern',
          duration: 'Aug 2025 – Nov 2025',
          technologies: ['React', 'TypeScript', 'Tailwind CSS' , 'Node JS' , 'MongoDB' ,'React Query'],
          // certificate: CertificateIcon,
          color: 'from-blue-500 to-cyan-500',
        },
        {
          id: 3,
          company: 'Sikharthy Infotech Pvt. Ltd.',
          logo: Sikharthy,
          position: 'Frontend Developer Intern',
          duration: 'Aug 2025 – Nov 2025',
          technologies: ['React', 'TypeScript', 'Tailwind CSS' , 'Node JS' , 'MongoDB' ,'React Query'],
          certificate: CertificateIcon,
          color: 'from-blue-500 to-indigo-500',
        },
      ];
      
    return (
      <section
        id="experience"
        style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              My{' '}
              <span
                style={{
                  background: 'linear-gradient(to right,#f97316,#f59e0b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Experience
              </span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
            >
              Professional journey and hands-on learning
            </p>
          </div>
  
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-4 sm:left-1/2 top-0 h-full w-px sm:-translate-x-1/2"
              style={{ backgroundColor: darkMode ? '#374151' : '#d1d5db' }}
            />
  
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 flex flex-col sm:flex-row ${
                  index % 2 === 0
                    ? 'sm:justify-start'
                    : 'sm:justify-end'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Dot */}
                <div
                  className="absolute
                  top-2
                  left-3
                  w-3
                  h-3
                  rounded-full
                  bg-linear-to-r
                  from-orange-500
                  to-yellow-500
                  sm:left-1/2
                  sm:-translate-x-1/2"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                />
  
                {/* Card */}
                <div
                  className={`mt-6 sm:mt-0 sm:w-[46%] rounded-xl p-6 border shadow-lg`}
                  style={{
                    background: darkMode
                      ? 'linear-gradient(to right,#1f2937,#111827)'
                      : 'linear-gradient(to right,#ffffff,#f9fafb)',
                    borderColor: darkMode ? '#374151' : 'orange',
                  }}
                >
                  {/* Company */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-linear-to-r ${exp.color}`}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain hover:scale-120"
                      />
                    </div>
                    <div className="ml-4">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                      >
                        {exp.position}
                      </p>
                    </div>
                  </div>
  
                  {/* Duration */}
                  <p
                    className="text-sm mb-3"
                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                  >
                    {exp.duration}
                  </p>
  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: darkMode
                            ? '#374151'
                            : '#f3f4f6',
                          color: darkMode
                            ? '#d1d5db'
                            : '#4b5563',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  {/* Certificate */}
                  <a href={CertificateIcon} download className='w-full sm:w-auto flex justify-center items-center'>
                      <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to to-amber-500 border-0 py-1 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                          <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                            Certificate
                      </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  