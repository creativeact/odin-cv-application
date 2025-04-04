import { useState } from 'react';
import { ExperienceForm } from './ExperienceForm.jsx';
import { Pill } from './Pill.jsx';

function ExperienceEditor({ info, setInfo }) {
    const [activeKey, setActiveKey] = useState(null);

    const handleChange = (index, e) => {
        const updatedExperienceInfo = [...info];
        updatedExperienceInfo[index][e.target.name] = e.target.value;
        setInfo(updatedExperienceInfo);
    };

    const handleSubmit = (updatedItem) => {
        const updatedExperienceInfo = info.map((experienceItem) =>
            experienceItem.key === updatedItem.key ? updatedItem : experienceItem
        );

        setInfo(updatedExperienceInfo);
        setActiveKey(null);
    };
    
    const handleAddExperience = () => {
        const newExperienceItem = {
            key: crypto.randomUUID(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        }

        setInfo([...info, newExperienceItem]);
        setActiveKey(newExperienceItem.key);
    };

    const handleEditExperience = (index) => {
        setActiveKey(index);
    };

    const handleCancelEdit = () => {
        setActiveKey(null);
    }

    const handleRemoveExperience = (keyToRemove) => {
        const updatedExperienceInfo = info.filter((experienceItem) => experienceItem.key !== keyToRemove);

        setInfo(updatedExperienceInfo);

        if (activeKey === keyToRemove) {
            setActiveKey(null);
        }
    };

    return (
        <div className="experience-editor">
            <>
                <ul className="experience-list">
                    {info.map((experienceItem, index) => (
                        <li key={experienceItem.key} className="experience-item">
                            {activeKey === experienceItem.key ? (
                                <ExperienceForm
                                    experienceItem={experienceItem}
                                    onChange={(e) => handleChange(index, e)}
                                    onSubmit={handleSubmit}
                                    handleRemoveExperience={() => handleRemoveExperience(experienceItem.key)}
                                    handleCancelEdit={() => handleCancelEdit(experienceItem)}
                                />
                            ) : (
                                <Pill
                                    title={experienceItem.company}
                                    startDate={experienceItem.startDate}
                                    endDate={experienceItem.endDate}
                                    handleEdit={() => handleEditExperience(experienceItem.key)}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </>
    
            <button className="addBtn" onClick={handleAddExperience}>
                Add Experience
            </button>
        </div>
    );
}

export { ExperienceEditor }