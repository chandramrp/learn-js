function selesaikanTugas(tugas, callback) {
     console.log("menyelesaikan tugas: " + tugas)
     callback()
}

function tugasSelesai() {
     console.log("tugas selesai")
}

selesaikanTugas("belejar ngoding", tugasSelesai)