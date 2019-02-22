import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import DefaultPage from './components/DefaultPage';
import WelcomeSection from './components/WelcomeSection';


class App extends Component {

  state = {
    data: null
  };

//   componentDidMount() {
//       // Call our fetch function below once the component mounts
//       axios.get(`http://localhost:8081/api/products`)
//       .then(res => {
//         const data_response = res.data;
//         console.log(res.data)
//         this.setState({ data:data_response });
//       })
  
// };


  render() {
    return (
      
      <React.Fragment>
        <Navbar />
        <WelcomeSection/>
        <Switch> 
          <Route path="/" component={ProductList} exact />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/Cart" component={Cart} />
          <Route component={DefaultPage} />
        </Switch>
        
         
      </React.Fragment>
    );
  }
}

export default App;
