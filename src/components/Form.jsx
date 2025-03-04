function Form({ children }) {
    return (
      <>
        <div className="form">
          {children}
          <button type='submit' className='submitBtn'>Submit</button>
        </div>
      </>
    );
  }
  
  function FormItem({ label, input, type="text", placeholder = "" }) {
    return (
      <div className="form-item">
        <label htmlFor={label}>{label}</label>
        {type === "textarea" ? (
        <textarea id={input} name={input} placeholder={placeholder}></textarea>
      ) : (
        <input id={input} name={input} type={type} placeholder={placeholder}></input>
      )}
      </div>
    );
  }

  export { Form, FormItem }