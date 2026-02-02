import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

type BtnNeedType = {
  enabled?: true;
  showIcon?: ReactNode;
  hideIcon?: ReactNode;
};

type BtnNotNeedType = {
  enabled: false;
};

type VisibilityToggleConfig = BtnNeedType | BtnNotNeedType;

// type definitions
interface FieldConfigProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: 'current-password' | 'new-password';
  visibilityToggle?: VisibilityToggleConfig;
  className?: {
    itemClass?: string;
    inputClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    controlClass?: string;
    messageClass?: string;
    inputGroupClass?: string;
    inputGroupAddonClass?: string;
    inputGroupBtnClass?: string;
  };
}

// NOTE: If user passes `value`, `onChange`, or `onBlur` via props,
// it will override React Hook Form's defaults.
// This allows controlled usage but removes RHF sync.

export type PasswordFieldConfigProps<T extends FieldValues = FieldValues> =
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
