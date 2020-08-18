import * as React from 'react';
// import { memo, useRef } from 'react';
import { motion } from 'framer-motion';
// import { CardData } from "../types";
// import { Content } from './Content';
// import { Title } from './Title';
// import { Image } from './Image';
// import { openSpring, closeSpring } from './animation';
// import { useWheelScroll } from 'app/utils/use-wheel-scroll';
// import { useScrollConstraints } from 'app/utils/use-scroll-constraints';
// import { useInvertedBorderRadius } from 'app/utils/use-inverted-border-radius';
import { ProjectModel } from 'app/models';
// import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, CardHeader, Avatar } from '@material-ui/core';
// import { time } from 'console';
// import { Link as RouterLink } from 'react-router-dom';

export namespace ProjectItem {
  export interface Props {
    project: ProjectModel;
    history: {
      push: (route: string) => void;
    };
  }
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
// const dismissDistance = 150;

export const ProjectItem = ({ project, history }: ProjectItem.Props) => {
  // const classes = useStyles();
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { ...{ duration: 1.5 }, ...transition }
    }
  };

  const frameVariants = {
    hover: { scale: 0.95 }
  };

  const imageVariants = {
    hover: { scale: 1.1 }
  };

  return (
    <Link to={`/details/${project.projectId}`} style={{ textDecoration: 'none' }}>
      <motion.div variants={thumbnailVariants} style={{ height: 180 }}>
        <Card elevation={2}>
          <CardHeader
            avatar={<Avatar alt={project.company.companyName} src={project.company.companyLogo} />}
            title={project.company.companyName}
            subheader={project.company.companyLink}
          />
          {/* <CardActionArea> */}
          <CardMedia>
            <motion.div className="frame" whileHover="hover" variants={frameVariants} transition={transition}>
              <motion.img
                src={project.projectCover}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                alt="The Barbican"
                variants={imageVariants}
                transition={transition}
              />
            </motion.div>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              {project.projectTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              {project.projectContent}
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card>
      </motion.div>
    </Link>
  );
};
