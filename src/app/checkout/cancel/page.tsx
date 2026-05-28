import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">😕</div>
      <h1 className="text-3xl font-bold text-white">Zahlung abgebrochen</h1>
      <p className="mt-4 text-gray-400">
        Kein Problem – du kannst es jederzeit erneut versuchen.
      </p>
      <Link href="/" className="mt-8 inline-block">
        <Button size="lg">Zu den Produkten</Button>
      </Link>
    </div>
  )
}
