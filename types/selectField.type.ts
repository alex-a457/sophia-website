import { FieldPath, FieldValues } from 'react-hook-form';

// Enhanced option types
export interface SelectSimpleOption {
  _id?: string;
  id?: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectSimpleOption[];
}

export interface SelectSeparatorOption {
  type: 'separator';
}

export type SelectOptionItem =
  | SelectSimpleOption
  | SelectOptionGroup
  | SelectSeparatorOption;

// type definitions
interface FieldConfigProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  options: SelectOptionItem[];
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  showScrollButtons?: boolean;
  /** Helpful hints or requirements - appears between label and input */
  helperText?: string;
  /** Loading state for async options */
  isLoading?: boolean;

  /** Custom loading message */
  loadingText?: string;

  /** Message when no options available */
  emptyText?: string;
  className?: {
    itemClass?: string;
    selectClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    controlClass?: string;
    messageClass?: string;
    helperClass?: string;
  };
}

// NOTE: If user passes `value`, `onChange`, or `onBlur` via props,
// it will override React Hook Form's defaults.
// This allows controlled usage but removes RHF sync.

export type SelectFieldConfigProps<T extends FieldValues = FieldValues> =
  FieldConfigProps<T> & /*     Omit<
      SelectHTMLAttributes<HTMLSelectElement>,
      | "ref"
      | "className"
      | "name"
      | "id"
      | "type"
      | "defaultValue"
      | "onChange"
      | "onBlur"
    > & */ {
    /** Override RHF's controlled value */
    value?: string;

    /** Called in addition to RHF's onChange */
    onValueChange?: (value: string) => void;

    /** Called in addition to RHF's onBlur */
    onOpenChange?: (open: boolean) => void;

    // Only include the specific HTML attributes you actually need
    form?: string;
    autoComplete?: string;
    tabIndex?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'data-testid'?: string;
    'data-*'?: string;
    style?: React.CSSProperties;

    // Allow any data-* attributes
    [key: `data-${string}`]: string | number | boolean | undefined;
  };
