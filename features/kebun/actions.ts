'use server'

import { createClient } from '@/lib/supabase/server'

// Mengambil seluruh daftar nama tanaman untuk Dropdown
export async function ambilDaftarTanaman() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tanaman')
    .select('id, nama, kategori')
    .order('nama', { ascending: true })

  if (error) {
    console.error('Gagal mengambil daftar tanaman:', error)
    return []
  }
  return data
}

// Mengambil detail persiapan lahan & jadwal harian berdasarkan ID Tanaman
export async function ambilDetailKomoditas(tanamanId: number) {
  const supabase = await createClient()

  // 1. Ambil info tanaman & persiapan lahan (JOIN)
  const { data: lahan, error: errLahan } = await supabase
    .from('persiapan_lahan')
    .select(`
      *,
      tanaman:tanaman_id (nama, kategori, ph_minimal, ph_maksimal, umur_panen_awal, umur_panen_akhir)
    `)
    .eq('tanaman_id', tanamanId)
    .single()

  // 2. Ambil jadwal harian (HST)
  const { data: jadwal, error: errJadwal } = await supabase
    .from('jadwal_perawatan')
    .select('*')
    .eq('tanaman_id', tanamanId)
    .order('hari_hst', { ascending: true })

  if (errLahan || errJadwal) {
    console.error('Gagal mengambil detail:', { errLahan, errJadwal })
    return null
  }

  return { lahan, jadwal }
}
