import React, { ReactChildren, ReactChild } from 'react';
import { LayoutContainer } from './Layout.styled';

interface LayoutProps {
  children: ReactChildren | ReactChild;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      { children }
    </LayoutContainer>
  )
}
