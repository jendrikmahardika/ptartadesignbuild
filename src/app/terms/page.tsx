'use client';

import { useState } from 'react';
import { ArrowLeft, FileText, Building2, Shield, AlertTriangle, Clock, Users, Home } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/logo.png" alt="PT ARTA DESIGN BUILD" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  PT ARTA DESIGN BUILD
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Beranda
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Privacy
              </Link>
              <Link href="/terms" className="text-orange-600 font-semibold flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Terms
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  <span className="bg-gray-700 h-0.5 w-6 mb-1.5"></span>
                  <span className="bg-gray-700 h-0.5 w-6 mb-1.5"></span>
                  <span className="bg-gray-700 h-0.5 w-6"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-orange-600 font-semibold">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-white hover:text-orange-200 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
          </div>
          <p className="text-orange-100 text-lg">
            Syarat dan Ketentuan Layanan <span className="font-semibold">PT ARTA DESIGN BUILD</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Selamat datang di <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span>. 
              Syarat dan Ketentuan ini mengatur penggunaan layanan konstruksi gedung tempat hiburan dan olahraga 
              yang kami sediakan. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
            </p>
            <p className="text-gray-600">
              Harap baca dengan seksama sebelum menggunakan layanan konstruksi kami.
            </p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Layanan Konstruksi</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span> menyediakan layanan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Konstruksi Stadion & Arena Olahraga:</strong> Pembangunan stadion modern dengan standar internasional</li>
                <li><strong>Pusat Hiburan:</strong> Konstruksi convention center, teater, dan fasilitas hiburan lainnya</li>
                <li><strong>Konsultasi Desain:</strong> Layanan perencanaan dan desain arsitektur</li>
                <li><strong>Project Management:</strong> Manajemen proyek konstruksi dari awal hingga selesai</li>
                <li><strong>Renovasi & Maintenance:</strong> Jasa renovasi dan perawatan gedung</li>
              </ul>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Kewajiban Klien</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Sebagai klien, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Memberikan informasi yang akurat dan lengkap mengenai kebutuhan proyek</li>
                <li>Menyediakan dokumen perizinan yang diperlukan sesuai peraturan yang berlaku</li>
                <li>Melakukan pembayaran sesuai dengan jadwal dan kesepakatan kontrak</li>
                <li>Memberikan akses yang diperlukan untuk pelaksanaan proyek</li>
                <li>Berkomunikasi secara transparan mengenai perubahan atau kebutuhan tambahan</li>
                <li>Mematuhi syarat dan ketentuan yang telah disepakati dalam kontrak</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Syarat Pembayaran</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Ketentuan pembayaran untuk layanan konstruksi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Uang Muka (DP):</strong> Minimal 30% dari total nilai kontrak</li>
                <li><strong>Pembayaran Tahapan:</strong> Sesuai dengan milestone yang telah disepakati</li>
                <li><strong>Pelunasan:</strong> Sebelum serah terima proyek</li>
                <li><strong>Metode Pembayaran:</strong> Transfer bank atau sesuai kesepakatan</li>
                <li><strong>Keterlambatan Pembayaran:</strong> Dikenakan denda sesuai ketentuan kontrak</li>
              </ul>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Timeline Proyek</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Estimasi waktu pelaksanaan proyek:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Stadion Kecil:</strong> 12-18 bulan</li>
                <li><strong>Stadion Sedang:</strong> 18-24 bulan</li>
                <li><strong>Stadion Besar:</strong> 24-36 bulan</li>
                <li><strong>Convention Center:</strong> 18-30 bulan</li>
                <li><strong>Renovasi:</strong> 6-12 bulan (tergantung skala)</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                *Timeline dapat berubah tergantung pada kompleksitas proyek, cuaca, dan faktor eksternal lainnya
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Garansi & Jaminan</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span> memberikan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Garansi Struktur:</strong> 10 tahun untuk struktur bangunan utama</li>
                <li><strong>Garansi Kebocoran:</strong> 5 tahun untuk atap dan waterproofing</li>
                <li><strong>Garansi Material:</strong> Sesuai dengan ketentuan produsen</li>
                <li><strong>Layanan Purnajual:</strong> 1 tahun untuk maintenance dan perbaikan kecil</li>
                <li><strong>Asuransi Proyek:</strong> Selama masa konstruksi berlangsung</li>
              </ul>
            </div>
          </div>

          {/* Limitations */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Batasan Tanggung Jawab</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keterlambatan akibat force majeure (bencana alam, huru hara, dll)</li>
                <li>Kerusakan akibat penggunaan yang tidak sesuai dengan fungsinya</li>
                <li>Biaya operasional setelah serah terima proyek</li>
                <li>Perubahan peraturan pemerintah yang mempengaruhi proyek</li>
                <li>Kelalaian dari pihak ketiga yang bukan mitra kami</li>
              </ul>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Penyelesaian Sengketa</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Negosiasi:</strong> Musyawarah untuk mencapai kesepakatan bersama</li>
                <li><strong>Mediasi:</strong> Melalui mediator independen jika diperlukan</li>
                <li><strong>Arbitrase:</strong> Sesuai dengan aturan arbitrase Indonesia</li>
                <li><strong>Pengadilan:</strong> Pengadilan Negeri Banyuwangi sebagai yurisdiksi terakhir</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 mb-4">
              Untuk pertanyaan lebih lanjut mengenai Syarat dan Ketentuan ini, silakan hubungi:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@artadesignbuild.com</p>
              <p><strong>Telepon:</strong> 085353887288</p>
              <p><strong>Alamat:</strong> Jalan Ikan Wijinongko Blok 1 Nomor 09 RT. 002 RW. 007, Kel.Tukangkayu, Kec. Banyuwangi, Kab.Banyuwangi, Prov. JawaTimur 68417</p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024</p>
            <p className="mt-2">&copy; 2024 <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}