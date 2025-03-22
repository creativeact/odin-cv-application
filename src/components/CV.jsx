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

function CVEducation({ educationInfo }) {
    console.log('CVEducation received', educationInfo);
    return (
        <div className="CV-education">
            <ul>
                {educationInfo.map((educationItem) => (
                    <li key={educationItem.key}>
                         <p>{educationItem.school}</p>
                         <p>{educationItem.degree}</p>
                         <p>{educationItem.startDate}</p>
                         <p>{educationItem.endDate}</p>
                         <p>{educationItem.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function CVExperience({ experienceInfo }) {
    return (
        <div className="CV-education">
            <ul>
                {experienceInfo.map((experienceItem) => (
                    <li key={experienceItem.key}>
                         <p>{experienceItem.company}</p>
                         <p>{experienceItem.position}</p>
                         <p>{experienceItem.startDate}</p>
                         <p>{experienceItem.endDate}</p>
                         <p>{experienceItem.location}</p>
                         <p>{experienceItem.description}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export { CVGeneral, CVEducation, CVExperience }