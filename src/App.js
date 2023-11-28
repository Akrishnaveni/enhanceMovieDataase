import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Header from './components/Header'

import Home from './components/Home'

import UpComing from './components/Upcoming'

import SingleMovie from './components/SingleMovie'

import TopRated from './components/TopRated'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/upcoming" component={UpComing} />
    <Route exact path="/top-rated" component={TopRated} />

    <Route exact path="/:id" component={SingleMovie} />
  </Switch>
)

export default App
