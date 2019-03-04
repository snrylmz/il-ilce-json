$('#data-table').DataTable({
  "ajax": "js/il-ilce.json", //  json dosyası
  "columns": [{
      "data": "il_adi"
    },
    {
      "data": "plaka_kodu"
    },
    {
      "data": "alan_kodu"
    },
    {
      "data": "nufus"
    },
    {
      "data": "bolge"
    },
    {
      "data": "yuzolcumu"
    },
    {
      "data": "erkek_nufus"
    },
    {
      "data": "kadin_nufus"
    },
    {
      "data": "nufus_yuzdesi_genel"
    },
    {
      "data": "ilceler.length"
    }
  ],
  paging: false, // dataTable sayfalamayı kapatır.
  columnDefs: [ // dataTable tr karater sırasına göre sıralar.
    {
      type: 'turkish',
      targets: '_all'
    }
  ],
  "language": { // Tr dil dosyası çağırır ve kullanır.
    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Turkish.json"
  },
  "order": [
    [1, "asc"]
  ], /// Birinci kolondaki değerleri küçükten büyüğüe göre sıralar.
  "initComplete": function() { // dataTable yüklemesi tamamlandıktan sonra tr satırlarının içini okur ve renklendirir.
    $("tr:contains('Karadeniz')").css("background-color", "#27ae60");
    $("tr:contains('Marmara')").css("background-color", "#95a5a6");
    $("tr:contains('Ege')").css("background-color", "#1abc9c");
    $("tr:contains('İç Anadolu')").css("background-color", "#f1c40f");
    $("tr:contains('Akdeniz')").css("background-color", "#2980b9");
    $("tr:contains('Doğu Anadolu')").css("background-color", "#c0392b");
    $("tr:contains('Güneydoğu Anadolu')").css("background-color", "#f39c12");
  },

});



// json datadan gelen verileri htmlde ilgili yerlere yerleştirir.

var table = $('#data-table').DataTable();
$('#data-table tbody').on('click', 'tr', function() {
  $(".city-details").css("right", "0px")
  var data = table.row(this).data();
  $("#il_adi").html('' + data.il_adi + '');
  $("#plaka_kodu").html('' + data.plaka_kodu + '')
  $("#alan_kodu").html('' + data.alan_kodu + '')
  $("#nufus").html('' + data.nufus + '')
  $("#bolge").html('' + data.bolge + '')
  $("#yuzolcumu").html('' + data.yuzolcumu + '&nbsp;km2')
  $("#erkek_nufus_yuzde").html('' + data.erkek_nufus_yuzde + '')
  $("#erkek_nufus").html('' + data.erkek_nufus + '')
  $("#kadin_nufus").html('' + data.kadin_nufus_yuzde + '')
  $("#kadin_nufus_yuzde").html('' + data.kadin_nufus_yuzde + '')
  $("#nufus_yuzdesi_genel").html('' + data.nufus_yuzdesi_genel + '')
  $("#kisa_bilgi").html('' + data.kisa_bilgi + '')
  $("#ilceler").html('');
  $(data.ilceler).each(function(index, ilce) {
    $("#ilceler").append(' ' + ilce.ilce_adi + ',');
  });
  var color = '';
  var x = $(this).css('background-color');
  hexc(x);
  $(".city-details").css("background-color", color)

  function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
  }
});
$(".button-filter").on('click', 'a', function() { ///  Filtreleme butonlarına tıklandığı anda butonda ki texti arar ve tabloya sonuçları yazar.
  table.search($(this).text()).draw();
  console.log($(this).text());
});
$("button").click(function() { // Temizle butonuna basıldığında filtrelemeyi temizler bütün sonuçları ekrana getirir.
  table.search('').columns().search('').draw();
});

$(".city-details img").click(function() {
  $(".city-details").css("right", "-550px")
})
