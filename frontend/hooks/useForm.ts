import { useState } from 'react';

type FormValues = { [key: string]: any };

export function useForm<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // limpia error al escribir
  };

  const validate = (validators: Partial<Record<keyof T, (value: any) => string | null>>) => {
    const newErrors: typeof errors = {};
    for (const key in validators) {
      const validateField = validators[key];
      if (validateField) {
        const error = validateField(values[key]);
        if (error) newErrors[key] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => setValues(initialValues);

  return {
    values,
    errors,
    handleChange,
    validate,
    reset,
    setValues,
    setErrors,
  };
}
