'use client';

import { useState } from 'react';
import { ArrowLeft, Shield, Lock, Database, Eye, UserCheck, AlertCircle, Home, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Link href="/privacy" className="text-orange-600 font-semibold flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1">
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
              <Link href="/privacy" className="block px-3 py-2 text-orange-600 font-semibold">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Terms & Conditions</Link>
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
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-orange-100 text-lg">
            Kebijakan Privasi <span className="font-semibold">PT ARTA DESIGN BUILD</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Di <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span>, kami sangat memprioritaskan privasi dan keamanan data Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
              saat menggunakan layanan konstruksi gedung tempat hiburan dan olahraga kami.
            </p>
            <p className="text-gray-600">
              Kebijakan ini berlaku untuk semua pengguna website, klien, mitra bisnis, dan pihak ketiga yang berinteraksi dengan 
              <span className="font-semibold text-orange-600"> PT ARTA DESIGN BUILD</span>.
            </p>
          </div>

          {/* Data Collection */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Pengumpulan Data</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Kami mengumpulkan berbagai jenis informasi untuk menyediakan layanan konstruksi terbaik:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat perusahaan</li>
                <li><strong>Informasi Perusahaan:</strong> Nama perusahaan, alamat kantor, bidang usaha, kebutuhan proyek</li>
                <li><strong>Informasi Teknis:</strong> Spesifikasi proyek, kebutuhan desain, anggaran, timeline</li>
                <li><strong>Informasi Penggunaan:</strong> Data akses website, interaksi dengan layanan, preferensi komunikasi</li>
              </ul>
            </div>
          </div>

          {/* Data Usage */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Penggunaan Data</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Data yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menyediakan layanan konstruksi dan konsultasi yang Anda butuhkan</li>
                <li>Mengkomunikasikan informasi proyek dan penawaran layanan</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pelanggan</li>
                <li>Memproses permintaan dan transaksi bisnis</li>
                <li>Mengirimkan informasi penting terkait proyek konstruksi</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Perlindungan Data</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk personil yang berwenang</li>
                <li>System keamanan berlapis untuk mencegah akses tidak sah</li>
                <li>Backup data rutin dan recovery plan</li>
                <li>Audit keamanan berkala</li>
              </ul>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Hak Pengguna</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li>Menghapus data pribadi Anda sesuai dengan peraturan yang berlaku</li>
                <li>Menolak atau membatasi pemrosesan data tertentu</li>
                <li>Meminta portabilitas data ke layanan lain</li>
                <li>Menarik persetujuan untuk pemrosesan data</li>
              </ul>
            </div>
          </div>

          {/* Third Party Sharing */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Pembagian Data ke Pihak Ketiga</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Kami hanya akan membagikan data Anda kepada pihak ketiga dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk mitra konstruksi dan subkontraktor yang terlibat dalam proyek</li>
                <li>Kepada penyedia layanan esensial (payment gateway, hosting, dll)</li>
                <li>Sesuai dengan kewajiban hukum dan peraturan yang berlaku</li>
                <li>Untuk melindungi hak, keamanan, atau properti kami</li>
              </ul>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pembaruan Kebijakan</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam 
                praktik bisnis kami atau perubahan peraturan yang berlaku. Setiap perubahan akan diinformasikan 
                melalui website atau email kepada pengguna yang terdaftar.
              </p>
              <p>
                Versi terbaru Kebijakan Privasi selalu tersedia di website <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span>.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda 
              terkait data pribadi, silakan hubungi kami:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@artadesignbuild.com</p>
              <p><strong>Telepon:</strong> 085353887288</p>
              <p><strong>Alamat:</strong> Jalan Ikan Wijinongko Blok 1 Nomor 09 RT. 002 RW. 007, Kel.Tukangkayu, Kec. Banyuwangi, Kab.Banyuwangi, Prov. JawaTimur 68417</p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024</p>
            <p className="mt-2">&copy; 2024 <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}