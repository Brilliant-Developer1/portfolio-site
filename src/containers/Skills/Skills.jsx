import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import ReactTooltip from 'react-tooltip';
import './Skills.scss';

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  // console.log(experience);
  const experiences = [
    {
      _createdAt: '2022-03-24T18:07:12Z',
      _id: '8c00feaa-66d2-4082-b26e-71710d2bbd77',
      _rev: 'konqSPzeOcgJDWWuiq1Qpu',
      _type: 'experiences',
      _updatedAt: '2022-03-24T18:07:12Z',
      works: [
        {
          _key: '5448d520b192',
          _type: 'workExperience',
          company: 'Fiverr.',
          desc: "Currently I'm working as Freelancer in various Online Market Places.",
          name: 'Jr. Frontend Developer',
        },
      ],
      year: '2022',
    },
    {
      _createdAt: '2022-03-24T18:06:37Z',
      _id: 'b44a22e8-8685-42fe-83cd-74acf6f378bd',
      _rev: 'fPSaui3CWkXGhqNMf2AH1q',
      _type: 'experiences',
      _updatedAt: '2022-03-24T18:06:37Z',
      works: [
        {
          _key: 'b6adc8d71a11',
          _type: 'workExperience',
          company: 'Brilliant Developer',
          desc: "I've started my Web Development journey as a Jr. Frontend Developer from Brilliant Developer",
          name: 'Jr. Frontend Developer',
        },
      ],
      year: '2021',
    },
  ];

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    /* client.fetch(query).then(data => {
      setExperiences(data);
      // console.log(data)
    }); */
    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        {' '}
        <span>Skills</span> & Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map(skill => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences.map(experience => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map(work => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work._key}
                      key={work._key}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work._key}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
