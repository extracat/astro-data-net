import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleGenericSubmit, handleGenericChange, getFieldErrors } from '../utils/formHandlers';

const BaseForm = ({
  api,
  endpoint,
  initialData,
  redirectPath,
  mutateEndpoint,
  getPostData = (data) => data,
  onSuccess = null,
  validateForm = null,
  children
}) => {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState([]);
  const [generalErrors, setGeneralErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setGeneralErrors([]);
    setFormErrors([]);

    // Run custom validation if provided
    if (validateForm) {
      const { fieldErrors, generalErrors } = validateForm(formData);
      if (fieldErrors || generalErrors) {
        if (fieldErrors) setFormErrors(fieldErrors);
        if (generalErrors) setGeneralErrors(generalErrors);
        return;
      }
    }

    const dataToSend = getPostData(formData);
    
    const result = await handleGenericSubmit({
      api,
      endpoint,
      data: dataToSend,
      router,
      redirectPath,
      mutateEndpoint,
      setIsLoading,
      setFormErrors,
      setGeneralErrors
    });

    if (result.success && onSuccess) {
      await onSuccess(result.data); // Call onSuccess with response data
    }
  };

  const handleChange = handleGenericChange(formData, setFormData);
  const getErrors = getFieldErrors(formErrors);

  return children({
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    generalErrors,
    getFieldErrors: getErrors
  });
};

export default BaseForm;