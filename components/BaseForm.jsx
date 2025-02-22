import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleGenericSubmit, handleGenericChange, getFieldErrors } from '../utils/formHandlers';

export default function BaseForm({
  api,
  endpoint,
  initialData,
  redirectPath,
  mutateEndpoint,
  getPostData = (data) => data,
  onSuccess = null, // Add this prop
  children
}) {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState([]);
  const [generalErrors, setGeneralErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
}