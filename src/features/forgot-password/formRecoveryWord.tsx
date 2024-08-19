import { Form } from '@/components/form'
import { FormInputText } from '@/components/forms'
import { Key } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

export function FormRecoveryWord({
  form,
  handleCheckRecoveryWord,
}: {
  form: UseFormReturn
  handleCheckRecoveryWord: () => void
}) {
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-32"
        onSubmit={form.handleSubmit(handleCheckRecoveryWord)}
      >
        <FormInputText
          name="word"
          form={form}
          placeholder="Recovery Word"
          type="text"
          prefix={<Key size={16} />}
          className="text-primary w-full"
        />
        <button
          type="submit"
          className="bg-primary rounded-2xl px-24 py-12 text-white hover:bg-opacity-80"
        >
          Submit
        </button>
      </form>
    </Form>
  )
}
