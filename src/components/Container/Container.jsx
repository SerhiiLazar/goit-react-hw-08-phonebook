import React from 'react';
import { ContainerList } from './Container.styled';

const Container = ({ children, styles }) => {
  return (
    <ContainerList  style={styles}>
      {children}
    </ContainerList>
  );
};

export default Container;
