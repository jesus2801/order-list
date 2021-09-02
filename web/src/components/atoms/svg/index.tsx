import React from 'react';
import { SvgProps } from './interfaces';

const index = ({ path, Styles, ...rest }: SvgProps) => {
  return Styles ? (
    <Styles data={`${path}.svg`} type="image/svg+xml" {...rest}>
      Tu navegador no soporta este tipo de imágenes
    </Styles>
  ) : (
    <object data={`${path}.svg`} type="image/svg+xml" {...rest}>
      Tu navegador no soporta este tipo de imágenes
    </object>
  );
};

export default index;
