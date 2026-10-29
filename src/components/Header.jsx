export default function Header({ sisa, total }) {
  return (
    <header>
      <h1>Catatan Tugas Kuliah</h1>
      <p>{sisa} dari {total} tugas belum selesai</p>
    </header>
  );
}
