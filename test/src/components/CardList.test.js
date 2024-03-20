import { shallow } from "enzyme";

import CardList from './CardList'

it('expect to render the CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Jorge',
      username: 'JorJor',
      email: 'jorge@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()

  

})