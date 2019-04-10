import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Product extends Component {
    constructor(props) {
      super();
      let product = props.detail;
      this.state = {"name":product.name,"upvote":product.upvote,"downvote":product.downvote};
      this.upvote = this.upvote.bind(this);
      this.downvote = this.downvote.bind(this);
    }
    upvote(){
      let vote = this.state.upvote+1;
      this.setState({upvote:vote});
    }
    downvote(){
      let vote = this.state.downvote-1
      this.setState({downvote:vote});
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    render() {
        let color = this.getRandomColor();
        let Style= {"width":200+"px","height":100+"px",padding:30+"px",border:2+"px solid black",
        marginLeft:20+"px",
        textAlign:"center",
        backgroundColor:color
      };
      return (
        <div style={Style}>
        <div style={{height:"80%"}}>{this.state.name}</div>
        <button onClick={this.upvote} style={{color:"green"}}>upvote:{this.state.upvote}</button>
        <button onClick={this.downvote} style={{color:"red"}}>downvote:{this.state.downvote}</button>
        </div>
      );
    }
  }