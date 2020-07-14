import * as React from 'react';
import { motion, useInvertedScale } from 'framer-motion';
import { openSpring, closeSpring } from './animation';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';
import Box from '@material-ui/core/Box';

export namespace Title {
  export interface Props {
    title: string;
    startDate: string;
    endDate: string;
    isSelected: boolean;
  }
}

export const Title = ({ title, startDate, endDate, isSelected }: Title.Props) => {
  const classes = useStyles();
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;
  const start: string = new Date(startDate).getMonth() + ' ' + new Date(startDate).getFullYear();
  const end: string = new Date(endDate).getMonth() + ' ' + new Date(endDate).getFullYear();
  console.log(
    new Date(startDate).getMonth() + ' ' + new Date(startDate).getFullYear(),
    new Date(endDate).getMonth() + ' ' + new Date(endDate).getFullYear()
  );
  return (
    <motion.div
      className={isSelected ? classes.titleContainerOpen : classes.titleContainer}
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <Box component="span" m={1} className={classes.category}>
        {`${start} to ${end}`}
      </Box>
      <Typography className={classes.header} variant={'h4'} variantMapping={{ h4: 'h5' }}>
        {title}
      </Typography>
    </motion.div>
  );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
interface scaleTranslate {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
}

const scaleTranslate = ({ x, y, scaleX, scaleY }: scaleTranslate) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
