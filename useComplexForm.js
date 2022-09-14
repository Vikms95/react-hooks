import { useState } from 'react';

export const usePostForm = (editorRef, formFields) => {
	const [formData, setFormData] = useState(formFields);

	const handleChange = e => {
		setFormData(prevFormData => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}));
	};

	const handlePrivacyChange = e => {
		setFormData(prevFormData => ({
			...prevFormData,
			isPublic: !prevFormData.isPublic,
		}));
	};

	const handleImageChange = e => {
		setFormData(prevFormData => ({
			...prevFormData,
			image: e.target.files[0],
		}));
	};

	const handleEditorChange = (content, editor) => {
		const editorContent = editorRef.current.getContent();
		setFormData(prevFormData => ({ ...prevFormData, text: editorContent }));
	};
	return {
		formData,
		setFormData,
		handleChange,
		handlePrivacyChange,
		handleImageChange,
		handleEditorChange,
	};
};
