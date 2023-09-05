'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  formatPrice,
  required,
  register,
  errors
}) => {
  return (
    <div>
      
    </div>
  )
}

export default Input
