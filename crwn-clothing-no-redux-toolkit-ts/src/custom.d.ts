/*
Typescript could not find the module for svg files. that actually has to do with our ts config
We need to tell typescript to include checking for alternative file types, and typing them inside a react world, so here
is where we need to declare a global type.

The d.ts is a special file name that typescript is looking for 
*/

declare module "*.svg" {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  const src: string;

  export default src;
}

/* This means that it is something file that is going to get initialized and then we export it by default.

In order for us to declare these as registerable ts modules, importable and exportable, so by default we need to append
this type of export so ts knows that we are exporting something from this.

Now we need to include this inside our tsconfig.json
 */