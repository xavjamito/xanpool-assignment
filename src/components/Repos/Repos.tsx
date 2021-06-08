import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getUserRepos } from "../api/UserAPI";
import { Parameter } from "../../models/types";

const Repos = () => {
  const { username } = useParams<Parameter>();

  useEffect(() => {
    const fetchUserRepos = async () => {
      const userRepos = await getUserRepos(username);
      console.log(userRepos);
    }
    fetchUserRepos();
  }, [username]);

  return (
    <div>
      <h1>Repos</h1>
    </div>
  )
}

export default Repos;

