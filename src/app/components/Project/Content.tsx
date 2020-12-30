
import * as React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";
import { useStyles } from "./style";
import { Typography } from "@material-ui/core";

export const Content = React.memo(({ content }: { content: string }) => {
    const styles = useStyles();
    const inverted = useInvertedScale();
    return (
        <motion.div
            className={styles.contentContainer}
            style={{ ...inverted, originY: 0, originX: 0 }}
        >
            <Typography variant="body1" className={styles.contentParagraph}>{content}</Typography>
        </motion.div>
    );
});
