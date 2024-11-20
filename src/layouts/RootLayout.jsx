import { cn } from '../utils/cn'

export function RootLayout({ children, className }) {
  return (
    <div className={cn('min-h-screen bg-gray-50', className)}>
      <main className="container-custom py-8">
        {children}
      </main>
    </div>
  )
}
