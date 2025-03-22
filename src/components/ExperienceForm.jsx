import { useState } from 'react';

function ExperienceForm({ experienceItem, onSubmit }) {
    const [formData, setFormData] = useState({ ...experienceItem });

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
                        name="degree"
                        value={formData.position}
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
            <div className="form-item">
                <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange} 
                    />
            </div>
            <button type='submit' className='submitBtn'>Update</button>
        </form>
    );
}

export { ExperienceForm };