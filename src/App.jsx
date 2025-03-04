import './App.css';
import { Form, FormItem } from './components/Form.jsx';
import { Section } from './components/Section.jsx';


function App() {
  return (
    <>
    <Section title="General Information">
      <Form>
        <FormItem label="Full Name" input="name" placeholder="Enter full name" />
        <FormItem label="Email" input="email" type="email" placeholder="Enter a valid email address" />
        <FormItem label="Phone" input="phone" type="tel" placeholder="(000)-000-0000" />
        <FormItem label="City" input="city" placeholder="e.g. Chicago, Illinois" />
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
    </>
  );
}

export default App
