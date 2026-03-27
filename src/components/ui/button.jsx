import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 font-sans',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-blue-700 shadow-sm',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-slate-200',
        outline: 'border border-input bg-white hover:bg-slate-50',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        amber: 'bg-amber-400 text-black hover:bg-amber-500 font-bold',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-6 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
