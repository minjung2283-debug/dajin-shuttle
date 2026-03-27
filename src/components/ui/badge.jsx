import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'border border-border text-muted-foreground bg-transparent',
        blue: 'bg-blue-100 text-blue-700 border border-blue-200',
        green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
        amber: 'bg-amber-50 text-amber-700 border border-amber-200',
        red: 'bg-red-50 text-red-600 border border-red-200',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
