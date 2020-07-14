import * as React from 'react';
import { memo, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
// import { CardData } from "../types";
import { Content } from './Content';
import { Title } from './Title';
import { Image } from './Image';
import { openSpring, closeSpring } from './animation';
import { useWheelScroll } from 'app/utils/use-wheel-scroll';
import { useScrollConstraints } from 'app/utils/use-scroll-constraints';
import { useInvertedBorderRadius } from 'app/utils/use-inverted-border-radius';
import { ProjectModel } from 'app/models';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';

export namespace ProjectItem {
  export interface Props extends ProjectModel {
    isSelected: boolean;
    history: {
      push: (route: string) => void;
    };
  }
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const ProjectItem = memo(
  ({ isSelected, _id, title, image, startDate, endDate, content, history }: ProjectItem.Props) => {
    const classes = useStyles();
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push('/projects');
    }

    function checkZIndex(latest: { [key: string]: React.ReactText }) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);

    return (
      <Box ref={containerRef} className={classes.card}>
        <motion.div
          initial={false}
          animate={{ opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
          className={classes.overlay}
        >
          <Link className={classes.overlayLink} to="/projects" />
        </motion.div>
        <Container className={isSelected ? classes.cardContentContainerOpen : classes.cardContentContainer} maxWidth={'lg'}>
          <motion.div
            ref={cardRef}
            className={classes.cardContent}
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image imageUrl={image} isSelected={isSelected} pointOfInterest={80} backgroundColor={'#3e3e3e'} />
            <Title title={title} startDate={startDate} endDate={endDate} isSelected={isSelected} />
            <Content content={content} />
          </motion.div>
        </Container>
        {!isSelected && <Link to={`/projects/${_id}`} className={classes.cardOpenLink} />}
      </Box>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);
