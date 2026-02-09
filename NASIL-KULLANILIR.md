# Ahbap Etkinlik Takvimi - Kullanım Kılavuzu

Bu takvim sistemi, farklı Ahbap şehir gruplarının kolayca kullanabilmesi için tasarlanmıştır. Kod bilgisi gerektirmez, sadece `config.json` dosyasını düzenlemeniz yeterlidir.

---

## Hızlı Başlangıç

1. Bu repoyu kendi GitHub hesabınıza **fork** edin
2. `config.json` dosyasını açın ve düzenleyin
3. GitHub Pages'i etkinleştirin
4. Takvim siteniz hazır!

---

## config.json Dosyasını Düzenleme

### Temel Ayarlar

```json
{
  "sehir": "Çanakkale",        // Şehir adınızı yazın
  "ay": "Şubat",               // Ay adı (Ocak, Şubat, Mart, vb.)
  "yil": 2026,                 // Yıl
  "ayinIlkGunu": 7,            // Ayın 1'i hangi gün? (aşağıdaki tabloya bakın)
  "ayinGunSayisi": 28,         // Ayda kaç gün var? (28, 29, 30 veya 31)
  "footer": "Ahbap Çanakkale Gönüllüleri",
  "slogan": "Sevginin ve gerçeğin peşindeyiz",
  "pdfDosyasi": "takvim.pdf",  // PDF dosyanızın adı (opsiyonel)
  "konum": "Çanakkale"         // Takvim etkinlikleri için konum
}
```

### Gün Numaraları Tablosu

| Gün | Numara |
|-----|--------|
| Pazartesi | 1 |
| Salı | 2 |
| Çarşamba | 3 |
| Perşembe | 4 |
| Cuma | 5 |
| Cumartesi | 6 |
| Pazar | 7 |

**Örnek:** Mart 2026'nın 1'i Pazar günü başlıyor → `"ayinIlkGunu": 7`

---

## Etkinlik Ekleme

`etkinlikler` dizisine yeni etkinlikler ekleyebilirsiniz:

```json
"etkinlikler": [
  {
    "id": "piknik",                    // Benzersiz bir id (Türkçe karakter kullanmayın)
    "gun": 15,                         // Ayın kaçında?
    "icon": "🧺",                      // Emoji (takvimde görünür)
    "baslik": "Bahar Pikniği",         // Etkinlik başlığı
    "kisa": "Doğayla iç içe bir gün",  // Takvimde görünen kısa açıklama
    "detay": "Aileler ve çocuklarla birlikte parkta piknik yapacağız. Herkes yanında yiyecek getirebilir.",
    "gif": "https://media.giphy.com/..."  // Opsiyonel: Detay sayfasında görünecek GIF
  }
]
```

### Etkinlik Silme

Silmek istediğiniz etkinliğin tüm satırlarını (süslü parantezler dahil) silin.

### Etkinlik Düzenleme

İlgili alanları değiştirin. Örneğin:
- Tarih değiştirmek için `"gun"` değerini değiştirin
- Açıklama değiştirmek için `"detay"` değerini değiştirin

---

## PDF Dosyası

Takvimin PDF versiyonunu eklemek isterseniz:
1. PDF dosyanızı ana klasöre yükleyin
2. `config.json`'da `"pdfDosyasi"` alanına dosya adını yazın

PDF istemiyorsanız, HTML'den PDF butonunu kaldırabilirsiniz.

---

## GitHub Pages ile Yayınlama

1. GitHub'da repo ayarlarına gidin (Settings)
2. Sol menüden "Pages" seçin
3. Source: "Deploy from a branch" seçin
4. Branch: "main" ve "/ (root)" seçin
5. Save'e tıklayın
6. Birkaç dakika içinde siteniz yayında olacak:
   `https://KULLANICI_ADINIZ.github.io/REPO_ADINIZ/`

---

## Sık Kullanılan Emojiler

| Etkinlik Türü | Emoji |
|---------------|-------|
| Kitap/Okuma | 📚 📖 📕 |
| Gönüllü/Tanışma | 🤝 👋 🙋 |
| Hayvan | 🐱 🐕 🐾 |
| El işi/Örgü | 🧶 🪡 ✂️ |
| Oyun/Eğlence | 🎮 🎲 🎯 |
| Yemek | 🍽️ 🥘 ☕ |
| Doğa/Çevre | 🌳 🌻 ♻️ |
| Müzik | 🎵 🎸 🎤 |
| Spor | ⚽ 🏃 🚴 |
| Eğitim | 🎓 ✏️ 💡 |

---

## Örnek: Çanakkale için config.json

```json
{
  "sehir": "Çanakkale",
  "ay": "Mart",
  "yil": 2026,
  "ayinIlkGunu": 7,
  "ayinGunSayisi": 31,
  "footer": "Ahbap Çanakkale Gönüllüleri",
  "slogan": "Sevginin ve gerçeğin peşindeyiz",
  "pdfDosyasi": "mart-takvim.pdf",
  "konum": "Çanakkale",
  "etkinlikler": [
    {
      "id": "cevretemizlik",
      "gun": 7,
      "icon": "🌳",
      "baslik": "Çevre Temizliği",
      "kisa": "Sahillerimizi temizleyelim",
      "detay": "Çanakkale sahillerinde çevre temizliği yapacağız. Eldiven ve poşetler bizden!",
      "gif": ""
    },
    {
      "id": "cocuketkinlik",
      "gun": 14,
      "icon": "🎨",
      "baslik": "Çocuklarla Resim",
      "kisa": "Minik ressamlarla buluşma",
      "detay": "Çocuklarla birlikte resim yapacağız. Tüm malzemeler hazır olacak.",
      "gif": ""
    }
  ]
}
```

---

## Yardım

Sorularınız için:
- Ahbap Tekirdağ ekibine ulaşın
- GitHub'da issue açın

---

Sevginin ve gerçeğin peşindeyiz! 💚
