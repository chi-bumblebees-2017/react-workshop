import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'
import profilePic from './profile-pic.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: "home",
      loadingDone: false,
    }
    this.switchContent = this.switchContent.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loadingDone: true,
      })
    }, 2000);
  }

  switchContent(id) {
    this.setState(() => ({
      showContent: id,
    }));
  }

  render() {
    if (this.state.loadingDone) {
      return (
        <div className="App">

          <Navbar onClick={this.switchContent}/>

        <div className='page'>
          <div className='container-fluid top-padding'>
            <div className='col-md-2'>
              <ProfileCard name="Tove and Simon, as a prairie dog"/>
            </div>
            <div className='col-md-8'>
              <Content title={this.state.showContent} showContent={this.state.showContent} />
            </div>
          </div>
        </div>

        </div>
      );
    } else {
      return (<img src={profilePic} className="App-profile-pic" />)
    }
  }
}

export default App;
