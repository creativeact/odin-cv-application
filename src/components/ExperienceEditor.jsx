import { useState } from 'react';
import { ExperienceForm } from './ExperienceForm.jsx';
import { Pill } from './Pill.jsx';

function ExperienceEditor({ info, setInfo }) {
    const [activeKey, setActiveKey] = useState(null);
    const [showNewForm, setShowNewForm] = useState(false);

    const handleChange = (index, e) => {
        const updatedExperienceInfo = [...info];
        updatedExperienceInfo[index][e.target.name] = e.target.value;
        setInfo(updatedExperienceInfo);
    };

    const handleSubmit = (item) => {
        if (item.key !== null) {
            const updatedExperienceInfo = info.map((experienceItem) =>
                experienceItem.key === item.key ? item : experienceItem
            );
            setInfo(updatedExperienceInfo);
        } else {
            const newItem = {...item, key: crypto.randomUUID()}
            setInfo(prevInfo => [...prevInfo, newItem]);
            setShowNewForm(false);
        }
        setActiveKey(null);
    };
    
    const handleEditExperience = (key) => {
        setActiveKey(key);
    };

    const handleCancelEdit = (originalItem) => {
        setInfo((prevInfo) =>
            prevInfo.map((item) =>
                item.key === originalItem.key ? originalItem : item
            )
        );
        setActiveKey(null);
    }

    const handleCancelNew = () => {
        setShowNewForm(false);
    };

    const handleAddExperience = () => {
        setShowNewForm(true);
        setActiveKey(null);
    };

    const handleRemoveExperience = (keyToRemove) => {
        const updatedExperienceInfo = info.filter((experienceItem) => experienceItem.key !== keyToRemove);

        setInfo(updatedExperienceInfo);

        if (activeKey === keyToRemove) {
            setActiveKey(null);
        }
    };

    return (
        <>
            <>
                <ul className="experience-list">
                    {info.map((experienceItem, index) => (
                        <li key={experienceItem.key} className="experience-item">
                            {activeKey === experienceItem.key ? (
                                <ExperienceForm
                                    experienceItem={experienceItem}
                                    onChange={(e) => handleChange(index, e)}
                                    handleSubmit={handleSubmit}
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
                    {showNewForm && (
                    <li className="experience-item">
                        <ExperienceForm
                            experienceItem={{
                                key: null,
                                company: "",
                                position: "",
                                startDate: "",
                                endDate: "",
                                location: "",
                                description: "",
                            }}
                            handleSubmit={handleSubmit}
                            handleCancelEdit={handleCancelNew}
                        />
                    </li>
                    )}
                     {!showNewForm && (
                        <button className="addBtn" onClick={handleAddExperience}>
                            Add Experience
                        </button>
                    )}
                </ul>
            </>
        </>
    );
}

export { ExperienceEditor }