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

export { CVGeneral }