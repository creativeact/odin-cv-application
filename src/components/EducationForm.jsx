import { useState } from 'react';

function EducationForm({ educationItem, onSubmit }) {
    const [formData, setFormData] = useState({ ...educationItem });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
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
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange} 
                    />
            </div>
            <div className="form-item">
                <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange} 
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
            <button type='submit' className='submitBtn'>Update</button>
        </form>
    );
}

export { EducationForm };