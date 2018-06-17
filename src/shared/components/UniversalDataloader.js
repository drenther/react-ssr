import { Component } from 'react';

class UniversalDataloader extends Component {
  constructor(props) {
    super(props);

    let data;
    if (__isBrowser__ && window.__SERIALIZED_DATA__) {
      data = window.__SERIALIZED_DATA__;
      delete window.__SERIALIZED_DATA__;
    } else if (this.props.staticContext) {
      data = this.props.staticContext.data;
    }

    this.state = {
      data,
      loading: data ? false : true,
    };
  }

  componentDidMount() {
    if (!this.state.data) {
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

    this.props.getInitialData(id).then(data => {
      this.setState({ data, loading: false });
    });
  };
  render() {
    return this.props.children(this.state);
  }
}

export default UniversalDataloader;
