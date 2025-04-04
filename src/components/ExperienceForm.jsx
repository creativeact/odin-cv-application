import { useState } from 'react';
import { DateInput } from './DateInput.jsx';
import { RemoveButton } from './RemoveButton.jsx';

function ExperienceForm({ experienceItem, onSubmit, handleRemoveExperience, handleCancelEdit }) {
    const [formData, setFormData] = useState({ ...experienceItem });

    const formatDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    const handleChange = (e, fieldName) => {
        if (e instanceof Date) {
            const formattedDate = formatDate(e);

            setFormData({
                ...formData,
                [fieldName]: formattedDate,
            });
        }
        else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="experience-form" onSubmit={handleSubmit}>
            <div className="form-item">
                <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item">
                <label>Position</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item">
                <label>Start Date</label>
                <DateInput
                    selectedDate={formData.startDate}
                    onChange={(date) => handleChange(date, "startDate")}
                />
            </div>
            <div className="form-item">
                <label>End Date</label>
                <DateInput
                    selectedDate={formData.endDate}
                    onChange={(date) => handleChange(date, "endDate")}
                />
            </div>
            <div className="form-item">
                <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item">
                <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange} 
                    />
            </div>
            <div className="formBtns">
                <button type='submit' className='submitBtn'>Update</button>
                <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="cancelBtn"
                >
                    Cancel
                </button>
                <RemoveButton 
                    handleRemove={handleRemoveExperience}
                />
            </div>
        </form>
    );
}

export { ExperienceForm };