import { shallow, mount, render } from "enzyme";
import Card from './Card'


//With shallow i get to test one thing at a time without testing the whole thing

it('Expect to render Card component', () => {
expect(shallow(<Card />).length).toEqual(1)

/* Mount causes a full dom render, it's ideal for use cases that we have components that interact with the DOM api,
something like the Card component using something like a .querySelector or any of the DOM apis that we usually see, or
maybe it has some sort of react life cycle method that we want to test, like the component being mount 
*/

/* 
  Render is used to render react components but unlike to a real dom, it is rendered to a static HTML, it returns
  something similar to mount and shallow, however the difference is that it utilizes a library called  cheerio under
  the hood, it is something like as an in between shallow and mount, it doesn't need a full DOM api but it does render
  any of the Card children underneath it if it needs to test those
*/
})

it('expect to render Card component', () => {
/* What this do is that somewhere we have a snapshot summary, that showed up, and it says one snapshot written and in
test suite, and we see that it passed and it created a folder with the snapshots and the Card snapshot we've just creatd,

Inside of it we can see that jest took a snapshot and created a snapshot of the Card component and sees if the component
matches

if we alter the card snapshot and we execute the test again, the test will fail, because it no longers match it
 */  
  expect(shallow(<Card />)).toMatchSnapshot()
})


