import React, { FC, useEffect, useState} from "react";
import { Parameter, RepoFile } from "../../models/types";
import { useParams } from "react-router";
import { getReadme, getRepoFiles } from "../api/UserAPI";
import ReactMarkdown from "react-markdown";
import { Table, Spin } from "antd";
import { FolderOutlined, FileOutlined } from "@ant-design/icons";

const RepoInfo: FC = () => {
  const { username, repoName } = useParams<Parameter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repoFiles, setRepoFiles] = useState<RepoFile[]>([]);
  const [readme, setReadme] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    const fetchRepoFiles = async () => {
      const userRepoFiles = await getRepoFiles(username, repoName);
      if (userRepoFiles.length > 0) {
        setRepoFiles(userRepoFiles);
        const readmeFile = userRepoFiles.find((repoFile: RepoFile) => repoFile.name.toLowerCase() === "readme.md")
        if (readmeFile) {
          const readmeFileContent = await getReadme(readmeFile.download_url); 
          setReadme(readmeFileContent);
        }
      }
    }
    fetchRepoFiles();
    setIsLoading(false);
  }, [username, repoName, repoFiles]);

  const columns = [
    {
      title: '',
      dataIndex: 'icon',
      key: 'icon',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Size (kb)',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'View file',
      dataIndex: 'view',
      key: 'view',
    },
    {
      title: 'Github Link',
      dataIndex: 'link',
      key: 'link',
    },
  ];

  const repoFileData = repoFiles.map((repoFile: RepoFile, index: number) => ({
    key: index,
    icon: repoFile.type === "dir" ? <FolderOutlined /> : <FileOutlined />,
    name: repoFile.name,
    size: repoFile.size,
    view: <a
            href={repoFile.download_url}
            target="__blank"
            title={repoFile.name}
          >
            View file
          </a>,
    link: repoFile.html_url,
  }));

  return (
    <div>
      <h2>RepoInfo</h2>
    {
      isLoading ? (
        <Spin />
      ) : (
        <>
          <Table key="key" columns={columns} dataSource={repoFileData} />
          <div className="readme-container">
            <ReactMarkdown children={readme} />
          </div>
        </>
      )
    }
    </div>
  )
}

export default RepoInfo;
