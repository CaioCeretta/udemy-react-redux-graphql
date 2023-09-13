# Virtual DOM x DOM

A DOM Tree, is essentially, our Documento Object Model, and primarily what is encapsulates is all the different elements that compose our application (or website). 
The real DOM is really expensive in order to make changes, like adding pieces of the DOM or removing it, it is really quick, but the actual changing process of pulling things off, putting things on the DOM or changing values of the DOM, that's pretty expensive, so we don't needlessly have to do that if we don't have to.

What React does, in this cases, it makes a duplicate copy of the real DOM, but it does it in js, and js is significantly quicker to actually create and reflect changes, and this reflow is really easy to do in js, the only thing is that we need a real dom to actually display it to the user, so we can't use a javascript tree in order to do that, but we can use this tree to determine what has changed, and this tree is called the VDOM.
It is a js representation of the real tree, whenever we will make some changes, let's say, for example, a user started typing to our search box, 'LEA', as we know what happens is that we will start filtering through our monsters in our application in order to pass those filtered monsters to our CardList component, what react does under the hood is to trigger through this process we've done numerous times already, in order to actually make the changes that we want to see in the real DOM, so first what's going to happen is:

1. Create a new copy of the virtual DOM
2. With the first copy of the VDOM, it is going to create a snapshot of it, this is the latest snapshot of what the real DOM looks like before actually making these changes
3. React uses this new VDOM copy, as the actual DOM tree, that is going to make these changes against

So in the real world example is

1. We are typing in the search box, 'LEA', as we remember, this search box is triggering an event for each character being typed in. the l, the e, and the a. These changes are going to call the setState inside of our app, which is the father at the very top node in this case.
Inside here, react says 'Oh, we are getting setState called three different times". What happens is react is going to batch these calls together 
