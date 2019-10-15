   
## Türkiye'de bulunan bütün illerin;

 * plaka kodu
 * alan kodu
 * nüfus bilgisi
 * bölgesi
 * yüzöçlümü
 * erkek, kadın nüfusu
 * erkek, kadın nüfus oranı
 * genel nüfusa oranı
 * kısa özet bilgi
 * ilceleri 
    * ilce adı 
    * nüfus 
    * erkek nüfus 
    * kadın nüfus 
    * yüzölçümü 
    
 verileri json çıktısı olarak sunulmuştur.   
    
Bilgiler güncel olmayabilir; <br>
Nüfus bilgileri https://www.nufusu.com/ adresinden alınmıştır <br>
Yüzölçümü bilgileri https://www.harita.gov.tr/images/urun/il_ilce_alanlari.pdf adresinden alınmıştır


## Örnek json çıktısı

```json
{
  "data": [
    {
      "il_adi": "Adana",
      "plaka_kodu": " 01",
      "alan_kodu": "0322",
      "nufus": "2.220.125",
      "bolge": "Akdeniz",
      "yuzolcumu": "13.844",
      "erkek_nufus_yuzde": "49.15%",
      "erkek_nufus": "1.106.811",
      "kadin_nufus_yuzde": "50.15%",
      "kadin_nufus": "1.113.314",
      "nufus_yuzdesi_genel": "2,71%",
      "ilceler": [
        {
          "ilce_adi": "Aladağ",
          "nufus": "16.653",
          "erkek_nufus": "8.561",
          "kadin_nufus": "8.092",
          "yuzolcumu": "1.340"
        },
        {
          "ilce_adi": "Seyhan",
          "nufus": "793.480",
          "erkek_nufus": "393.872",
          "kadin_nufus": "399.608",
          "yuzolcumu": "444"
        },
        {
          "ilce_adi": "Yüreğir",
          "nufus": "415.198",
          "erkek_nufus": "208.709",
          "kadin_nufus": "206.489",
          "yuzolcumu": "835"
        },
        {
          "ilce_adi": "Çukurova",
          "nufus": "365.735",
          "erkek_nufus": "176.561",
          "kadin_nufus": "189.174",
          "yuzolcumu": "250"
        },
        {
          "ilce_adi": "Sarıçam",
          "nufus": "173.154",
          "erkek_nufus": "88.404",
          "kadin_nufus": "84.750",
          "yuzolcumu": "770"
        },
        {
          "ilce_adi": "Ceyhan",
          "nufus": "160.474",
          "erkek_nufus": "80.485",
          "kadin_nufus": "79.989",
          "yuzolcumu": "1.426"
        },
        {
          "ilce_adi": "Kozan",
          "nufus": "130.495",
          "erkek_nufus": "65.644",
          "kadin_nufus": "64.851",
          "yuzolcumu": "1.903"
        },
        {
          "ilce_adi": "İmamoğlu",
          "nufus": "28.239",
          "erkek_nufus": "14.140",
          "kadin_nufus": "14.099",
          "yuzolcumu": "445"
        },
        {
          "ilce_adi": "Karataş",
          "nufus": "24.559",
          "erkek_nufus": "12.516",
          "kadin_nufus": "12.043",
          "yuzolcumu": "862"
        },
        {
          "ilce_adi": "Karaisalı",
          "nufus": "22.308",
          "erkek_nufus": "11.397",
          "kadin_nufus": "10.911",
          "yuzolcumu": "1.165"
        },
        {
          "ilce_adi": "Pozantı",
          "nufus": "20.683",
          "erkek_nufus": "10.820",
          "kadin_nufus": "9.863",
          "yuzolcumu": "899"
        },
        {
          "ilce_adi": "Yumurtalık",
          "nufus": "18.587",
          "erkek_nufus": "9.420",
          "kadin_nufus": "9.167",
          "yuzolcumu": "447"
        },
        {
          "ilce_adi": "Tufanbeyli",
          "nufus": "17.667",
          "erkek_nufus": "9.123",
          "kadin_nufus": "8.544",
          "yuzolcumu": "851"
        },
        {
          "ilce_adi": "Feke",
          "nufus": "17.555",
          "erkek_nufus": "9.151",
          "kadin_nufus": "8.404",
          "yuzolcumu": "1.218"
        },
        {
          "ilce_adi": "Saimbeyli",
          "nufus": "15.338",
          "erkek_nufus": "8.008",
          "kadin_nufus": "7.330",
          "yuzolcumu": "989"
        }
      ],
      "kisa_bilgi": "Ülkenin en büyük şehirlerinden biri olan Adana, Toros dağlarının güneyinde bulunan ve Mersin, Osmaniye, Hatay illerini içine alan Çukurova'nın merkezinde, Seyhan nehri üzerinde yer alır"
    },
```
## DEMO
[Demo](https://www.senerov.com/projects/tr-il-ilce/)
