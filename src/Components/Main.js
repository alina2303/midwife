import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationForm from './RegistrationForm/registrationForm';
import FormTabs from './FormTabs/formTabs';
import NewForm from './NewForm/newForm';
import Home from './Home/home';


const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/newForm' component={NewForm}/>
    <Route path='/registrationForm' component={RegistrationForm}/>  
    <Route path='/formTabs' component={FormTabs}/> 
    </Switch>
  </main>
)
export default Main
