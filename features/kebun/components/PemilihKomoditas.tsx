'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

interface TanamanSingkat {
  id: number
  nama: string
  kategori: string
}

export default function PemilihKomoditas({ daftar }: { daftar: TanamanSingkat[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  // Mengambil nilai ID komoditas yang sedang aktif di URL saat ini
  const idSekarang = searchParams.get('id') || ''

  const handlePerubahan = (id: string) => {
    startTransition(() => {
      if (id) {
        router.push(`/kebun?id=${id}`)
      } else {
        router.push('/kebun')
      }
    })
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="w-full max-w-md">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            🟢 Pilih Komoditas TANI BANGKIT Untuk Cek Koneksi & SOP:
          </label>
          <select
            value={idSekarang}
            onChange={(e) => handlePerubahan(e.target.value)}
            disabled={isPending}
            className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60 transition-opacity"
          >
            <option value="">-- Silakan Pilih Komoditas --</option>
            {daftar.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nama} ({t.kategori})
              </option>
            ))}
          </select>
        </div>

        {/* Indikator Loading Status saat Next.js melakukan Server-Side Fetching */}
        {isPending && (
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Memuat Data SOP Panduan...
          </div>
        )}
      </div>
    </div>
  )
}
