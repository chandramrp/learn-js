let mahasiswa = {
    nama: "chandra",
    "jurusan prodi": "Teknik informatika",
    nim: "02032211074",
};

console.log(mahasiswa.nama);

mahasiswa.alamat = "baleendah";
console.log(mahasiswa.alamat);

delete mahasiswa.alamat;

console.log(mahasiswa.alamat);

let mobil = {
    merk: "toyota",
    model: "avanza",
    tahun: 2024,
};

let buku = new Object();

buku.judul = "belajar ngoding";
buku.penulis = "chandra";

console.log(buku);

console.log(mahasiswa["jurusan prodi"]);

mahasiswa.semester = "5";

console.log(mahasiswa);

mahasiswa.nama = "dudung";

console.log(mahasiswa);

delete mahasiswa.semester;

console.log(mahasiswa);

let universitas = {
    nama: "ITB",
    fakultas: {
        nama: "fakultas teknik industri",
        jurusan: "teknik fisika",
    },
};

console.log(universitas.fakultas.nama);

let { nama, jurusan, nim } = mahasiswa;
console.log(nama);
console.log(["jurusan prodi"]);
console.log(nim);
