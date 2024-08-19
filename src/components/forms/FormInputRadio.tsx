/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form'
import { ReactNode } from 'react'
import clsx from 'clsx'

import { FormField, FormItem, FormLabel, FormMessage } from '@/components/form'
import { Input } from '@/components/forms/Input'

export function FormInputRadio({
  form,
  label,
  name,
  className,
  isDisabled,
  isRow,
}: {
  form: UseFormReturn | undefined | any
  label?: string | ReactNode
  name: string
  className?: string
  isDisabled?: boolean
  isRow?: boolean
}) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`text-typo flex w-full ${isRow ? 'flex-row items-center gap-32 phones:flex-col phones:gap-12' : 'flex-col gap-12'} text-[2rem] ${className}`}
        >
          <FormLabel
            className={clsx('font-roboto', {
              'w-1/3 phones:w-full': isRow,
              'w-full': !isRow,
            })}
          >
            {label}
          </FormLabel>
          <div
            className={clsx('flex items-center gap-x-8', {
              'w-2/3 phones:w-full': isRow,
              'w-full': !isRow,
            })}
          >
            <label className="flex items-center gap-x-4">
              <Input
                type="radio"
                value="1"
                checked={field.value === '1'}
                onChange={() => field.onChange('1')}
                disabled={isDisabled}
              />
              Ya
            </label>
            <label className="flex items-center gap-x-4">
              <Input
                type="radio"
                value="0"
                checked={field.value === '0'}
                onChange={() => field.onChange('0')}
                disabled={isDisabled}
              />
              Tidak
            </label>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
