import { Component } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';

import { render } from 'react-dom';
import Loadd from 'react-loader-spinner'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({loading: true})
    }, 5000);
  }

  render() {
    return(
      <div className='wrapper'>
        <Header />
        {this.state.loading ? <Main /> : <Loader />}
      </div>
    )
  }
}