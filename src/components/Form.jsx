function Form({ children, onSubmit }) {
    return (
      <>
        <form className="form" onSubmit={onSubmit}>
          {children}
          <button type='submit' className='submitBtn'>Update</button>
        </form>
      </>
    );
}
  
  function FormItem({ label, input, type="text", placeholder = "", value, onChange }) {
    return (
      <div className="form-item">
        <label htmlFor={input}>{label}</label>
        {type === "textarea" ? (
        <textarea id={input} name={input} placeholder={placeholder} value={value} onChange={onChange} ></textarea>
        ) : (
        <input id={input} name={input} type={type} placeholder={placeholder} value={value} onChange={onChange} ></input>
        )}
      </div>
    );
  }

  export { Form, FormItem }