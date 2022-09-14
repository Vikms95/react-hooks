import React, { useEffect, useState } from 'react'

export function useValidation(validator, fields) {
  const [errors, setErrors] = useState(() => validator(fields))
  
  useEffect(() => {
      setErrors(() => validator(fields))
  },[fields])

  const isFormValid = () => Object.keys(errors).some(field => errors[field]);
  
  const shouldMarkErr = field => {
    const hasError = errors[field];
    const shouldShow = fields.touched[field];
    return hasError ? shouldShow : false;
  };

  return {isFormValid, shouldMarkErr}

}
