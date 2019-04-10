import React from 'react';
import Product from './../Product';
import App from './../App';
import renderer from 'react-test-renderer';

let product={"name":"Soap","upvote":0,"downvote":-10};
      
  const component = renderer.create(
    <App detail={product}></App>,
  );
  let tree = component.toJSON();

  
test('Test Number Of Product', () => {
  expect(3).toEqual(tree.length);
});
 
test('Test First Product', () => {
  expect("Soap").toEqual(tree[0].children[0].children[0]);
});
  
  
  
