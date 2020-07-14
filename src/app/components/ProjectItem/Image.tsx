import * as React from 'react';
import { motion, useInvertedScale } from 'framer-motion';
import { closeSpring } from './animation';
import { useStyles } from './style';

export namespace Image {
  export interface Props {
    imageUrl: string;
    isSelected: boolean;
    pointOfInterest: number;
    backgroundColor: string;
  }
}

export const Image = ({ imageUrl, isSelected, pointOfInterest = 0, backgroundColor }: Image.Props) => {
  const classes = useStyles()
  const inverted = useInvertedScale();

  return (
    <motion.div className={classes.cardImageContainer} style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}>
      <motion.img
        className={classes.cardImage}
        src={imageUrl}
        alt=""
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }}
        transition={closeSpring}
      />
    </motion.div>
  );
};
