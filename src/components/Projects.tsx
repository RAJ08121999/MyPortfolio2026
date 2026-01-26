import E_commerce from '../assets/e-commerce.jpeg';
import Driving_School from '../assets/driving-school-management-system.png';
import LCG_College_Website from '../assets/lcg-college-website.png';
import Flipkart_Clone from '../assets/flipkart-clone.png';
import Twitter_Clone from '../assets/twitter-clone.png';
import DropOut from '../assets/dropout.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type ProjectProp = {
    darkMode : boolean;
}

const Projects = ({darkMode}:ProjectProp) => {
    
    const projects = [
        {
            id:1,
            title:'E-Commerce Platform',
            desc:'A full-stack e-commerce web application built using the MERN stack , featuring secure authentication, product management, and order processing . Designed for scalability and performance , with a responsive user interface and a robust RESTful backend',
            image:E_commerce,
            link:'https://github.com/sure-trust/MD-RAJ-g28-fsd/tree/main/Final%20capstone%20project/FlipkartClone',
            live_Link:'https://flipkart-clone-five-drab.vercel.app/',
            tags:['Tailwind CSS','React','Node.js','MongoDB']
        },
        {
            id:2,
            title:'Driving School Management System',
            desc:"A web-based system to manage student registrations, instructor schedules, lesson tracking, and payments efficiently through a centralized dashboard.",
            image:Driving_School,
            link:'https://github.com/RAJ08121999/InfinityBit/tree/master/Week7/DrivingSchool',
            live_Link:'',
            tags:['Tailwind CSS','React','Node.js','MongoDB','TanStack Query','TanStack Table','TanStack Router','ShadCn UI']
        },
        {
            id:3,
            title:'LCG College Website',
            desc:'An informational and responsive college website showcasing courses, admissions, announcements, and academic details with a clean and accessible design.',
            image:LCG_College_Website,
            link:'https://github.com/RAJ08121999/LCGCollegeWebsite',
            live_Link:'https://lcgcollegewebsite.netlify.app/',
            tags:['React','Node.js','MongoDB']
        },
        {
            id:4,
            title:'Flipkart Clone',
            desc:'A MERN-based e-commerce clone replicating core features like product browsing, cart management, authentication, and order flow.',
            image:Flipkart_Clone,
            link:'https://github.com/sure-trust/MD-RAJ-g28-fsd/tree/main/Final%20capstone%20project/FlipkartClone',
            live_Link:'https://flipkart-clone-five-drab.vercel.app/',
            tags:['React','Node.js','MongoDB','Material UI']
        },
        {
            id:5,
            title:'Twitter Clone',
            desc:'A social media application enabling users to post tweets, like, follow, and interact in real time with a scalable backend architecture.',
            image:Twitter_Clone,
            link:'https://github.com/sure-trust/MD-RAJ-g28-fsd/tree/main/Final%20capstone%20project/FlipkartClone',
            live_Link:'https://flipkart-clone-five-drab.vercel.app/',
            tags:['React','Node.js','MongoDB','Fire base']
        },
        {
            id:6,
            title:'DropOut Detection & Prevention System',
            desc:'An AI-powered dropout detection and prevention system that uses face recognition to automate attendance tracking. By analyzing attendance patterns over time, it identifies students at risk of dropping out and enables early, data-driven intervention.',
            image:DropOut,
            link:'https://github.com/Sanjoy9999/Smart-Academic-Monitoring-And-Dropout-Preventation-System',
            live_Link:'https://github.com/Sanjoy9999/Smart-Academic-Monitoring-And-Dropout-Preventation-System',
            tags:['React','Node.js','MongoDB','Python','Tensor Flow','Open CV','Pandas']
        },
    ];

  return (
    <section 
    id='projects'
    style={{
        backgroundColor:darkMode ? '#111827' :'#f9fafb'
    }}
    className='relative py-24'
    >
        <div className='container mx-auto px-4'>
            <div
            className='text-center mb-10'
            data-aos = 'fade-up'
            >
                <h2
                className='text-3xl sm:text-4xl font-bold mb-3'
                style={{
                    color: darkMode ? 'white' :'#1f2937'
                }}
                >
                    My&nbsp;
                    <span
                    style={{
                        background:'linear-gradient(to right , #f97316, #f59e0b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'
                    }}
                    >
                        Projects
                    </span>
                </h2>
                <p
                className='max-w-xl mx-auto'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}
                >
                    A showcase of my recent work
                </p>
            </div>
            <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'
            >
                {
                    projects.map((project,index)=>(
                        <div
                        key={project.id}
                        style={{
                            background:darkMode
                            ? 'linear-gradient(to right , #1f2937 ,#111827)'
                            : 'linear-gradient(to right, #ffffff ,#f9fafb)',
                            borderColor:darkMode
                            ? '#374151'
                            : 'orange'
                        }}
                        className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                        data-aos = 'fade-up'
                        data-aos-delay = {index*100}
                        >
                            <div 
                            className='h-36 overflow-hidden rounded-t-xl'>
                                <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                            <div
                            className='p-4'
                            >
                                <h3
                                className='text-lg font-bold mb-2'
                                style={{
                                    color:darkMode ? 'white' :'#1f2937'
                                }}
                                >{project.title}</h3>
                                <p className='text-sm mb-3'
                                style={{
                                    color:darkMode?'#d1d5db':'#6b7280'
                                }}
                                >
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {
                                        project.tags.map((tag,index)=>(
                                            <span
                                            key={index}
                                            style={{backgroundColor:darkMode
                                                ?'#374151'
                                                :'#f3f4f6',
                                            color:darkMode
                                                ?'#d1d5db'
                                                :'#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'
                                            >
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div
                                className='flex gap-2'
                                >
                                    <a
                                    href={project.link}
                                    target='_blank'
                                    style={{
                                        backgroundColor:darkMode
                                        ?'#374151'
                                        :'#f3f4f6',
                                        color:darkMode
                                        ?'#d1d5db'
                                        :'#4b5563'
                                    }}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                    data-aos = 'zoom-in'
                                    data-aos-delay = '300'
                                    >
                                        <FaGithub className='text-sm'/>
                                        <span>Code</span>
                                    </a>
                                    {/* Demo  */}
                                    <a
                                    href={project.live_Link}
                                    target='_blank'
                                    style={{
                                        background:'linear-gradient(to right, #f97316, #f59e0b)'
                                    }}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                    data-aos = 'zoom-in'
                                    data-aos-delay = '400'
                                    >
                                        <FaExternalLinkAlt className='text-sm'/>
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div
            className='text-center mt-10'
            >
                <a
                href='https://github.com/RAJ08121999'
                target='_blank'
                style={{
                    background:'linear-gradient(to right , #f97316 , #f59e0b)',
                }}
                className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full 
                hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                data-aos = 'zoom-in'
                data-aos-delay = '400'
                >
                    <FaGithub/>
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects
