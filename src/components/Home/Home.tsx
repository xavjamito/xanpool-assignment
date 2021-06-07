import React from "react";
import { HomeContainer } from './Home.styled';
import { Input } from 'antd';

const Home = () => {
  const { Search } = Input;
  return (
    <HomeContainer>
      <Search placeholder="Search for Github username here" allowClear enterButton="Search" size="large"/>
    </HomeContainer>
  )
}

export default Home;
