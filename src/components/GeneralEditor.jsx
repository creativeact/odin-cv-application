function GeneralEditor({ info, setInfo }) {
    const handleChange = (e) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }));
    }
    
    return (
        <form className="general-form">
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
        </form>
    );
}

export { GeneralEditor };