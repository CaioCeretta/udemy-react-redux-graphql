import { shallow } from "enzyme"
import CounterButton from './CounterButton'


it('expects to render the button component', () => {
  const mockColor = 'blue'

  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('Correctly increments the counter', () => {
  const mockColor = 'blue'

  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })

  wrapper.find('[id="counter"]').simulate('click')

  expect(wrapper.state()).toEqual({ count: 3 })
  
  wrapper.find('[id="counter"]').simulate('keypress')

  expect(wrapper.state()).toEqual({ count: 3 })

  expect(wrapper.props().color).toEqual('blue')
 
   


})