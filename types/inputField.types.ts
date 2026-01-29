import { InputHTMLAttributes } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

export type InputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'tel'
  | 'url'
  | 'search'
  | 'color'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'file';

// type definitions
interface FieldConfigProps<T extends FieldValues = FieldValues> {
  type: InputTypes;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: {
    itemClass?: string;
    inputClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    controlClass?: string;
    messageClass?: string;
  };
}

// NOTE: If user passes `value`, `onChange`, or `onBlur` via props,
// it will override React Hook Form's defaults.
// This allows controlled usage but removes RHF sync.

export type InputFieldConfigProps<T extends FieldValues = FieldValues> =
  FieldConfigProps<T> &
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'ref' | 'className' | 'name' | 'id' | 'type' | 'defaultValue'
    > & {
      /** Override RHF's controlled value */
      value?: string | number;

      /** Called in addition to RHF's onChange */
      onChange?: React.ChangeEventHandler<HTMLInputElement>;

      /** Called in addition to RHF's onBlur */
      onBlur?: React.FocusEventHandler<HTMLInputElement>;
    };
