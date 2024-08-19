/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Eye, Image, ImagePlus, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/form'
import { Input } from '@/components/forms/Input'

export function FormInputFile({
  form,
  isLoading,
  loadingFile,
  handleUploadFoto,
  label,
  name,
  isDisabled,
  idDokumen,
  defaultValue,
  setIdDokumen,
  namaFile,
  isShow,
  setIsShow,
  id,
}: {
  form: UseFormReturn | undefined | any
  setUrls: Dispatch<SetStateAction<string>>
  setIdDokumen: Dispatch<SetStateAction<string>>
  urls: string
  isLoading: boolean
  loadingFile: boolean
  name: string
  label?: string
  handleUploadFoto: (file: File) => Promise<void>
  isDisabled?: boolean
  idDokumen?: string
  defaultValue?: string
  namaFile?: string
  isShow?: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
  id: string
}) {
  console.log({ id })
  console.log({ idDokumen })

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-12">
          <FormControl>
            <div>
              <Input
                className="-z-[1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
                {...field}
                id={`berkas_${idDokumen}`}
                type="file"
                value={''}
                disabled={isLoading || loadingFile || isDisabled}
                placeholder="Lampiran"
                onClick={() => {
                  setIdDokumen(idDokumen)
                }}
                onChange={(e) => {
                  if (e.target.files[0].size > 5 * 1000000) {
                    return toast.error(`File terlalu besar. Maksimal 5 MB`, {
                      style: {
                        fontSize: '1.6rem',
                      },
                    })
                  } else {
                    if (e.target.files[0] != null) {
                      handleUploadFoto(e.target.files[0])
                    }
                  }
                }}
              />
              <div className="flex flex-col gap-32 phones:flex-col">
                {!defaultValue || (isShow && idDokumen === id) ? (
                  <label
                    className="flex flex-col gap-24 font-roboto"
                    htmlFor={`berkas_${idDokumen}`}
                  >
                    <p className="">{label ?? 'Berkas'}</p>
                    <div className="flex flex-col gap-12">
                      <div className="text-typo-icons flex flex-col items-center justify-center gap-32 border-2 border-dashed p-32 text-center font-sans hover:cursor-pointer disabled:cursor-not-allowed">
                        <span>
                          <ImagePlus size={32} />
                        </span>
                        <div className="flex flex-col gap-12">
                          <p className="text-[2.2rem]">
                            Drag and drop file here, or click to choose file
                          </p>
                          <p className="text-[1.8rem]">1 file(s) remaining</p>
                        </div>
                      </div>
                      <p className="font-sans">
                        Ekstensi berkas yang diperbolehkan adalah .jpg, .jpeg,
                        .png
                      </p>
                    </div>
                  </label>
                ) : (
                  <div className="flex items-center justify-between border p-24">
                    <div className="text-typo-icons flex items-center gap-12">
                      <Image size={16} />
                      <p className="font-sans">{namaFile}.png</p>
                    </div>
                    <div className="text-typo-icons flex items-center gap-12">
                      <Link
                        to={defaultValue}
                        className="hover:text-primary-500"
                      >
                        <Eye size={16} />
                      </Link>
                      <span
                        onClick={() => {
                          setIsShow(true)
                          setIdDokumen(idDokumen)
                        }}
                        className="hover:cursor-pointer hover:text-red-500"
                      >
                        <X size={16} />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
