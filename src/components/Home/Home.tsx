import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeContainer } from "./Home.styled";
import { Input, Typography } from "antd";

const Home: FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { Search } = Input;
  const { Text } = Typography;

  const onSearch = async (searchQuery: string) => {
    history.push(`/repos/${searchQuery}`)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.currentTarget.value;
    if (username && !!username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setUsername(username);
      setErrorMessage("");
    } else {
      if (username) {
        setErrorMessage("Special characters and spaces are not allowed.");
        username.length >= 39 && setErrorMessage("Username can only have 39 characters.")
      } else {
        setUsername("");
      }
    }
  }

  return (
    <HomeContainer>
      <h2> Github Repo Search </h2>
      { errorMessage && <Text type="danger">{ errorMessage }</Text> }
      <Search
        placeholder="Search for Github username here"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onChange={onChangeInput}
        value={username}
      />
    </HomeContainer>
  )
}

export default Home;
