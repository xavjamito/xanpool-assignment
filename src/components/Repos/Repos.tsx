import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getUserRepos } from "../api/UserAPI";
import { Parameter, Repo } from "../../models/types";
import { Table, Spin, Typography } from "antd";

const Repos: FC = () => {
  const { Text } = Typography;
  const { username } = useParams<Parameter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchUserRepos = async () => {
      setIsLoading(true);
      const userRepos = await getUserRepos(username);
      if (userRepos.length) {
        setRepos(userRepos);
      } 
      setIsLoading(false);
    }
    fetchUserRepos();
  }, [username]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Starred Count",
      dataIndex: "starred",
      key: "starred",
    },
    {
      title: "Github Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "View repo",
      dataIndex: "info",
      key: "info",
    },
  ];

  const repoData = repos.map((repoItem: Repo, index: number) => ({
    key: index,
    name: repoItem.name,
    description: repoItem.description,
    starred: repoItem.stargazers_count,
    link: repoItem.html_url,
    info: <Link to={`/repos/${username}/${repoItem.name}`}>View info</Link>
  }))

  return (
    <div>
      <h1>Repos</h1>
      {
        isLoading ? (
          <Spin />
        ) : (
          repos.length !== 0 ? 
          (
            <Table key="key" columns={columns} dataSource={repoData} />
          )
          : (
            <Text type="danger">User does not exist.</Text>
          )
        )
      }
    </div>
  )
}

export default Repos;

