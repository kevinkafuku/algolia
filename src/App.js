import React, { Component, Fragment } from 'react';
import './App.css';
import Layout from "./components/Layout";
import ListDrawer from "./components/ListDrawer";
import NewsContent from "./components/News";
import SearchAppBar from "./components/SearchAppBar";

 class App extends Component {
  render() {
    return (
  <Fragment>
  <Layout
    top={<SearchAppBar />}
    eft={<ListDrawer />}
    center={<NewsContent />}
  />
  </Fragment>
    );
  }
}

export default App;