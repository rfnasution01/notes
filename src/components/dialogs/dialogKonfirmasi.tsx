import { Dispatch, ReactNode, SetStateAction } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/dialog'
import { X } from 'lucide-react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function DialogKonfirmasi({
  isOpen,
  setIsOpen,
  buttonContent,
  headerTitle,
  textContent,
  isAuto,
  width,
  isMobile,
  classNameHeader,
  position = 'middle',
  className,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  buttonContent?: ReactNode
  headerTitle?: ReactNode
  textContent?: ReactNode
  isAuto?: boolean
  width?: string
  isMobile?: boolean
  classNameHeader?: string
  position?: 'bottom' | 'left' | 'right' | 'top' | 'middle'
  className?: string
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`scrollbar overflow-y-autotext-[2rem] flex flex-col border bg-white phones:text-[2.4rem] ${className}`}
        position={position}
        style={{
          width: isAuto ? 'auto' : isMobile ? '90%' : width ? width : '30%',
          height: position === 'left' || position === 'right' ? '100%' : 'auto',
          maxHeight:
            position === 'left' || position === 'right' ? '100vh' : '80vh',
        }}
      >
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto p-32">
          {/* --- Header --- */}
          <DialogHeader>
            <DialogTitle
              className={`text-[2.2rem] font-bold phones:text-[2.6rem] ${classNameHeader ?? 'text-center'}`}
            >
              {headerTitle}
            </DialogTitle>
            <DialogPrimitive.Close className="focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-32 top-32 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
              <X size={16} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          <div className="scrollbar flex h-full w-full flex-1 overflow-y-auto text-[2rem] phones:text-[2.4rem]">
            {textContent}
          </div>
          {buttonContent}
        </div>
      </DialogContent>
    </Dialog>
  )
}
