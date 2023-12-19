const vm = new Vue({
  el: "#app",
  data: {
    name: "i'am Rebly Tabuni",
    message: "saya sedang belajar javascript framework",
    qty: 3,
    namaDepan: "Rebly ",
    namaBelakang: "Tabuni",
    bilangan: 8,
    gambar: "img/1.png",
    menu: "home",
    kelas: [],
    numbers: [1, 2, 3, 4, 5],
  },
  methods: {
    getname: function () {
      return "Hello, " + this.name;
    },
    ubahNama: function (namaBaru) {
      this.name = namaBaru;
      return this.getname();
    },
    handleclick: function () {
      this.bilangan++;
      this.gambar = "img/2.png";
    },
    caribilangangenap: function (data) {
      return data.filter((angka) => {
        return angka % 2 == 0;
      });
    },
  },
  computed: {
    totalBayar: function () {
      return this.qty * 10000;
    },
    namaLengkap: function () {
      return this.namaDepan + this.namaBelakang;
    },
    infoBilangan: function () {
      return this.bilangan % 2 === 0 ? "genap" : "ganjil";
    },
  },
});
