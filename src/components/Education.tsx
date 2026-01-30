import CollegeLogo from '../assets/CollegeLogo.png';
import CollegeLogo2 from '../assets/CollegeLogo2.png';
import SchoolLogo from '../assets/SchoolLogo.png';
import SchoolLogo2 from '../assets/SchoolLogo2.png'


type EducationProps = {
  darkMode: boolean;
};

const Education = ({ darkMode }: EducationProps) => {
  const education = [
    {
      id: 1,
      institute: 'Greater Kolkata College of Engineering & Management ',
      logo: CollegeLogo,
      degree: 'B.Tech in Computer Science & Engineering',
      duration: '2022 – 2025',
      color: 'from-orange-500 to-amber-500',
      percentage:74.29,
    },
    {
      id: 2,
      institute: 'Raghunathpur Government Polytechnic College',
      logo: CollegeLogo2,
      degree: 'Diploma in Computer Science & Technology',
      duration: '2019 – 2022',
      color: 'from-green-500 to-emrald-500',
      percentage:86.60,
    },
    {
      id: 3,
      institute: 'Rajasthan Vidyapith Purulia',
      logo: SchoolLogo,
      degree: 'Higher Secondary (Science)',
      duration: '2017 – 2019',
      color: 'from-orange-500 to-yellow-500',
      percentage:71.40,
    },
    {
      id: 4,
      institute: 'Rajasthan Vidyapith Purulia',
      logo: SchoolLogo2,
      degree: 'Secondary (General)',
      duration: '2016 – 2017',
      color: 'from-teal-500 to-cyan-500',
      percentage:57.14,
    },
  ];

  return (
    <section
      id="education"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
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
              Education
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Academic background and foundational learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute top-0 h-full w-px left-4 sm:left-1/2 sm:-translate-x-1/2"
            style={{ backgroundColor: darkMode ? '#374151' : '#d1d5db' }}
          />

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
              }`}
            >
              {/* Dot */}
              <div
                className="
                  absolute
                  top-2
                  left-4
                  w-4
                  h-4
                  rounded-full
                  bg-linear-to-r
                  from-orange-500
                  to-yellow-500
                  sm:left-1/2
                  sm:-translate-x-1/2
                "
              />

              {/* Card */}
              <div
                className="mt-6 sm:mt-0 sm:w-[46%] ml-10 sm:ml-0 rounded-xl p-6 border shadow-lg"
                style={{
                  background: darkMode
                    ? 'linear-gradient(to right,#1f2937,#111827)'
                    : 'linear-gradient(to right,#ffffff,#f9fafb)',
                  borderColor: darkMode ? '#374151' : 'orange',
                }}
              >
                {/* Institute */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-25 h-25 rounded-full flex items-center justify-center bg-linear-to-r ${edu.color}`}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.institute}
                      className="w-23 h-23 object-fit"
                    />
                  </div>
                  <div className="ml-4">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                      {edu.institute}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                    >
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Duration and percentage */}
                <div className='flex justify-around items-center'>
                    <p
                    className="text-sm mb-3"
                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                    >
                    {edu.duration}
                    </p>
                    
                    <p
                    className="text-sm mb-3"
                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                    >
                    {edu.percentage}%
                    </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
