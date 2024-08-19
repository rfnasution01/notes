import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

import { FormField, FormItem, FormLabel, FormMessage } from '@/components/form'
import { Input } from '@/components/forms/Input'

export function FormInputFileAppend({
  name,
  form,
  disabled,
  className,
  isRow,
  label,
  setFile,
  fileUrl,
  setFileUrl,
  image,
}: {
  name: string
  form: UseFormReturn
  className?: string
  isRow?: boolean
  label?: string
  disabled?: boolean
  setFile: Dispatch<SetStateAction<File>>
  setFileUrl: Dispatch<SetStateAction<string>>
  fileUrl?: string
  image?: string
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    const allowedTypesImage = ['image/jpeg', 'image/png']

    const maxSize = 5 * 1024 * 1024 // 5MB

    if (
      selectedFile &&
      allowedTypesImage.includes(selectedFile.type) &&
      selectedFile.size <= maxSize
    ) {
      setFile(selectedFile)
      setFileUrl(URL.createObjectURL(selectedFile))
    } else {
      setFile(null)
      setFileUrl(null)
      if (!allowedTypesImage.includes(selectedFile?.type || '')) {
        toast.error(
          `Type file tidak valid. Upload file dengan type ${allowedTypesImage}`,
        )
      } else if (selectedFile?.size > maxSize) {
        toast.error(
          `Ukuran file terlalu besar. Upload file dengan ukuran <5 MB`,
        )
      }
    }
  }

  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={clsx(
            `text-primary-100 flex w-full flex-col gap-32 text-[2rem] ${className}`,
          )}
        >
          <div
            className={clsx(
              `text-primary-100 flex w-full text-[2rem] ${className}`,
              {
                'flex-row items-center gap-32 phones:flex-col phones:items-start phones:gap-12':
                  isRow,
                'flex-col gap-12': !isRow,
              },
            )}
          >
            {label && (
              <FormLabel
                className={clsx('font-roboto', {
                  'w-1/3 phones:w-full': isRow,
                })}
              >
                {label}
              </FormLabel>
            )}

            <Input
              type="file"
              className={clsx('bg-white', { 'w-2/3 phones:w-full': isRow })}
              disabled={disabled}
              onChange={(e) => {
                field.onChange(e)
                handleFileChange(e)
              }}
            />
          </div>

          {fileUrl ? (
            <div className="w-1/3">
              <img
                src={fileUrl}
                alt="preview"
                className="w-1/3 rounded-3xl phones:w-full"
                loading="lazy"
              />
            </div>
          ) : image ? (
            <Link to={image} target="_blank">
              <img
                src={image}
                alt="preview"
                className="w-1/3 rounded-3xl phones:w-full"
                loading="lazy"
              />
            </Link>
          ) : (
            ''
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
