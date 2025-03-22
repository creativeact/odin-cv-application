function Pill({title, endDate, handleEdit}) {
    const handleClick = () => {
        handleEdit();
    }

    return (
        <div className="pill" onClick={handleClick}>
            <p>{title}</p>
            
            <div className="dates">
                <p>{endDate}</p>
            </div>
        </div>
    )
}

export { Pill }