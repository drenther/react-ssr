import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    let post;
    if (__isBrowser__ && window.__SERIALIZED_DATA__) {
      post = window.__SERIALIZED_DATA__;
      delete window.__SERIALIZED_DATA__;
    } else if (this.props.staticContext) {
      post = this.props.staticContext;
    }

    this.state = {
      post,
      loading: post ? false : true,
    };
  }

  componentDidMount() {
    if (!this.state.post) {
      console.log('cdm');
      this.fetchData(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id) {
      console.log('cdu');
      this.fetchData(id);
    }
  }

  fetchData = id => {
    this.setState({ loading: true });

    this.props.getInitialData(id).then(post => {
      this.setState({ post, loading: false });
    });
  };

  render() {
    const { post, loading } = this.state;
    return (
      <div className="post">
        {loading ? (
          <div className="loader">Loading</div>
        ) : (
          <Fragment>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Post;
