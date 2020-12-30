import * as React from "react";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { Content } from "./Content";
import { Image } from "./Image";
import { Project as ProjectModel } from 'app/models';
import { openSpring, closeSpring } from "./animations";
import { useInvertedBorderRadius } from "app/utils/use-inverted-border-radius";
import { useScrollConstraints } from "app/utils/use-scroll-constraints";
import { useWheelScroll } from "app/utils/use-wheel-scroll";
import { Title } from "./Title";
import { useStyles } from "./style";

interface Props extends ProjectModel {
  isSelected: boolean;
  history: {
    push: (route: string) => void;
  };
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Project =
  ({
    isSelected,
    id,
    title,
    content,
    skills,
    imageUrl,
    company,
    history,
    pointOfInterest,
    backgroundColor
  }: Props) => {
    const classes = useStyles();
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push("/");
    }

    function checkZIndex(latest: { scaleX: number; }) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );
    return (
      <li ref={containerRef} className={classes.card}>
        <Overlay isSelected={isSelected} />
        <div className={isSelected ? classes.cardContentContainerOpen : classes.cardContentContainer}>
          <motion.div
            ref={cardRef}
            className={isSelected ? classes.cardContentOpen : classes.cardContent}
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}>
            <Image
              url={imageUrl}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}/>
            <Title title={title} company={company} skills={skills} isSelected={isSelected} />
            <Content content={content} />
          </motion.div>
        </div>
        {!isSelected && <Link to={id.toString()} className={classes.cardOpenLink} />}
      </li >
    );
  };

const Overlay = ({ isSelected }: { isSelected: boolean }) => {
  const classes = useStyles();

  return <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className={classes.overlay}
  >
    <Link className={classes.overlayLink} to="/" />
  </motion.div>
}
