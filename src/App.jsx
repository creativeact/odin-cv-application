import './App.css';
import { useState } from 'react';
import { ExpandToggle } from './components/ExpandToggle.jsx';
import { GeneralEditor } from './components/GeneralEditor.jsx';
import { EducationEditor } from './components/EducationEditor.jsx';
import { ExperienceEditor } from './components/ExperienceEditor.jsx';
import { CVDisplay } from './components/CV.jsx';


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
      startDate: 'May 1991',
      endDate: 'Jan 1994',
      location: 'Grand Line',
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      key: crypto.randomUUID(),
      company: 'Straw Hat Pirates',
      position: 'Captain',
      startDate: 'Jan 1991',
      endDate: 'Jan 1994',
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
        <CVDisplay generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
      </div>
    </>
  );
}

export default App