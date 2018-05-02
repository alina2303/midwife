import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InternshipForm from '../InternshipForm/internshipForm';
import InternshipFormType1 from '../InternshipFormType1/internshipFormType1';


const FormTabs = () => (
  <Tabs>
     <div>
    <TabList>
      <Tab>Page 1</Tab>
      <Tab>Page 2</Tab>
      <Tab>Page 3</Tab>  
    </TabList>
    </div>
    <TabPanel>
      <InternshipForm />
    </TabPanel>
    <TabPanel>
      <InternshipFormType1 />
    </TabPanel>
    <TabPanel>
      <InternshipForm /> 
    </TabPanel>
    <TabPanel>
      <InternshipForm />  
    </TabPanel>
  </Tabs>
);

export default FormTabs