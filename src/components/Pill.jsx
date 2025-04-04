function Pill({title, startDate, endDate, handleEdit}) {
    const handleClick = () => {
        handleEdit();
    }

    return (
        <div className="pill" onClick={handleClick}>
            <p>{title}</p>
            
            <div className="dates">
                {startDate} - {endDate}
            </div>
        </div>
    )
}

export { Pill }