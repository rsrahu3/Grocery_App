import React, { Component } from "react";
import ReactDOM from "react-dom";
import Product from './Product.jsx';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
        product:[]
    };
  }

  componentDidMount(){
    this.setState( { product:[  
        {"name":"Soap","upvote":0,"downvote":-10},
        {"name":"Biscuit","upvote":10,"downvote":0},
        {"name":"Paneer","upvote":2,"downvote":-1}]}
      )
  }

  render() {
    let list = this.state.product;
    return (
        list.map((item,index)=>{
            return <Product key={index} detail={item}/>
        })
     
    );
  }
}



let div = document.createElement("div");
div.id = "container";
div.style.display="flex";
document.body.appendChild(div);

ReactDOM.render(<App/>,document.getElementById('container'));

