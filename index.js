$('#data-table').DataTable({
     "ajax": "il-ilce.json",
     "columns": [
          {"data": "il_adi"},
          {"data": "plaka_kodu"},
          {"data": "alan_kodu"},
          {"data": "nufus"},
          {"data": "bolge"},
          {"data": "yuzolcumu"},
          {"data": "erkek_nufus"},
          {"data": "kadin_nufus"},
          {"data": "nufus_yuzdesi_genel"},
          {"data": "ilceler.length"}
     ],
     columnDefs: [
          {type: 'turkish', targets: '_all'}
      ],
     "language": {
           "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Turkish.json"
   },
     "lengthMenu": [[-1], [-1]],
     "initComplete": function(){  // dataTable yüklemesi tamamlandıktan sonra tr satırlarının içini okur ve renklendirir.
           $("tr:contains('Karadeniz')" ).css( "background-color", "#27ae60" );
           $("tr:contains('Marmara')" ).css( "background-color", "#95a5a6" );
           $("tr:contains('Ege')" ).css( "background-color", "#1abc9c" );
           $("tr:contains('İç Anadolu')" ).css( "background-color", "#f1c40f" );
           $("tr:contains('Akdeniz')" ).css( "background-color", "#2980b9" );
           $("tr:contains('Doğu Anadolu')" ).css( "background-color", "#c0392b" );
           $("tr:contains('Güneydoğu Anadolu')" ).css( "background-color", "#f39c12" );
     },
  });

var table = $('#data-table').DataTable();
$('#data-table tbody').on('click', 'tr', function () {
    var data = table.row(this).data();
        $("#il_adi").html('' + data.il_adi + '');
        $("#plaka_kodu").html('' + data.plaka_kodu + '')
        $("#alan_kodu").html('' + data.alan_kodu + '')
        $("#nufus").html('' + data.nufus + '')
        $("#bolge").html('' + data.bolge + '')
        $("#yuzolcumu").html('' + data.il_adi + '')
        $("#erkek_nufus_yuzde").html('' + data.erkek_nufus_yuzde + '')
        $("#erkek_nufus").html('' + data.erkek_nufus + '')
        $("#kadin_nufus").html('' + data.kadin_nufus_yuzde + '')
        $("#kadin_nufus_yuzde").html('' + data.kadin_nufus_yuzde + '')
        $("#nufus_yuzdesi_genel").html('' + data.nufus_yuzdesi_genel + '')
        $("#kisa_bilgi").html('' + data.kisa_bilgi + '')
        $("#ilceler").html('');
        $(data.ilceler).each(function(index, ilce){
              $("#ilceler").append('' + ilce.ilce_adi + '<br>');
        });

});
