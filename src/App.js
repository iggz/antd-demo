import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)
    // -> { icon: 'home', … }
  }


  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];


  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;