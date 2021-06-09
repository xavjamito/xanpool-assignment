import React from "react";
import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from "react-test-renderer";
import RepoInfo from "../RepoInfo";
import { getRepoFiles, getReadme } from "../../api/UserAPI";

Enzyme.configure({ adapter: new Adapter() });

describe('renders RepoInfo page correctly', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<RepoInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ username: 'xavjamito', repoName: 'sample-repo' }),
  }));

  describe('github repo info fetch', () => {
    it('should resolve with an array of objects containing repo files/folders', async () => {
      const response = await getRepoFiles('xavjamito', 'xanpool-assignment');
      expect(response).toContain([{      
        name: 'sample-file',
        type: 'file',
      }]);
    });
  });

});
