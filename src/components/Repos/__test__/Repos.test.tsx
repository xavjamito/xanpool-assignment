import React from "react";
import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Repos from "../Repos";
import { getUserRepos } from "../../api/UserAPI";

Enzyme.configure({ adapter: new Adapter() });

describe('renders Repos page correctly', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Repos />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ username: 'xavjamito' }),
  }));
});

describe('github repos fetch', () => {
  it('should resolve with an array of objects containing user repos', async () => {
    const response = await getUserRepos('xavjamito');
    expect(response).toContain([{      
      id: 123,
    }]);
  });
});
