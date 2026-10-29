import ItemTugas from './ItemTugas';

export default function DaftarTugas({ daftar, onToggle, onHapus }) {
  if (daftar.length === 0) {
    return <p className="kosong">Belum ada tugas di daftar ini.</p>;
  }
  return (
    <ul className="daftar">
      {daftar.map((t) => (
        <ItemTugas key={t.id} tugas={t} onToggle={onToggle} onHapus={onHapus} />
      ))}
    </ul>
  );
}
