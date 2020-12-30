import * as React from 'react';
import { Frame } from 'framer';

export function MiddleReveal() {
  return (
    <Frame background={'rgba(0,0,0,0)'}>
      {
        // Container frame to position the text in the center
      }
      <Frame width={'100%'} height={'auto'} center>
        {
          // Mask frame for top line
        }
        <Frame width={'100%'} height={46 * 1.2} y={-46 * 1.2} overflow={'hidden'} background={''}>
          {
            // Frame for top line
          }
          <Frame
            size={'100%'}
            background={''}
            style={{
              // fontFamily: 'Palino',
              // fontWeight: 'bold',
              letterSpacing: '-0.04em',
              fontSize: 46
              //   color: '#FFF'
            }}
            initial={{ y: 46 * 1.2 }}
            animate={{ y: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 0.6
            }}
          >
            {/* <Typography color="textPrimary" gutterBottom> */}
            About
            {/* </Typography> */}
          </Frame>
        </Frame>
        {
          // Mask frame for bottom line
        }
        <Frame width={'100%'} height={46 * 1.2} y={0} overflow={'hidden'} background={''}>
          {
            // Frame for bottom line
          }
          <Frame
            size={'100%'}
            background={''}
            style={{
              // fontFamily: 'Palino',
              // fontWeight: 'bold',
              letterSpacing: '-0.04em',
              fontSize: 46
              //   color: '#FFF'
            }}
            initial={{ y: -46 * 1.2 }}
            animate={{ y: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 0.6
            }}
          >
            {/* <Typography color="textPrimary" gutterBottom> */}
            Me
            {/* </Typography> */}
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  );
}
