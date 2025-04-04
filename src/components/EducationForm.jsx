import { useState } from 'react';
import { DateInput } from './DateInput.jsx';
import { RemoveButton } from './RemoveButton.jsx';

function EducationForm({ educationItem, onSubmit, handleRemoveEducation, handleCancelEdit }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="education-form" onSubmit={handleSubmit}>
            <div className="form-item school">
                <label>School</label>
                    <input
                        type="text"
                        name="school"
                        placeholder="Enter school / university"
                        value={formData.school}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item degree">
                <label>Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item start">
                <label>Start Date</label>
                <DateInput
                    selectedDate={formData.startDate}
                    onChange={(date) => handleChange(date, "startDate")}
                />
            </div>
            <div className="form-item end">
                <label>End Date</label>
                <DateInput
                    selectedDate={formData.endDate}
                    onChange={(date) => handleChange(date, "endDate")}
                />
            </div>
            <div className="form-item location">
                <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
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
                    handleRemove={handleRemoveEducation}
                />
            </div>
        </form>
    );
}

export { EducationForm };