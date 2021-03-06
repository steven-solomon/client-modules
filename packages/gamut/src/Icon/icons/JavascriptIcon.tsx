import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export const JavascriptIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg {...props}>
      <title>Javascript Icon</title>
      <path d="M2 2v20h20V2H2zm18.8 18.8H3.2V3.2h17.6v17.6z" />
      <path d="M17.585 17.925a1.565 1.565 0 0 1-.488.25 2.297 2.297 0 0 1-2.457-.75 2.64 2.64 0 0 1-.143-.188l-.964.56c.23.366.54.676.905.908a3.475 3.475 0 0 0 1.562.52c.577.07 1.162.014 1.715-.163.54-.15 1-.503 1.285-.985.204-.39.29-.83.25-1.267a2.115 2.115 0 0 0-.813-1.652 6.085 6.085 0 0 0-1.382-.783l-.277-.125c-.25-.107-.5-.22-.75-.345a2.37 2.37 0 0 1-.535-.37 1.172 1.172 0 0 1-.313-1.105 1.11 1.11 0 0 1 .795-.825c.28-.076.573-.076.853 0a1.5 1.5 0 0 1 .87.62l.894-.575a2.23 2.23 0 0 0-1-.84 3.16 3.16 0 0 0-1.964-.127 2.063 2.063 0 0 0-1.378.975 2.18 2.18 0 0 0-.27 1.287c.017.572.265 1.114.688 1.5.376.322.803.581 1.262.768l.235.105c.338.15.688.305 1.028.47a2 2 0 0 1 .5.362 1.165 1.165 0 0 1-.123 1.783l.015-.008zM8 19a3.21 3.21 0 0 0 2.315.082c.6-.178 1.071-.649 1.25-1.25.118-.372.172-.762.16-1.152v-5.982h-1.2v5.96c0 .181-.013.362-.04.542-.028.37-.24.7-.562.882a1.5 1.5 0 0 1-1.518-.062 1.685 1.685 0 0 1-.5-.55l-.035-.055-.983.585c.253.445.643.797 1.113 1z" />
    </svg>
  );
};

JavascriptIcon.defaultProps = defaultIconProps;

export default JavascriptIcon;
