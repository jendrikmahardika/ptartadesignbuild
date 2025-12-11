'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Award, Users, Wrench, ChevronRight, Menu, X, Shield, FileText } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="PT ARTA DESIGN BUILD" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  PT ARTA DESIGN BUILD
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Privacy
              </a>
              <a href="/terms" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Terms
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <img src="/logo.png" alt="PT ARTA DESIGN BUILD" className="w-20 h-20 mx-auto rounded-lg" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                PT ARTA DESIGN BUILD
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Konstruksi Gedung Tempat Hiburan dan Olahraga Profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Perusahaan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Spesialis Konstruksi Gedung Tempat Hiburan dan Olahraga
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-semibold text-orange-600">PT ARTA DESIGN BUILD</span> adalah perusahaan konstruksi 
                terkemuka yang berfokus pada pembangunan gedung-gedung tempat hiburan dan olahraga. 
                Dengan pengalaman bertahun-tahun, kami telah mewujudkan berbagai proyek landmark 
                yang menjadi ikon di berbagai kota.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kami menggabungkan desain inovatif, teknologi konstruksi terkini, dan standar keselamatan 
                tertinggi untuk menghasilkan bangunan yang tidak hanya fungsional tetapi juga estetis 
                dan berkelanjutan.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <Award className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Berkualitas Tinggi</h4>
                <p className="text-sm text-gray-600">Standar kualitas internasional dalam setiap proyek</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Tim Profesional</h4>
                <p className="text-sm text-gray-600">Ahli konstruksi berpengalaman dan bersertifikat</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <Wrench className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Teknologi Modern</h4>
                <p className="text-sm text-gray-600">Menggunakan teknologi konstruksi terkini</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <Building2 className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Desain Inovatif</h4>
                <p className="text-sm text-gray-600">Solusi arsitektur yang kreatif dan fungsional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Stadion & Arena Olahraga</h3>
              <p className="text-gray-600 mb-4">
                Desain dan konstruksi stadion modern dengan kapasitas besar, fasilitas lengkap, 
                dan standar internasional untuk berbagai cabang olahraga.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  Stadion Sepak Bola
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  Arena Indoor Sports
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  Kompleks Olahraga
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pusat Hiburan</h3>
              <p className="text-gray-600 mb-4">
                Pembangunan pusat hiburan modern dengan desain yang menarik, akustik optimal, 
                dan fasilitas pendukung lengkap untuk pengalaman terbaik.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  Convention Center
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  Teater & Auditorium
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  Mall & Entertainment Hub
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Konsultasi & Desain</h3>
              <p className="text-gray-600 mb-4">
                Layanan konsultasi komprehensif dari perencanaan hingga pelaksanaan, 
                dengan fokus pada efisiensi biaya dan kualitas terbaik.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  Feasibility Study
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  Master Planning
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  Project Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/logo.png" alt="PT ARTA DESIGN BUILD" className="w-8 h-8 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      <span className="text-orange-600">PT ARTA DESIGN BUILD</span>
                    </h4>
                    <p className="text-gray-600">Spesialis Konstruksi Gedung Tempat Hiburan dan Olahraga</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Ikan Wijinongko Blok 1 Nomor 09 RT. 002 RW. 007, 
                      Kel.Tukangkayu, Kec. Banyuwangi, Kab.Banyuwangi, Prov. JawaTimur
                    </p>
                    <p className="text-gray-600">Kode Pos: 68417</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                    <p className="text-gray-600">085353887288</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@artadesignbuild.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT ARTA DESIGN BUILD" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold">
                  PT ARTA DESIGN BUILD
                </span>
              </div>
              <p className="text-gray-400">
                Spesialis konstruksi gedung tempat hiburan dan olahraga terkemuka di Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Stadion & Arena Olahraga</li>
                <li>Pusat Hiburan</li>
                <li>Konsultasi & Desain</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  085353887288
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@artadesignbuild.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Banyuwangi, Jawa Timur
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 <span className="text-orange-500 font-semibold">PT ARTA DESIGN BUILD</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}