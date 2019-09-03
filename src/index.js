import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: 'Frontend Developer',
          avatar: 'avatar.png',
          time: 'há 3 min',
          body:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        },
        {
          id: 2,
          name: 'Backend Developer',
          avatar: 'man-avatar.jpg',
          time: 'há 30 min',
          body:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        },
        {
          id: 3,
          name: 'Fullstack Developer',
          avatar: 'avat-boy.jpg',
          time: 'há 39 min',
          body:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <Header />
        {posts && posts.map((post) => <Post key={post.id} data={post} />)}
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
