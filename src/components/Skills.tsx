import C from '../assets/C.png';
import Cpp from '../assets/C++.png';
import Java from '../assets/Java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwindcss from '../assets/tailwindcss.png';
import JavaScript from '../assets/JS.png';
import TypeScript from '../assets/TypeScript.png';
import React from '../assets/react js.png';
import NodeJs from '../assets/Node js.png';
import ExpressJs from '../assets/express js.png';
import MongoDB from '../assets/mongoDb.png';
import ShadCn from '../assets/shadcn.png';
import TanStackQuery from '../assets/tanStack Query.png';
import TanStackTable from '../assets/tanStack table.jpeg';

type SkillsProp = {
    darkMode : boolean;
}

const Skills = ({darkMode}:SkillsProp) => {

    const skills = [
        {name:'C',icon:C,level:90,color:'from-orange-500 to-amber-500'},

        {name:'C++',icon:Cpp,level:85,color:'from-blue-500 to-cyan-500'},

        {name:'Java',icon:Java,level:90,color:'from-yellow-500 to-amber-500'},

        {name:'HTML5',icon:html,level:90,color:'from-orange-500 to-amber-500'},

        {name:'CSS3',icon:css,level:90,color:'from-teal-500 to-cyan-500'},

        {name:'Tailwind CSS',icon:tailwindcss,level:90,
        color:'from-yellow-500 to-amber-500'},
        
        {name:'Java Script',icon:JavaScript,level:80,color:'from-cyan-500 to-blue-500'},

        {name:'Type Script',icon:TypeScript,level:70,color:'from-teal-500 to-cyan-500'},

        {name:'React Js',icon:React,level:70,color:'from-green-500 to-emerald-500'},

        {name:'Node Js',icon:NodeJs,level:60,color:'from-blue-500 to-indigo-500'},

        {name:'Express JS',icon:ExpressJs,level:50,color:'from-teal-500 to-cyan-500'},

        {name:'MongoDB',icon:MongoDB,level:50,color:'from-amber-500 to-yellow-500'},

        {name:'ShadCn UI',icon:ShadCn,level:60,color:'from-cyan-500 to-blue-500'},

        {name:'TanStack Router',icon:TanStackQuery,level:60,color:'from-red-500 to-orange-500'},

        {name:'TanStack Query',icon:TanStackQuery,level:70,color:'from-green-500 to-emerald-500'},

        {name:'TanStack Table',icon:TanStackTable,level:30,color:'from-yellow-500 to-orange-500'},
    ];

  return (
    <section
    id="skills"
    style={{
        backgroundColor:darkMode?'#111827':'#f9fafb'
    }}
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20'data-aos='fade-up'>
                    <h1
                    className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color:darkMode?'white':'#1f2937'}}
                    >
                        My <span
                        style={{
                            background:'linear-gradient(to right,#f97316,#f59e0b)',
                            WebkitBackgroundClip:'text',
                            backgroundClip:'text',
                            color:'transparent',
                        }}
                        >
                            Skills
                        </span>
                    </h1>
                    <p
                    className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{
                        color:darkMode?'#d1d5db':'#4b5563'
                    }}
                    >
                        My skill set is centered around the MERN stack, with a strong focus on building reliable, maintainable, and performance-oriented web applications. I work comfortably across the full stack, from designing clean, responsive user interfaces to developing secure backend APIs and managing databases. I value fundamentals over shortcuts and continuously refine my skills by understanding how things work under the hood rather than just making them work.
                    </p>
                </div>
                <div
                className='flex flex-wrap -m-4'
                data-aos='fade-up'
                data-aos-delay='200'
                >
                    {
                        skills.map((skill,index)=>(
                            <div
                            key={index}
                            className='p-4 lg:w-1/4 md:w-1/2
                            w-full group:'
                            data-aos='fade-up'
                            data-aos-delay={`${300 + index *100}`}
                            >
                                <div
                                style={{background:darkMode
                                    ? 'linear-gradient(to bottom right , #1f2937 , #111827)'
                                    : 'linear-gradient(to bottom right , #ffffff , #f3f4f6)'
                                }}
                                className='h-full p-6 rounded-2xl border border-transparent hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]'
                                >
                                    <div
                                    className='flex items-center mb-6'>
                                        <div
                                        style={{
                                            background:darkMode
                                            ? 'linear-gradient(to bottom right , #374151 , #1f2937)'
                                            : 'linear-gradient(to bottom right , #f3f4f6 , #e5e7eb)'
                                        }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'
                                        >
                                            <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <h3
                                        className='text-xl font-bold ml-4'
                                        style={{color:darkMode?'white':'#1f2937'}}
                                        >
                                            {skill.name}
                                        </h3>
                                    </div>
                                    
                                    {/* Progress bar container  */}

                                    <div className='mb-2 flex justify-between items-center'>
                                        <span
                                        className='font-medium'
                                        style={{color:darkMode?'#d1d5db':'#6b7280'}}
                                        >
                                            Proficiency
                                        </span>
                                        <span
                                        style={{
                                            background:'linear-gradient(to right, #f97316,#f59e0b)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip:'text',
                                            color:'transparent',
                                        }}
                                        className='font-bold'
                                        >
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div
                                    className='w-full rounded-full h-3 overflow-hidden'
                                    style={{backgroundColor:darkMode?'#374151':'#e5e7eb'}}
                                    >
                                        <div
                                        className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{width:`${skill.level}%`}}
                                        >
                                        </div>
                                    </div>
                                    <div className={`m-6 pt-4 border-t group ${darkMode ? 'border-gray-700':'border-gray-300'}`}>
                                        <div
                                        className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{
                                            background:'linear-gradient(to right,#f97316 , #f59e0b)'
                                        }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
