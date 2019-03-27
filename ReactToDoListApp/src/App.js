import React, { Component } from 'react';
import "react-router";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ToDoPage from './components/ToDoPage';
import CounterApp from './components/CounterApp';
import "./App.css"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        {/*Navigation Bar*/}
          <ul>
            <li className="nav"><Link to="/">Home</Link></li>
            <li className="nav"><Link to="/todopage">ToDoList</Link></li>
            <li className="nav"><Link to="/counterapp">CounterApp</Link></li>
          </ul>
          <Route path="/todopage" component={ToDoPage} />
          <Route path="/counterapp" component={CounterApp} />

        </div >
      </BrowserRouter >
    );
  }
}

export default App;
