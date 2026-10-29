import { useState, useEffect } from 'react';
import Header from './components/Header';
import FormTugas from './components/FormTugas';
import DaftarTugas from './components/DaftarTugas';

const DATA_AWAL = [
  { id: 1, judul: 'Kerjakan Tugas Mandiri PAW', selesai: false },
  { id: 2, judul: 'Baca materi React Hooks', selesai: false },
  { id: 3, judul: 'Kumpulkan makalah PKn', selesai: true },
];

export default function App() {
  // State 1: daftar tugas, dibaca dari localStorage saat pertama dimuat
  const [tugas, setTugas] = useState(() => {
    try {
      const simpanan = localStorage.getItem('tugas-kuliah');
      return simpanan ? JSON.parse(simpanan) : DATA_AWAL;
    } catch {
      return DATA_AWAL;
    }
  });
  // State 2: filter tampilan ("semua" | "aktif" | "selesai")
  const [filter, setFilter] = useState('semua');

  const sisa = tugas.filter((t) => !t.selesai).length;

  // useEffect 1: simpan daftar tugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('tugas-kuliah', JSON.stringify(tugas));
  }, [tugas]);

  // useEffect 2: perbarui judul tab browser sesuai jumlah tugas tersisa
  useEffect(() => {
    document.title = `(${sisa}) Catatan Tugas Kuliah`;
  }, [sisa]);

  const tambah = (judul) =>
    setTugas((prev) => [...prev, { id: Date.now(), judul, selesai: false }]);
  const toggle = (id) =>
    setTugas((prev) => prev.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)));
  const hapus = (id) => setTugas((prev) => prev.filter((t) => t.id !== id));

  const tampil = tugas.filter((t) =>
    filter === 'semua' ? true : filter === 'aktif' ? !t.selesai : t.selesai
  );

  return (
    <main className="app">
      <Header sisa={sisa} total={tugas.length} />
      <FormTugas onTambah={tambah} />
      <div className="filter">
        {['semua', 'aktif', 'selesai'].map((f) => (
          <button key={f} className={filter === f ? 'aktif' : ''} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <DaftarTugas daftar={tampil} onToggle={toggle} onHapus={hapus} />
    </main>
  );
}
