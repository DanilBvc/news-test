import { FC, ReactNode } from 'react';
import './blockWrapper.scss';
import { blockWrapperProps } from './blockWrapper.type';
const BlockWrapper: FC<blockWrapperProps> = ({ children, additionalClass }) => {
  return (
    <div className={`block-wrapper ${additionalClass ? additionalClass : ''}`}>{children}</div>
  );
};
export default BlockWrapper;
