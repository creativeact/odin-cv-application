import './App.css';
import { useState } from 'react';
import { ExpandToggle } from './components/ExpandToggle.jsx';
import { GeneralEditor } from './components/GeneralEditor.jsx';
import { EducationEditor } from './components/EducationEditor.jsx';
import { ExperienceEditor } from './components/ExperienceEditor.jsx';
import { CVDisplay } from './components/CV.jsx';
import { ConfigButtons } from './components/ConfigButtons.jsx';
import { usePDF } from 'react-to-pdf';

const generalExampleData = {
  fullName: 'Monkey D. Luffy',
  email: 'pirateking@gmail.com',
  phone: '(123) 456-7890',
  city: 'Orange Village, East Blue',
};

const educationExampleData = [
  {
    key: crypto.randomUUID(),
    school: 'Pirate University',
    degree: 'Haki Mastery',
    startDate: 'May 1991',
    endDate: 'Jan 1994',
    location: 'Grand Line',
  },
  {
    key: crypto.randomUUID(),
    school: 'Raftel Academy of Adventure',
    degree: 'Bachelor of Piracy and Navigation',
    startDate: 'Feb 1994',
    endDate: 'Dec 1996',
    location: 'Raftel',
  },  
];

const experienceExampleData = [
  {
    key: crypto.randomUUID(),
    company: 'Straw Hat Pirates',
    position: 'Captain',
    startDate: 'Jan 1997',
    endDate: 'Apr 2025',
    location: 'Thousand Sunny, New World',
    description: 'Led a diverse crew across the Grand Line in search of the One Piece. Defeated warlords, emperors, and inspired global change.',
  },
  {
    key: crypto.randomUUID(),
    company: 'Revolutionary Army (Internship)',
    position: 'Junior Strategist',
    startDate: 'Jun 1995',
    endDate: 'Aug 1995',
    location: 'Baltigo',
    description: 'Assisted in coordinating minor liberation efforts and distributed meat supplies to allies. Learned the basics of world politics.',
  },
  {
    key: crypto.randomUUID(),
    company: 'Impel Down',
    position: 'Escape Consultant (Freelance)',
    startDate: 'Mar 1996',
    endDate: 'Mar 1996',
    location: 'Calm Belt',
    description: 'Orchestrated a high-profile prison breakout. Successfully navigated multiple levels of danger with minimal crew loss.',
  },
];

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalExampleData);
  const [educationInfo, setEducationInfo] = useState(educationExampleData);
  const [experienceInfo, setExperienceInfo] = useState(experienceExampleData);

  const { toPDF, targetRef } = usePDF({filename: 'CV.pdf'});

  const handleClearData = () => {
    const clearGeneral = {
      fullName: '',
      email: '',
      phone: '',
      city: '',
    };
    const clearEducation = ([]);
    const clearExperience = ([]);
    
    setEducationInfo(clearEducation);
    setExperienceInfo(clearExperience);
    setGeneralInfo(clearGeneral);
  };

  const handleLoadData = () => {
    setGeneralInfo(generalExampleData);
    setEducationInfo(educationExampleData);
    setExperienceInfo(experienceExampleData);
  }


  return (
    <>
      <div className="left">
        <h1>CV Generator</h1>
        <ConfigButtons
          handleClearData={handleClearData}
          handleLoadData={handleLoadData}
          toPDF={toPDF}
          targetRef={targetRef}
        />
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
        <div ref={targetRef}>
          <CVDisplay  generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
        </div>
      </div>
    </>
  );
}

export default App