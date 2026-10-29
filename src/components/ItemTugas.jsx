export default function ItemTugas({ tugas, onToggle, onHapus }) {
  return (
    <li className={tugas.selesai ? 'item selesai' : 'item'}>
      <label>
        <input type="checkbox" checked={tugas.selesai} onChange={() => onToggle(tugas.id)} />
        <span>{tugas.judul}</span>
      </label>
      <button className="hapus" onClick={() => onHapus(tugas.id)} aria-label={`Hapus ${tugas.judul}`}>
        Hapus
      </button>
    </li>
  );
}
