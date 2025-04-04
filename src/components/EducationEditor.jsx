import { useState } from 'react';
import { EducationForm } from './EducationForm.jsx';
import { Pill } from './Pill.jsx';

function EducationEditor({ info, setInfo }) {
    const [activeKey, setActiveKey] = useState(null);

    const handleChange = (index, e) => {
        const updatedEducationInfo = [...info];
        updatedEducationInfo[index][e.target.name] = e.target.value;
        setInfo(updatedEducationInfo);
    };

    const handleSubmit = (updatedItem) => {
        console.log('Education Updated Item before submitting', updatedItem);
        const updatedEducationInfo = info.map((educationItem) =>
            educationItem.key === updatedItem.key ? updatedItem : educationItem
        );

        setInfo(updatedEducationInfo);
        setActiveKey(null);
    };
    
    const handleAddEducation = () => {
        const newEducationItem = {
            key: crypto.randomUUID(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        }

        setInfo([...info, newEducationItem]);
        setActiveKey(newEducationItem.key);
    };

    const handleEditEducation = (index) => {
        setActiveKey(index);
    };

    const handleCancelEdit = (originalItem) => {
        setInfo((prevInfo) =>
            prevInfo.map((item) =>
                item.key === originalItem.key ? originalItem : item
            )
        );
        setActiveKey(null);
    }

    const handleRemoveEducation = (keyToRemove) => {
        const updatedEducationInfo = info.filter((educationItem) => educationItem.key !== keyToRemove);

        setInfo(updatedEducationInfo);

        if (activeKey === keyToRemove) {
            setActiveKey(null);
        }
    };

    return (
        <>
            <>
                <ul className="education-list">
                    {info.map((educationItem, index) => (
                        <li key={educationItem.key} className="education-item">
                            {activeKey === educationItem.key ? (
                                <EducationForm
                                    educationItem={educationItem}
                                    onChange={(e) => handleChange(index, e)}
                                    onSubmit={handleSubmit}
                                    handleRemoveEducation={() => handleRemoveEducation(educationItem.key)}
                                    handleCancelEdit={() => handleCancelEdit(educationItem)}
                                />
                            ) : (
                                <Pill
                                    title={educationItem.school}
                                    startDate={educationItem.startDate}
                                    endDate={educationItem.endDate}
                                    handleEdit={() => handleEditEducation(educationItem.key)}
                                />
                            )}
                        </li>
                    ))}
                     <button className="addBtn" onClick={handleAddEducation}>
                        Add Education
                    </button>
                </ul>
            </>
        </>
    );
}

export { EducationEditor }