import React from 'react';
import {Route} from 'react-router-dom'
import Vendor from './components/Vendor/Vendor';
import Delivery from './components/Delivery/Delivery';
import Homepage from './components/Homepage/Homepage';
import ProductsGrocery from './components/ProductsGrocery/ProductsGrocery';
import ShopsAvailable from './components/ShopsAvailable/ShopsAvailable';
import Cancellation from './components/FooterComponents/Cancellation';
import Privacy from './components/FooterComponents/Privacy';
import Terms from './components/FooterComponents/Terms';
import CategoryRedirect from './components/CategoryRedirect/CategoryRedirect';
import LocationSearchInput from './AutoComplete';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Vendor /> */}
        {/* <Delivery /> */}
        {/* <Homepage /> */}
        <Route path="/" exact render={() => <Homepage />} />
        <Route path="/delivery" exact render={() => <Delivery />} />
        <Route path="/vendor" exact render={() => <Vendor />} />
        <Route path="/grocery" exact render={() => <ProductsGrocery />} />
        <Route path="/shops" exact render={() => <ShopsAvailable />} />
        <Route path="/cancellation" exact render={() => <Cancellation />} />
        <Route path="/privacy" exact render={() => <Privacy />} />
        <Route path="/terms" exact render={() => <Terms />} />
        <Route path="/redirect" exact render={() => <CategoryRedirect />} />
        {/* <LocationSearchInput /> */}
      </div>
    )
  }
}

export default App;
