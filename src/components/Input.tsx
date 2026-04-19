import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label &&
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        }
        <div className="relative">
          {icon &&
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          }
          <input
            ref={ref}
            className={`
              block w-full rounded-lg border-gray-300 shadow-sm
              focus:ring-amber-500 focus:border-amber-500 sm:text-sm
              border p-2.5 transition-colors
              ${icon ? 'pl-10' : ''}
              ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
              ${props.disabled ? 'bg-gray-50 text-gray-500' : ''}
            `}
            {...props} />
          
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>);

  }
);
Input.displayName = 'Input';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
  fullWidth?: boolean;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
  { label, error, options, fullWidth = true, className = '', ...props },
  ref) =>
  {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label &&
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        }
        <select
          ref={ref}
          className={`
            block w-full rounded-lg border-gray-300 shadow-sm
            focus:ring-amber-500 focus:border-amber-500 sm:text-sm
            border p-2.5 bg-white
            ${error ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
          `}
          {...props}>
          
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) =>
          <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>);

  }
);
Select.displayName = 'Select';
interface TextareaProps extends
  React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label &&
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        }
        <textarea
          ref={ref}
          className={`
            block w-full rounded-lg border-gray-300 shadow-sm
            focus:ring-amber-500 focus:border-amber-500 sm:text-sm
            border p-2.5
            ${error ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
          `}
          {...props} />
        
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>);

  }
);
Textarea.displayName = 'Textarea';