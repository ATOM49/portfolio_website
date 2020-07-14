import * as React from 'react';
import { motion, useInvertedScale } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { useStyles } from './style';

export const Content = React.memo(({ content }: { content: string }) => {
  const classes = useStyles();
  const inverted = useInvertedScale();
  return (
    <motion.div className={classes.contentContainer} style={{ ...inverted, originY: 0, originX: 0 }}>
      <Typography>{content}</Typography>
      {/* <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} /> */}
    </motion.div>
  );
});
