import React from 'react';
import Product from './../Product';
import renderer from 'react-test-renderer';

let product={"name":"Soap","upvote":0,"downvote":-10};
      
  const component = renderer.create(
    <Product detail={product}></Product>,
  );
  let tree = component.toJSON();
  

test('Test Number Of Elements', () => {
  expect(3).toEqual(tree.children.length);
});

test('Test First Element Type', () => {
  expect('div').toEqual(tree.children[0].type);
});

test('Test Second Element Type', () => {
  expect('button').toEqual(tree.children[1].type);
});

test('Test Third Element Type', () => {
  expect('button').toEqual(tree.children[2].type);
});

test('Test Product Name', () => {
  expect("Soap").toEqual(tree.children[0].children[0]);
});

test('Test upvote Name', () => {
  expect("0").toEqual(tree.children[1].children[1]);
});

test('Test downvote Name', () => {
  expect("-10").toEqual(tree.children[2].children[1]);
});
