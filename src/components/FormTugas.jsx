import { useState } from 'react';

export default function FormTugas({ onTambah }) {
  const [teks, setTeks] = useState('');

  const kirim = (e) => {
    e.preventDefault();
    if (!teks.trim()) return;
    onTambah(teks.trim());
    setTeks('');
  };

  return (
    <form onSubmit={kirim} className="form">
      <input
        value={teks}
        onChange={(e) => setTeks(e.target.value)}
        placeholder="Tulis tugas baru"
        aria-label="Tugas baru"
      />
      <button type="submit">Tambah</button>
    </form>
  );
}
