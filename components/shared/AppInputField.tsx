import { forwardRef, Ref } from 'react';
import { InputFieldConfigProps } from '@/types/inputField.types';
import { FieldValues, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { mergeRefs } from './utils/mergeRef.utils';
import toId from './utils/toId.utils';

const InputFieldComp = <T extends FieldValues = FieldValues>(
  props: InputFieldConfigProps<T>,
  ref: Ref<HTMLInputElement>,
) => {
  const { control } = useFormContext<T>();

  const {
    type = 'text',
    name,
    label,
    className,
    placeholder,
    description,
    required = false,
    disabled = false,
    ...restProps
  } = props;

  // Validation for required props
  if (!name || !control) {
    console.error('InputField: name and control are required props');
    return null;
  }

  if ('defaultValue' in props) {
    console.warn(
      '[InputField]: `defaultValue` is ignored. Please use useForm({ defaultValues }) instead.',
    );
  }

  const {
    itemClass,
    labelClass,
    inputClass,
    descriptionClass,
    controlClass,
    messageClass,
  } = className ?? {};

  const safeId = toId(name);
  const errorId = `${safeId}-error`;
  const descriptionId = description ? `${name}-description` : undefined;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { ref: fieldRef, ...fieldProps } = field;
        const ariaDescribedBy = [
          descriptionId,
          fieldState.error ? errorId : undefined,
        ]
          .filter(Boolean)
          .join(' ');
        const mergedRef = mergeRefs(fieldRef, ref);

        return (
          <FormItem className={cn('space-y-0', itemClass)}>
            <FormLabel
              className={cn(
                'flex items-center justify-start text-sm font-medium',
                label ? '' : 'hidden',
                labelClass,
              )}
              htmlFor={safeId}
            >
              <span>{label ? label : name}</span>
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
            <FormControl className={cn('', controlClass)}>
              <Input
                ref={mergedRef}
                id={safeId}
                className={cn('', inputClass)}
                placeholder={placeholder || name}
                type={type}
                disabled={disabled}
                required={required}
                aria-describedby={ariaDescribedBy}
                aria-invalid={fieldState.error ? 'true' : 'false'}
                aria-required={required}
                {...fieldProps}
                {...restProps}
                onChange={(e) => {
                  fieldProps.onChange(e);
                  restProps?.onChange?.(e);
                }}
                onBlur={(e) => {
                  fieldProps.onBlur();
                  restProps?.onBlur?.(e);
                }}
                value={restProps.value ?? fieldProps.value}
              />
            </FormControl>
            {description && (
              <FormDescription
                id={descriptionId}
                className={cn('text-sm text-gray-600', descriptionClass)}
              >
                {description}
              </FormDescription>
            )}
            <FormMessage className={cn('', messageClass)} id={errorId} />
          </FormItem>
        );
      }}
    />
  );
};

// Create the forwardRef component with proper typing
const InputField = forwardRef(InputFieldComp) as <
  T extends FieldValues = FieldValues,
>(
  props: InputFieldConfigProps<T> & { ref?: Ref<HTMLInputElement> },
) => ReturnType<typeof InputFieldComp>;

export default InputField;
