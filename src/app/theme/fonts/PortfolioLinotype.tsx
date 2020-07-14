import { makeStyles } from '@material-ui/core';
import PalantinoLinotype from 'app/theme/fonts/PalatinoLinotypeW02.woff2';
import React from 'react';

export const palinoRegular: any = {
  fontFamily: 'Palino',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    `local('SalesforceSans')`,
    `local('SalesforceSans-Regular')`,
    `url('.${PalantinoLinotype}') format('woff2')`,
  ].join(','),
};

const useStyles = makeStyles({
  '@global': {
    '@font-face': palinoRegular,
  },
});

export const PalinoRegular: React.FC = () => {
  useStyles();
  return <></>;
};