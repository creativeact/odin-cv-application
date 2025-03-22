import { useState } from 'react';

function GeneralEditor({ info, setInfo }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }));
    }
    
    const handleSubmit = (e) => {
       e.preventDefault();
       setIsEditing(false);
    }

    if (!isEditing) {
        return (
            <div className={`editor-display ${isEditing ? "hidden" : "grid"}`}>
                <p><strong>Name</strong>: {info.fullName}</p>
                <p><strong>Email</strong>: {info.email}</p>
                <p><strong>Phone</strong>: {info.phone}</p>
                <p><strong>City</strong>: {info.city}</p>
                <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )
    } else {
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter full name"
                            value={info.fullName}
                            onChange={handleChange}
                        />
                </div>
                <div className="form-item">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Enter email" 
                            value={info.email} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label>Phone</label>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Enter phone number" 
                            value={info.phone} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label>City</label>
                        <input 
                            type="text" 
                            name="city"
                            placeholder="Enter city" 
                            value={info.city} 
                            onChange={handleChange}
                        />
                    </div>
                <button type='submit' className='submitBtn'>Update</button>
            </form>
        );
    }
}

export { GeneralEditor };