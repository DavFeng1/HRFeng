import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';

import '@pages/projects/Projects.scss';

const projectsVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Projects = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('pages/landing/Projects.tsx ==> Component Mounted');

    return () => {
      console.log('pages/landing/Projects.tsx ==> Component Unmounted');
    };
  }, []);

  return (
    <div className="page-container row-container">
      <motion.div
        variants={projectsVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        id="projects-container"
      >
        <div id="projects-header">
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize={90}
            textAlign="center"
          >
            Projects
          </Typography>

          <Typography variant="h3" textAlign="center">
            Check out my github for more of my programming projects!
          </Typography>
        </div>
        <motion.div className="projects-card" variants={cardVariants}>
          <div className="projects-card-description">
            <Typography variant="h1" fontWeight="bold" fontSize={100}>
              Bloch Sphere
            </Typography>
            <Typography
              variant="button"
              fontSize={20}
              letterSpacing={5}
              className="projects-card-description-text"
            >
              The Bloch Sphere is a geometric representation of the pure
              states of a two level quantum system. It is often used in
              quantum computing to visualize the states of qubits.
            </Typography>
          </div>

          <div
            className="projects-card-link"
            onClick={(e) => navigate('/blochSphere')}
          >
            View Project
          </div>
        </motion.div>
        <motion.div className="projects-card" variants={cardVariants}>
          <div className="projects-card-description">
            <Typography variant="h1" fontWeight="bold" fontSize={100}>
              L2Learn
            </Typography>
            <Typography
              variant="button"
              fontSize={20}
              letterSpacing={5}
              className="projects-card-description-text"
            >
              Ongoing project where I derive and implement various machine
              learning models from scratch (zero dependencies)
            </Typography>
          </div>

          <div
            className="projects-card-link"
            onClick={(e) =>
              window.open('https://github.com/DavFeng1/L2Learn')
            }
          >
            View Project
          </div>
        </motion.div>
        <motion.div className="projects-card" variants={cardVariants}>
          <div className="projects-card-description">
            <Typography variant="h1" fontWeight="bold" fontSize={100}>
              Hypercore
            </Typography>
            <Typography
              variant="button"
              fontSize={20}
              letterSpacing={5}
              className="projects-card-description-text"
            >
              Hypercore is a toy blockchain I wrote in Rust. I used this
              project as a way to learn the Rust programming language as
              well as the necessary concepts from cryptography used in
              blockchain technology
            </Typography>
          </div>
          <div
            className="projects-card-link"
            onClick={(e) =>
              window.open('https://github.com/DavFeng1/Hypercore')
            }
          >
            View Project
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
