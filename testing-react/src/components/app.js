import React, { Component } from 'react';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox/>
        <CommentList/>
      </div>
    );
  }
}
