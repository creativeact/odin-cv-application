import './App.css';
import { useState } from 'react';
import { ExpandToggle } from './components/ExpandToggle.jsx';
import { GeneralEditor } from './components/GeneralEditor.jsx';
import { EducationEditor } from './components/EducationEditor.jsx';
import { ExperienceEditor } from './components/ExperienceEditor.jsx';

import { CVGeneral, CVEducation, CVExperience } from './components/CV.jsx';


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'Monkey D. Luffy',
    email: 'pirateking@gmail.com',
    phone: '(123) 456-7890',
    city: 'Orange Village, East Blue',
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      key: crypto.randomUUID(),
      school: 'Pirate University',
      degree: 'Haki',
      startDate: '01-01-1991',
      endDate: '01-01-1994',
      location: 'Grand Line',
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      key: crypto.randomUUID(),
      company: 'Straw Hat Pirates',
      position: 'Captain',
      startDate: '01-01-1991',
      endDate: '01-01-1994',
      location: 'Whole Cake Island',
      description: 'Defeated the Big Mom Pirates with my Gum Gum Bazooka'
    },
  ]);

  return (
    <>
      <div className="left">
        <ExpandToggle title="General Information">
          <GeneralEditor 
            info={generalInfo}
            setInfo={setGeneralInfo}
          />
        </ExpandToggle>
        <ExpandToggle title="Education">
          <EducationEditor
            info={educationInfo}
            setInfo={setEducationInfo}
          />
        </ExpandToggle>
        <ExpandToggle title="Experience">
          <ExperienceEditor
            info={experienceInfo}
            setInfo={setExperienceInfo}
          />
        </ExpandToggle>
      </div>
      <div className="right">
        <CVGeneral generalInfo={generalInfo} />
        <CVEducation educationInfo={educationInfo} />
        <CVExperience experienceInfo={experienceInfo} />
      </div>
    </>
  );
}

export default App

{/*  
   <Editor title="Experience">
          <Form onSubmit={experienceForm.handleSubmit}>
            <FormItem label="Company" input="company" value={experienceForm.formData.company} onChange={experienceForm.handleChange} />
            <FormItem label="Position" input="position" value={experienceForm.formData.position} onChange={experienceForm.handleChange}/>
            <FormItem label="Start Date" input="startDate" type="date" value={experienceForm.formData.startDate} onChange={experienceForm.handleChange} />
            <FormItem label="End Date" input="endDate" type="date" value={experienceForm.formData.endDate} onChange={experienceForm.handleChange} />
            <FormItem label="Location" input="location" value={experienceForm.formData.location} onChange={experienceForm.handleChange} />
            <FormItem label="Description" input="description" type="textarea" value={experienceForm.formData.description} onChange={experienceForm.handleChange} />
          </Form>
        </Editor> */}