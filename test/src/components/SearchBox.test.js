import { shallow } from "enzyme"
import SearchBox from "./SearchBox"

it('Expects the Search Box to be rendered', () => {
  const mockSearchField = 'jorge'


  expect(shallow(<SearchBox searchfield={mockSearchField} searchChange={() => {}}/>)).toMatchSnapshot()
})