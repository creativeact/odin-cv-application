/* function CV() {
    return (
        <div className="CV-container">
            <CVGeneral />
            <div className="CV-education">
                <span className="CV-section-header">Education</span>
            </div>
            <div className="CV-experience">
                <span className="CV-section-header">Experience</span>
            </div>
        </div>
    )
} */

function CVGeneral({ generalInfo }) {
    return (
    <div className="CV-general">
        <div className="CV-header">
            <span className="CV-name">{generalInfo.fullName || "Your Full Name"}</span>
        </div>
        <div className="CV-info">
            <span>{generalInfo.email || "Your Email"}</span>
            <span>{generalInfo.phone || "Your Phone"}</span>
            <span>{generalInfo.city || "Your City"}</span>
        </div>
    </div>
    );
}

function CVEducationItem({ educationInfo }) {
    return (
        <div className="CV-education-item">
            <span>{educationInfo.school || "School"}</span>
            <span>{educationInfo.degree || "Degree"}</span>
            <span>{educationInfo.startDate || "Start Date"}</span>
            <span>{educationInfo.endDate || "End Date"}</span>
            <span>{educationInfo.location || "Location"}</span>
        </div>
    )
}

function CVExperienceItem({ experienceInfo }) {
    return (
        <div className="CV-experience-item">
            <span>{experienceInfo.company || "Company"}</span>
            <span>{experienceInfo.position || "Position"}</span>
            <span>{experienceInfo.startDate || "Start Date"}</span>
            <span>{experienceInfo.endDate || "End Date"}</span>
            <span>{experienceInfo.location || "Location"}</span>
            <span>{experienceInfo.description || "Description"}</span>
        </div>
    )
}

export { CVGeneral, CVEducationItem, CVExperienceItem }