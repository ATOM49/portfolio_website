import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import { useStyles } from "./style";

export const Image = ({
    url,
    isSelected,
    pointOfInterest = 0,
    backgroundColor
}: {
    url: string,
    isSelected: boolean;
    pointOfInterest: number;
    backgroundColor: string
}) => {
    const classes = useStyles();
    const inverted = useInvertedScale();
    console.log('isSelected', isSelected);
    return (
        <motion.div
            className={classes.cardImageContainer}
            style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
        >
            <motion.img
                className={classes.cardImage}
                src={url}
                alt=""
                initial={false}
                animate={
                    isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
                }
                transition={closeSpring}
            />
        </motion.div>
    );
};
