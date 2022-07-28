const getData = {
    nama : 'Fahreza Ditya Alfandry',
    umur : 17,
    vData() {
        return `Hallo\nNama saya ${this.nama}\nSaya ${this.umur} tahun`;
    },
};

function sekolah(nama, status) {
    vSekolah = `\nSaya ${status} di ${nama}`
    return vSekolah;
}

module.exports = {getData, sekolah}