import { mutate } from 'swr';

export const handleGenericSubmit = async ({
  api,
  endpoint,
  data,
  router,
  redirectPath,
  mutateEndpoint,
  setIsLoading,
  setFormErrors,
  setGeneralErrors
}) => {
  setIsLoading(true);     // activate loading indicator
  setFormErrors([]);      // clear error state
  setGeneralErrors([]);   // clear error state

  try {
    const res = await api.post(endpoint, data);

    // Check if res is a proper Response object
    if (!res || typeof res.text !== 'function') {
      const errorMessage = { error: 'API is not available or returned invalid response' };
      setGeneralErrors([errorMessage]);
      return { success: false, error: errorMessage }; // Return response data
    }

    if (!res.ok) {
      let errorData;
      try {
        const contentType = res.headers?.get('content-type');
        if (contentType?.includes('application/json')) {
          errorData = await res.json();
        } else {
          const textResponse = await res.text();
          errorData = { error: textResponse };
        }
      } catch (parseError) {
        errorData = { error: 'Failed to parse error response' };
      }

      if (Array.isArray(errorData.errors)) {
        const fieldErrors = errorData.errors.filter(err => 
          err.location === 'body' && Object.keys(data).includes(err.path)
        );
        const generalErrorMessages = errorData.errors.filter(err => 
          err.location === 'body' && !Object.keys(data).includes(err.path)
        );
        
        setFormErrors(fieldErrors);
        setGeneralErrors(generalErrorMessages);
      } else {
        setGeneralErrors([errorData]);
      }
      return { success: false, error: errorData }; // Return response data
    }

    const responseData = await res.json();

    if (mutateEndpoint) {
      mutate(mutateEndpoint);
    }
    if (router && redirectPath) {
      router.push(redirectPath);
    }
    return { success: true, data: responseData }; // Return response data
  } catch (error) {
    console.error('POST error:', error);
    setGeneralErrors([{ error: error.message || 'Unknown error occurred' }]);
    return { success: false, error };
  } finally {
    setIsLoading(false);
  }
};

export const handleGenericChange = (formData, setFormData) => 
  (e, property = null, index = null, nestedProperty = null) => {
    const { name, value } = e.target;

    if (property) {
      let updatedProperty = Array.isArray(formData[property]) 
        ? [...formData[property]] 
        : { ...formData[property] };
      
      if (Array.isArray(formData[property])) {
        if (typeof updatedProperty[index] === 'object' && updatedProperty[index] !== null) {
          // if it's an object
          updatedProperty[index][name] = value;
        } else {
          // if it's a string
          updatedProperty[index] = value;
        }
      } else if (nestedProperty) {
        updatedProperty[nestedProperty][name] = value;
      } else {
        updatedProperty[name] = value;
      }
      setFormData(prev => ({ ...prev, [property]: updatedProperty }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

export const getFieldErrors = (formErrors) => (fieldName) => {
  return formErrors.filter(error => error.path === fieldName).map(error => error.msg);
};