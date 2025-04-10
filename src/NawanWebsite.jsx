// Auto-generated React component for Nawan Website
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

export default function NawanWebsite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6 text-gray-800">
      <section className="text-center mb-10">
        <motion.h1 
          initial={ opacity: 0, y: -20 } 
          animate={ opacity: 1, y: 0 } 
          transition={ duration: 0.8 }
          className="text-4xl font-bold mb-2 text-indigo-700">
          Nawan — EduLeader & Digital Creator
        </motion.h1>
        <p className="text-lg">Aktivis muda | Kreator edukatif | Penggerak sosial</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="rounded-2xl shadow-xl border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Tentang Saya</h2>
            <img src="/images/profile.jpg" alt="Tentang Saya" className="rounded-xl mb-2"/>
            <p>Mahasiswa MPI UIN Saizu asal Banyumas. Aktif di organisasi, pengabdian sosial, dan kreator edukatif di TikTok & YouTube.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Visi & Nilai</h2>
            <img src="/images/visi.jpg" alt="Visi dan Nilai" className="rounded-xl mb-2"/>
            <p>Kolaboratif, inspiratif, dan solutif. Membangun generasi muda yang positif, aktif, dan berdampak melalui karya & aksi nyata.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="rounded-2xl shadow-xl border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Pengalaman & Prestasi</h2>
            <img src="/images/pengalaman.jpg" alt="Pengalaman" className="rounded-xl mb-2"/>
            <ul className="list-disc list-inside space-y-2">
              <li>Ketua Umum ADIKSI UIN Saizu (2023)</li>
              <li>Ketua PENA ADIKSI Nasional</li>
              <li>Ketua Cabang PMBM & KIP-Kuliah Banyumas Raya</li>
              <li>Juara Proker Terbaik se-Jateng & DIY (2022)</li>
              <li>Duta Prodi MPI (2022)</li>
              <li>Peer Counselor UPTP Karir (2024)</li>
              <li>PIC Finishing Project Sosial (2024–2025)</li>
              <li>Pemateri Strategi Masuk PT (2025)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Karya Digital</h2>
            <img src="/images/karya.jpg" alt="Karya Digital" className="rounded-xl mb-2"/>
            <ul className="list-disc list-inside space-y-2">
              <li>TikTok: @positifnawan | @kasihsolusiaja | @rekomendasinawan</li>
              <li>YouTube: @youtuberidn</li>
              <li>Konten edukasi, motivasi, & affiliate marketing</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-medium text-gray-700 mb-2">Hubungi Saya</h2>
        <div className="flex justify-center gap-4 text-2xl text-indigo-600">
          <a href="https://tiktok.com/@positifnawan" target="_blank"><FaTiktok /></a>
          <a href="https://youtube.com/@youtuberidn" target="_blank"><FaYoutube /></a>
          <a href="https://instagram.com/positifnawan" target="_blank"><FaInstagram /></a>
        </div>
        <p className="mt-4 text-sm">"Jangan lelah jadi cahaya di tengah gelapnya harapan."</p>
      </section>
    </main>
  );
}
