import './App.css';
import { useState } from 'react';
import { useForm } from './useForm.jsx';
import { Form, FormItem } from './components/Form.jsx';
import { Section } from './components/Section.jsx';
import { CVGeneral, CVEducationItem, CVExperienceItem } from './components/CV.jsx';



function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const generalForm = useForm(generalInfo, setGeneralInfo);
  const educationForm = useForm(educationInfo, setEducationInfo);
  const experienceForm = useForm(experienceInfo, setExperienceInfo);

  return (
    <>
      <div className="left">
        <Section title="General Information">
          <Form onSubmit={generalForm.handleSubmit}>
            <FormItem label="Full Name" input="fullName" placeholder="Enter full name" value={generalForm.formData.fullName} onChange={generalForm.handleChange} />
            <FormItem label="Email" input="email" type="email" placeholder="Enter a valid email address" value={generalForm.formData.email} onChange={generalForm.handleChange}/>
            <FormItem label="Phone" input="phone" type="tel" placeholder="(000)-000-0000" value={generalForm.formData.phone} onChange={generalForm.handleChange} />
            <FormItem label="City" input="city" placeholder="e.g. Chicago, Illinois" value={generalForm.formData.city} onChange={generalForm.handleChange} />
          </Form>
        </Section>
        <Section title="Education">
          <Form onSubmit={educationForm.handleSubmit}>
            <FormItem label="School" input="school" placeholder="Enter school / university" value={educationForm.formData.school} onChange={educationForm.handleChange} />
            <FormItem label="Degree" input="degree" value={educationForm.formData.degree} onChange={educationForm.handleChange}/>
            <FormItem label="Start Date" input="startDate" type="date" value={educationForm.formData.startDate} onChange={educationForm.handleChange} />
            <FormItem label="End Date" input="endDate" type="date" value={educationForm.formData.endDate} onChange={educationForm.handleChange} />
            <FormItem label="Location" input="location" value={educationForm.formData.location} onChange={educationForm.handleChange} />
          </Form>
        </Section>
        <Section title="Experience">
          <Form onSubmit={experienceForm.handleSubmit}>
            <FormItem label="Company" input="company" value={experienceForm.formData.company} onChange={experienceForm.handleChange} />
            <FormItem label="Position" input="position" value={experienceForm.formData.position} onChange={experienceForm.handleChange}/>
            <FormItem label="Start Date" input="startDate" type="date" value={experienceForm.formData.startDate} onChange={experienceForm.handleChange} />
            <FormItem label="End Date" input="endDate" type="date" value={experienceForm.formData.endDate} onChange={experienceForm.handleChange} />
            <FormItem label="Location" input="location" value={experienceForm.formData.location} onChange={experienceForm.handleChange} />
            <FormItem label="Description" input="description" type="textarea" value={experienceForm.formData.description} onChange={experienceForm.handleChange} />
          </Form>
        </Section>
      </div>
      <div className="right">
        <CVGeneral generalInfo={generalInfo} />
        <div className="CVEducation">
          <CVEducationItem educationInfo={educationInfo} />
        </div>
        <div className="CVExperience">
          <CVExperienceItem experienceInfo={experienceInfo} />
        </div>
      </div>
    </>
  );
}

export default App
