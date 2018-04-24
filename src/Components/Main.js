import React from 'react'
import { Switch, Route } from 'react-router-dom'
import InternshipForm from './InternshipForm/internshipForm';
import RegistrationForm from './RegistrationForm/registrationForm';
import FormTabs from './FormTabs/formTabs';

const Main = () => (
  <main>
    <Switch>
    <Route path='/internshipForm' component={InternshipForm}/>
    <Route path='/registrationForm' component={RegistrationForm}/>  
    <Route path='/formTabs' component={FormTabs}/> 
    </Switch>
  </main>
)
export default Main
