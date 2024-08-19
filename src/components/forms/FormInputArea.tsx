import { UseFormReturn } from 'react-hook-form'
import clsx from 'clsx'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form'
import { Textarea } from '@/components/forms/TextArea'

export const FormInputTextArea = ({
  name,
  placeholder,
  headerLabel,
  isDisabled,
  useFormReturn,
  className,
  isRow,
}: {
  name: string
  placeholder?: string
  headerLabel?: string
  isDisabled?: boolean
  useFormReturn: UseFormReturn
  className?: string
  isRow?: boolean
}) => {
  return (
    <FormField
      name={name}
      control={useFormReturn.control}
      render={({ field }) => {
        return (
          <FormItem
            className={`flex w-full ${isRow ? 'flex-row gap-32 phones:flex-col' : 'flex-col gap-12'} ${className}`}
          >
            {headerLabel && (
              <FormLabel
                className={clsx('font-sans', { 'w-1/3 phones:w-full': isRow })}
              >
                {headerLabel}
              </FormLabel>
            )}
            <FormControl>
              <Textarea
                disabled={isDisabled}
                className={clsx('bg-white', { 'w-2/3 phones:w-full': isRow })}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
