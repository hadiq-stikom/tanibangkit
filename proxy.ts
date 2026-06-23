import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Konvensi Next.js terbaru: Mengekspor fungsi bernama 'proxy'
export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // Menginisialisasi Supabase Client di layer terdepan aplikasi (Proxy Gateway)
 const supabase = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, // Perbaikan di baris ini
  {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        )
      },
    },
  }
)


  // Memperbarui dan menyegarkan token sesi login petani sebelum halaman dimuat
  await supabase.auth.getUser()

  return supabaseResponse
}

// Konfigurasi Matcher tetap menggunakan objek config statis
export const config = {
  matcher: [
    // Menjalankan proxy pada seluruh rute kecuali aset statis dan media gambar
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
