import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles/styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#352f2f', color:'#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #352f2f'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={<div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>}
  >
    <div>
      <h3 className="text-white dark:text-[#B06969] text-[24px]">
        {experience.title}
      </h3>
      <p className="text-secondary dark:text-[#EDDEDE] text-[16px] font-semibold" style={{margin:0}}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point,index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 dark:text-[#EDDEDE] text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div className={`${styles.padding} max-w-7xl`}>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] dark:text-[#EDDEDE] text-[14px] text-secondary uppercase tracking-wider ">
          What I have done so far
          <h2 className="text-[#D97B08] dark:text-[#B06969] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience
          </h2>
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience