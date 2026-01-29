import { TextareaHTMLAttributes } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

// type definitions
interface FieldConfigProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: {
    itemClass?: string;
    textareaClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    controlClass?: string;
    messageClass?: string;
  };
}

// NOTE: If user passes `value`, `onChange`, or `onBlur` via props,
// it will override React Hook Form's defaults.
// This allows controlled usage but removes RHF sync.

export type TextareaFieldConfigProps<T extends FieldValues = FieldValues> =
  FieldConfigProps<T> &
    Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'ref' | 'className' | 'name' | 'id' | 'type' | 'defaultValue'
    > & {
      /** Override RHF's controlled value */
      value?: string | number;

      /** Called in addition to RHF's onChange */
      onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

      /** Called in addition to RHF's onBlur */
      onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    };
