function CVDisplay({ generalInfo, educationInfo, experienceInfo }) {
    return (
     <div className="CV-container">
         <CVGeneral generalInfo={generalInfo} />
         <CVEducation educationInfo={educationInfo} />
         <CVExperience experienceInfo={experienceInfo} />
     </div>
    );
}

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

    return (
        <div className="CV-education">
            <SectionHeader
                section={'Education'}
            />
            <ul>
                {educationInfo.map((educationItem) => (
                    <li key={educationItem.key} className="education-item">
                         <div className='education-item-display'>
                            <p className='edu-school'>{educationItem.school}, {educationItem.location}</p>
                            <p className='edu-degree'>{educationItem.degree}</p>
                            <p className="edu-dates">{educationItem.startDate} - {educationItem.endDate}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function CVExperience({ experienceInfo }) {
    return (
        <div className="CV-experience">
            <SectionHeader
                section={'Experience'}
            />
            <ul>
                {experienceInfo.map((experienceItem) => (
                    <li key={experienceItem.key}>
                        <div className='experience-item-display'>
                            <p className='exp-company'>{experienceItem.company}, {experienceItem.location}</p>
                            <p className='exp-position'>{experienceItem.position}</p>
                            <p className="exp-dates">{experienceItem.startDate} - {experienceItem.endDate}</p>
                            <p className='exp-desc'>{experienceItem.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function SectionHeader({ section }) {
    return (
        <>
            <span className='CV-section-header'>{section}</span>
            <div className='CV-section-line'></div>
        </>
    )
}

export { CVDisplay }