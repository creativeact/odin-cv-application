import './App.css';
import { useState } from 'react';
import { Form, FormItem } from './components/Form.jsx';
import { Section } from './components/Section.jsx';
import { CVGeneral } from './components/CV.jsx';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data", generalInfo);
  }

  return (
    <>
      <div className="left">
        <Section title="General Information">
          <Form onSubmit={handleSubmit}>
            <FormItem label="Full Name" input="fullName" placeholder="Enter full name" value={generalInfo.fullName} onChange={handleFormChange} />
            <FormItem label="Email" input="email" type="email" placeholder="Enter a valid email address" value={generalInfo.email} onChange={handleFormChange}/>
            <FormItem label="Phone" input="phone" type="tel" placeholder="(000)-000-0000" value={generalInfo.phone} onChange={handleFormChange}/>
            <FormItem label="City" input="city" placeholder="e.g. Chicago, Illinois" value={generalInfo.city} onChange={handleFormChange} />
          </Form>
        </Section>
        <Section title="Education">
          <Form>
            <FormItem label="School" input="school" placeholder="Enter school / university" />
            <FormItem label="Degree" input="degree"/>
            <FormItem label="Start Date" input="startDate" type="date" />
            <FormItem label="End Date" input="endDate" type="date" />
            <FormItem label="Location" input="location" />
          </Form>
        </Section>
        <Section title="Experience">
          <Form>
            <FormItem label="Company" input="company" />
            <FormItem label="Position" input="position"/>
            <FormItem label="Start Date" input="startDate" type="date" />
            <FormItem label="End Date" input="endDate" type="date" />
            <FormItem label="Location" input="location" />
            <FormItem label="Description" input="description" type="textarea" />
          </Form>
        </Section>
      </div>
      <div className="right">
        <CVGeneral generalInfo={generalInfo} />
      </div>
    </>
  );
}

export default App
