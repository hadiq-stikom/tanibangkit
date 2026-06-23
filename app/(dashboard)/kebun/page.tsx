import { ambilDaftarTanaman, ambilDetailKomoditas } from '@/features/kebun/actions'
import PemilihKomoditas from '@/features/kebun/components/PemilihKomoditas'

interface PageProps {
  searchParams: Promise<{ id?: string }>
}

export default async function HalamanKebun({ searchParams }: PageProps) {
  // 1. Membaca parameter ID tanaman yang dikirim dari URL (?id=...)
  const { id } = await searchParams
  
  // 2. Mengambil daftar ringkas tanaman dari database untuk isi menu Dropdown
  const daftarTanaman = await ambilDaftarTanaman()
  
  // 3. Jika petani sudah memilih komoditas, tarik seluruh detail panduannya dari database
  const detailData = id ? await ambilDetailKomoditas(Number(id)) : null

  return (
    <div className="p-8 max-w-6xl mx-auto bg-slate-50 min-h-screen text-slate-800">
      {/* Bagian Kepala Halaman */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Budidaya</h1>
        <p className="text-slate-500 text-sm mt-1">
          Verifikasi koneksi realtime & validasi data panduan budidaya teruji TANI BANGKIT.
        </p>
      </header>

      {/* Komponen Dropdown Interaktif (Sisi Klien) */}
      <PemilihKomoditas daftar={daftarTanaman} />

      {/* KEADAAN 1: JIKA PETANI BELUM MEMILIH KOMODITAS */}
      {!detailData && (
        <div className="bg-emerald-50 border border-dashed border-emerald-200 p-8 rounded-xl text-center text-emerald-800">
          <p className="font-medium">⚡ Koneksi Supabase Berhasil Terhubung!</p>
          <p className="text-sm opacity-80 mt-1">
            Silakan pilih salah satu komoditas di atas untuk menguji tarikan data SOP persiapan lahan dan jadwal perawatannya.
          </p>
        </div>
      )}

      {/* KEADAAN 2: JIKA KONEKSI SUKSES DAN DATA BERHASIL DITARIK */}
      {detailData && (
        <div className="space-y-6">
          
          {/* KARTU 1: SPESIFIKASI OLAH TANAH & LAHAN */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
              🛠️ SOP Pengolahan Tanah & Spesifikasi Lahan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Komoditas / Kategori</p>
                <p className="font-semibold text-slate-800">
                  {detailData.lahan.tanaman.nama} ({detailData.lahan.tanaman.kategori})
                </p>
              </div>
              <div>
                <p className="text-slate-400">Target pH Ideal</p>
                <p className="font-semibold text-slate-800">
                  {detailData.lahan.tanaman.ph_minimal} - {detailData.lahan.tanaman.ph_maksimal}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Kedalaman Pembajakan</p>
                <p className="font-semibold text-slate-800">
                  {detailData.lahan.kedalaman_bajak_cm || '-'}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Jarak Tanam Ideal</p>
                <p className="font-semibold text-emerald-700">
                  {detailData.lahan.jarak_tanam_ideal || '-'}
                </p>
              </div>
              
              {/* Render Otomatis Khusus Data Guludan (Hortikultura & Jagung) */}
              {detailData.lahan.lebar_guludan_cm && (
                <>
                  <div>
                    <p className="text-slate-400">Dimensi Guludan (Lebar / Tinggi / Parit)</p>
                    <p className="font-semibold text-slate-800">
                      {detailData.lahan.lebar_guludan_cm} cm / {detailData.lahan.tinggi_guludan_cm} cm / {detailData.lahan.jarak_antar_guludan_cm} cm
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Penggunaan Mulsa Plastik</p>
                    <p className="font-semibold text-slate-800">
                      {detailData.lahan.menggunakan_mulsa ? 'Ya (Hitam Perak)' : 'Tidak'}
                    </p>
                  </div>
                </>
              )}

              {/* Render Otomatis Khusus Data Sawah (Padi Sawah) */}
              {detailData.lahan.ukuran_petakan_sawah && (
                <>
                  <div>
                    <p className="text-slate-400">Ukuran Struktur Petakan Sawah</p>
                    <p className="font-semibold text-slate-800">
                      {detailData.lahan.ukuran_petakan_sawah}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Dimensi Pematang Sawah (Tinggi)</p>
                    <p className="font-semibold text-slate-800">
                      {detailData.lahan.tinggi_pematang_cm} cm
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Detail Deskripsi Pupuk & Semprot Dasar */}
            <div className="mt-4 pt-4 border-t border-slate-50 text-sm">
              <p className="text-slate-400 font-medium">🌿 Formula Pupuk Dasar Per Hektar:</p>
              <p className="text-slate-700 mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {detailData.lahan.pupuk_dasar}
              </p>
            </div>
            <div className="mt-3 text-sm">
              <p className="text-slate-400 font-medium">🧪 Formula Semprot Tanah (Sebelum Tanam):</p>
              <p className="text-slate-700 mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {detailData.lahan.semprot_tanah_sebelum_tanam}
              </p>
            </div>
          </div>

          {/* KARTU 2: LINIMASA JADWAL PERAWATAN HARIAN (HST) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              📅 Linimasa Perawatan & Pemupukan Harian (SOP Hari HST)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-500">
                    <th className="p-3 font-semibold">Umur (HST)</th>
                    <th className="p-3 font-semibold">Metode</th>
                    <th className="p-3 font-semibold">Nutrisi & Pupuk</th>
                    <th className="p-3 font-semibold">Instruksi Dosis</th>
                    <th className="p-3 font-semibold">Catatan Lapangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {detailData.jadwal.map((j: any) => (
                    <tr key={j.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3">
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-md text-xs">
                          {j.hari_hst} HST
                        </span>
                      </td>
                      <td className="p-3 font-medium text-slate-700">{j.jenis_metode}</td>
                      <td className="p-3 text-slate-900 font-semibold">{j.nutrisi_pupuk}</td>
                      <td className="p-3 text-slate-600 font-medium">{j.instruksi_dosis}</td>
                      <td className="p-3 text-slate-500 text-xs italic">{j.catatan_tambahan || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
