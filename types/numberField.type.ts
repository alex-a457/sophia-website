import { FieldValues } from 'react-hook-form';
import { InputFieldConfigProps } from './inputField.types';

interface NumberFieldConfig {
  allowDecimals?: boolean;
  allowNegative?: boolean;
  maxDecimals?: number;
  min?: number;
  max?: number;
}

export type NumberFieldProps<T extends FieldValues = FieldValues> = Omit<
  InputFieldConfigProps<T>,
  'type'
> &
  NumberFieldConfig;
