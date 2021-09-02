import { DetailedHTMLProps, ObjectHTMLAttributes } from 'react';
import { StyledComponent } from '@emotion/styled';

export interface SvgProps
  extends DetailedHTMLProps<
    React.ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  > {
  path: string;
  Styles?: StyledComponent<
    {},
    DetailedHTMLProps<
      ObjectHTMLAttributes<HTMLObjectElement>,
      HTMLObjectElement
    >,
    {}
  >;
}
