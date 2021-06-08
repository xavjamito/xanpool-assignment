import React, { ReactChildren, ReactChild } from 'react';
import { LayoutContainer } from './Layout.styled';
import { PageHeader } from "antd"; 
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactChildren | ReactChild;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageHeader
        className="site-header"
        title={<Link to="/">Github User Repos</Link>}
      />
      <LayoutContainer>
        { children }
      </LayoutContainer>
    </>
  )
}
