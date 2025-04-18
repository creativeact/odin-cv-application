import { useState } from "react";
import { EducationForm } from "./EducationForm.jsx";
import { Pill } from "./Pill.jsx";

function EducationEditor({ info, setInfo }) {
  const [activeKey, setActiveKey] = useState(null);
  const [showNewForm, setShowNewForm] = useState(false);

  const handleChange = (index, e) => {
    const updatedEducationInfo = [...info];
    updatedEducationInfo[index][e.target.name] = e.target.value;
    setInfo(updatedEducationInfo);
  };

  const handleSubmit = (item) => {
    if (item.key !== null) {
      const updatedEducationInfo = info.map((educationItem) =>
        educationItem.key === item.key ? item : educationItem,
      );
      setInfo(updatedEducationInfo);
    } else {
      const newItem = { ...item, key: crypto.randomUUID() };
      setInfo((prevInfo) => [...prevInfo, newItem]);
      setShowNewForm(false);
    }
    setActiveKey(null);
  };

  const handleEditEducation = (key) => {
    setActiveKey(key);
  };

  const handleCancelEdit = (originalItem) => {
    setInfo((prevInfo) =>
      prevInfo.map((item) =>
        item.key === originalItem.key ? originalItem : item,
      ),
    );
    setActiveKey(null);
  };

  const handleCancelNew = () => {
    setShowNewForm(false);
  };

  const handleAddEducation = () => {
    setShowNewForm(true);
    setActiveKey(null);
  };

  const handleRemoveEducation = (keyToRemove) => {
    const updatedEducationInfo = info.filter(
      (educationItem) => educationItem.key !== keyToRemove,
    );

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
                  handleSubmit={handleSubmit}
                  handleRemoveEducation={() =>
                    handleRemoveEducation(educationItem.key)
                  }
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
          {showNewForm && (
            <li className="education-item">
              <EducationForm
                educationItem={{
                  key: null,
                  school: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                  location: "",
                }}
                handleSubmit={handleSubmit}
                handleCancelEdit={handleCancelNew}
              />
            </li>
          )}
          {!showNewForm && (
            <button className="addBtn" onClick={handleAddEducation}>
              Add Education
            </button>
          )}
        </ul>
      </>
    </>
  );
}

export { EducationEditor };
