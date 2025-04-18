import { useState } from 'react';
import { DateInput } from './DateInput.jsx';
import { RemoveButton } from './RemoveButton.jsx';

function EducationForm({ educationItem, handleSubmit, handleRemoveEducation, handleCancelEdit }) {
    const [formData, setFormData] = useState({ ...educationItem });

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

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit(formData);
    };

    return (
        <form className="education-form" onSubmit={handleSubmitForm}>
            <div className="form-item">
                <label>School</label>
                    <input
                        type="text"
                        name="school"
                        placeholder="Enter school / university"
                        value={formData.school}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item">
                <label>Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
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
            <div className="formBtns">
                <button 
                    type='submit' 
                    className='updateBtn'
                    >
                        Update
                    </button>
                <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="cancelBtn"
                >
                    Cancel
                </button>
                {educationItem.key && (
                    <RemoveButton handleRemove={handleRemoveEducation} />
                )}
            </div>
        </form>
    );
}

export { EducationForm };