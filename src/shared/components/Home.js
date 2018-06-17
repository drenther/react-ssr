import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    let posts;
    if (__isBrowser__ && window.__SERIALIZED_DATA__) {
      posts = window.__SERIALIZED_DATA__;
      delete window.__SERIALIZED_DATA__;
    } else if (this.props.staticContext) {
      posts = this.props.staticContext;
    }

    this.state = {
      posts,
      loading: posts ? false : true,
    };
  }

  componentDidMount() {
    if (!this.state.posts) {
      this.fetchData(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id) {
      this.fetchData(id);
    }
  }

  fetchData = id => {
    this.setState({ loading: true });

    this.props.getInitialData(id).then(posts => {
      this.setState({ posts, loading: false });
    });
  };

  render() {
    const { posts, loading } = this.state;
    return (
      <div className="home">
        {loading ? (
          <div className="loader">Loading</div>
        ) : (
          <div className="posts">{posts.map(post => <h3 key={post.id}>{post.title}</h3>)}</div>
        )}
      </div>
    );
  }
}

export default Home;
