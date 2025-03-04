import { useState } from 'react';

function useForm(initialState, onSubmitCallback) {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitCallback(formData);
    }

    return { formData, handleChange, handleSubmit }
}

export { useForm }