import { 
  Sprout, 
  CalendarDays, 
  Bug, 
  CheckCircle2, 
  ArrowRight, 
  Layers 
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 antialiased font-sans">
      
      {/* 1. NAVBAR / HEADER ATAS */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-600 rounded-lg text-white">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              TANI <span className="text-emerald-600">BANGKIT</span>
            </span>
          </div>
          <a 
            href="/kebun" 
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg transition-colors"
          >
            Buka Aplikasi ➔
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Berbasis Dokumen Panduan Teruji Lapangan
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Budidaya Pertanian Presisi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Berdasarkan Umur Tanaman
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Jangan berspekulasi dengan hasil panen Anda. Jalankan SOP pengelolaan lahan, kocor, semprot, dan proteksi hama harian yang telah terbukti sukses selama bertahun-tahun.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/kebun" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md shadow-emerald-600/10 flex items-center justify-center gap-2 group transition-all"
            >
              Mulai Kelola Lahan 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#fitur" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center"
            >
              Pelajari Sistem
            </a>
          </div>
        </div>
      </section>

      {/* 3. SECTION STATISTIK UTALITAS */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
          <div className="text-center md:border-r border-slate-800 p-2">
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">4+</p>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Komoditas Inti</p>
          </div>
          <div className="text-center md:border-r border-slate-800 p-2">
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Akurasi Data SOP</p>
          </div>
          <div className="text-center md:border-r border-slate-800 p-2">
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">Daily</p>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Timeline HST</p>
          </div>
          <div className="text-center p-2">
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">Zero</p>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Data Spekulatif</p>
          </div>
        </div>
      </section>
      {/* 4. MODUL FITUR UTAMA APLIKASI */}
      <section id="fitur" className="max-w-6xl mx-auto px-6 mb-24 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Arsitektur Modul Terintegrasi</h2>
          <p className="text-slate-500 text-sm mt-2">Tiga pilar utama pendampingan petani dari olah tanah sampai panen raya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fitur 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 hover:shadow-md transition-shadow">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl inline-block mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">1. Standardisasi Lahan</h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Panduan rigid kedalaman bajak, dimensi bedengan guludan, tinggi pematang sawah, dosis kapur dolomit dasar, hingga resep semprot tanah mikroba sebelum tanam.
            </p>
          </div>

          {/* Fitur 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 hover:shadow-md transition-shadow">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl inline-block mb-6">
              <CalendarDays className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">2. Linimasa Kalender HST</h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Sistem otomatisasi harian menghitung Hari Setelah Tanam (HST). Memberikan instruksi kocor, semprot daun, penyiangan gulma, pembumbunan, dan dosis pupuk cair per tangki.
            </p>
          </div>

          {/* Fitur 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 hover:shadow-md transition-shadow">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl inline-block mb-6">
              <Bug className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">3. Kamus Proteksi Hama</h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Katalog identifikasi digital gejala fisik penyakit dan serangan hama (seperti Thrips, Blast, Bulai) lengkap dengan formula bahan aktif insektisida/fungisida penanganannya.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SEKSI DAFTAR KOMODITAS YANG SIAP */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Komoditas yang Didukung</h2>
              <p className="text-slate-500 text-sm mt-1">Varietas hortikultura dan pangan yang datanya telah dikunci di database.</p>
            </div>
            <a href="/kebun" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
              Lihat seluruh detail database <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Cabai */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="px-2 py-1 bg-red-50 text-red-700 font-bold rounded text-xs uppercase tracking-wider">Hortikultura</span>
                <h4 className="text-lg font-bold text-slate-900 mt-3">🌶️ Cabai Merah</h4>
                <p className="text-slate-400 text-xs mt-1">SOP Mulsa Plastik Hitam Perak</p>
              </div>
              <span className="text-slate-500 text-xs mt-6 pt-3 border-t font-semibold">Siklus Perawatan: 1 - 63 HST</span>
            </div>

            {/* Tomat */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="px-2 py-1 bg-red-50 text-red-700 font-bold rounded text-xs uppercase tracking-wider">Hortikultura</span>
                <h4 className="text-lg font-bold text-slate-900 mt-3">🍅 Tomat Standar</h4>
                <p className="text-slate-400 text-xs mt-1">Sistem Ajir Vertikal & Pruning</p>
              </div>
              <span className="text-slate-500 text-xs mt-6 pt-3 border-t font-semibold">Siklus Perawatan: 1 - 63 HST</span>
            </div>

            {/* Padi */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="px-2 py-1 bg-amber-50 text-amber-700 font-bold rounded text-xs uppercase tracking-wider">Tanaman Pangan</span>
                <h4 className="text-lg font-bold text-slate-900 mt-3">🌾 Padi Sawah</h4>
                <p className="text-slate-400 text-xs mt-1">Metode Jajar Legowo 2:1</p>
              </div>
              <span className="text-slate-500 text-xs mt-6 pt-3 border-t font-semibold">Irigasi Berselang & Semprot</span>
            </div>

            {/* Jagung */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="px-2 py-1 bg-amber-50 text-amber-700 font-bold rounded text-xs uppercase tracking-wider">Tanaman Pangan</span>
                <h4 className="text-lg font-bold text-slate-900 mt-3">🌽 Jagung Standar</h4>
                <p className="text-slate-400 text-xs mt-1">Sistem Tanam Tugal Monokultur</p>
              </div>
              <span className="text-slate-500 text-xs mt-6 pt-3 border-t font-semibold">Fase Pengisian Biji: 70-90 HST</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="border-t border-slate-100 py-12 px-6 bg-white text-center text-slate-400 text-xs">
        <p>© 2026 TANI BANGKIT. Hak Cipta Dilindungi Undang-Undang.</p>
        <p className="mt-1">Dibuat menggunakan Next.js App Router, Supabase SSR Database, dan Cloudinary Storage.</p>
      </footer>

    </div>
  )
}
