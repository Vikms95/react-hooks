import { useState } from 'react';

export const useForm = formFields => {
	const [formData, setFormData] = useState(formFields);

	const handleChange = e => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

  const handleBlur = (e) => {
    const field = e.target.name

    setFormData(prev => ({
      ...prev,
      touched: { ...prev.touched, [field]: true } 
    }))
  }

	return { formData, setFormData, handleChange, handleBlur };
};
