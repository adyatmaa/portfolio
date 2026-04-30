export const project = [
  {
    id: "posyandu-info",
    name: "Monitoring Posyandu",
    timeline: "Apr 2026",
    desc: "Website monitoring Posyandu desa yang mengintegrasikan layanan Google Sheets untuk pengelolaan data riwayat imunisasi dan pertumbuhan",
    overview:
      "Website monitoring ini muncul untuk menjawab kebutuhan akan transparansi data kesehatan anak yang dapat diakses secara mandiri. Platform ini bertujuan untuk memutus ketergantungan orang tua terhadap pengecekan manual, dengan menyediakan dasbor digital yang menyajikan riwayat imunisasi dan perkembangan balita secara real-time dan akurat.",
    problem:
      "Para orang tua seringkali mengalami kesulitan dalam memantau tumbuh kembang anak secara mandiri. Ketergantungan pada pengecekan manual melalui petugas Posyandu menyebabkan akses terhadap data penting—seperti riwayat imunisasi dan catatan penimbangan—menjadi lambat dan tidak efisien.",
    features: [
      "Pencarian balita",
      "List imunisasi balita",
      "List balita stunting",
    ],
    stack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "ReactJS",
      "Google Sheet API",
    ],
    role: "Fullstack Developer",
    image: "/posyandu.png",
    github: "https://github.com/adyatmaa/posyandu-monitoring",
    exLink: "https://posyandu-wadungasih.vercel.app/",
  },
  {
    id: "koperasi",
    name: "Koperasi Digital",
    desc: "Aplikasi pencatatan transaksi koperasi simpan pinjam berbasis Android",
    overview:
      "Koperasi Digital adalah aplikasi android yang berfungsi untuk mempermudah proses pencatatan transaksi yang terjadi pada koperasi",
    problem:
      "Pencatatan transaksi pada koperasi simpan pinjam yang masih menggunakan buku besar, sehingga menyebabkan kesulitan pelaporan dan tingginya tingkat human error yang menyebabkan kesalahan input atau data",
    features: [
      "CRUD transaksi simpan pinjam per anggota",
      "Export PDF",
      "Export Excel",
    ],
    stack: ["Flutter", "Hive Flutter"],
    role: "Fullstack Developer",
    image: "/Shot.png",
  },
  {
    id: "manajemen",
    name: "Sistem Manajemen Keuangan",
    desc: "Website manajemen keuangan dengan integrasi WhatsApp API untuk otomasi pesan",
    overview:
      "Sistem Manajemen Keuangan adalah website yang difungsikan untuk membantu admin tata usaha untuk melakukan pencatatan transaksi pembayaran siswa",
    problem:
      "Pencatatan transaksi yang dilakukan masih menggunakan sistem tradisional, yang menyebabkan kesulitan ketika hendak melakukan rekap dan melakukan analisis",
    features: [
      "CRUD transaksi pembayaran siswa",
      "Export PDF",
      "Export Excel",
      "Integrasi WhatsApp API",
      "Integrasi CKEditor",
    ],
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Laravel", "MySQL"],
    role: "Fullstack Developer",
    image: "/manajemen.png",
  },
];
