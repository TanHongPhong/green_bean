# STYLE GUIDE - GREEN BEAN WEBSITE DEMO

## 1. Muc tieu

Dong hoa toan bo website theo mot ngon ngu visual chung:

* Nhe
* Sach
* Tu nhien
* Hien dai vua du
* Co cam giac quan ca phe that, khong bi "landing page generic"

Style nay uu tien cho **demo visual HTML/CSS**.

---

## 2. Tinh cach thuong hieu

Green Bean nen duoc the hien theo 4 tu khoa:

* Xanh
* Am
* Tinh te
* De ghe

Cam giac tong:

* Khong qua luxury
* Khong qua vintage
* Khong qua marketing
* Nhe, dep, de tin

---

## 3. Bang mau chuan

Bang mau duoc chot dua tren anh brand lay tu Facebook page cua quan.

### Mau chinh

* `--color-brand-700: #205018`
* `--color-brand-600: #285018`
* `--color-brand-500: #3f6b2c`
* `--color-brand-300: #a7b88a`

### Mau nen

* `--color-cream-50: #f7f4ee`
* `--color-cream-100: #efe9de`
* `--color-stone-200: #d8d2c8`
* `--color-stone-300: #c7c0b5`

### Mau text

* `--color-ink-900: #26231f`
* `--color-ink-700: #4a453d`
* `--color-ink-500: #6f685f`

### Mau phu

* `--color-white: #ffffff`
* `--color-line: rgba(38, 35, 31, 0.1)`
* `--color-shadow: rgba(32, 80, 24, 0.12)`

---

## 4. Cach dung mau

### Header

* Nen trang hoac kem rat nhat
* Text mau `ink-900`
* CTA chinh dung `brand-600`

### Hero

* Anh that la nen chinh
* Overlay rat nhe:
  * `rgba(38, 35, 31, 0.16)` neu anh sang
  * `rgba(255, 255, 255, 0.18)` neu anh toi

### Section thong thuong

Nen thay phien:

* Trang
* Kem nhat
* Xanh nhat rat nhe

Khong nen trang nao cung mot mau nen.

### Card

* Nen trang
* Border rat mo
* Shadow mem, thap

### CTA

* Primary: nen xanh dam, chu trang
* Secondary: nen trong, vien xanh dam

---

## 5. Typography

## Heading

* Don gian, dam vua phai
* Khong dung font qua nghe thuat
* Cam giac sach, hien dai

### Ty le de xuat

* H1: 44-56px desktop, 34-40px mobile
* H2: 32-40px desktop, 26-30px mobile
* H3: 22-28px
* Body: 16-18px
* Caption: 13-14px

### Quy tac

* Line-height thoang
* Khong dung letter spacing am
* Moi block text nen ngan, de doc

---

## 6. Border radius va shadow

### Border radius

* Card: `8px`
* Button: `999px` cho nut pill hoac `10px` cho nut vuong mem
* Anh lon: `12px`
* Thumbnail nho: `8px`

### Shadow

Chi dung shadow nhe:

```css
box-shadow: 0 10px 30px rgba(32, 80, 24, 0.08);
```

Khong dung shadow den dam.

---

## 7. Buttons

### Primary button

* Nen: `#285018`
* Text: trang
* Hover: `#205018`

### Secondary button

* Nen: trong suot
* Vien: `#285018`
* Text: `#285018`
* Hover: nen xanh rat nhat

### Kich thuoc

* Chieu cao 44-48px
* Padding rong de de bam tren mobile

---

## 8. The hien hinh anh

Hinh anh tren site phai theo cung mot huong:

* Sang
* It qua nhieu filter
* Co chat lieu that cua quan
* Uu tien bien hieu, khong gian, mon nuoc that

Sau khi doi chieu bo anh da load tu Facebook, bo visual hien tai chia thanh 3 nhom ro:

* **Lifestyle / thuong hieu**: anh tui vai, model, logo Green Bean
* **Product shot**: anh mon nuoc chup nen sang, bo cuc gon
* **Promo graphic**: banner, poster, menu graphic dang bai Facebook

### Khong nen

* Dung anh stock xa la
* Dung qua nhieu anh toi
* Dung qua nhieu mau xanh saturated
* Lam gallery qua roi
* Lay banner Facebook dang chu lam hero chinh cua website

### Crop de xuat

* Hero: ngang rong
* Card mon: 4:5 hoac 1:1
* Gallery khong gian: 4:3
* Banner nho: 16:10 hoac 5:3

### Cach dung theo nhom anh thuc te

#### Lifestyle / thuong hieu

Dung cho:

* Hero trang chu
* Section Gioi thieu
* Preview thuong hieu
* Card khong gian theo huong "vibe"

Khong nen dung lap lai qua nhieu trong cung 1 trang.

#### Product shot

Dung cho:

* Menu
* Mon noi bat
* Combo
* CTA co san pham

Nhom nay rat hop vi anh dang co nen sang va chu the ro.

#### Promo graphic

Chi nen dung cho:

* Section Uu dai
* Block thong bao
* Slider nho neu sau nay co

Khong nen dung lam:

* Hero chinh
* Gallery khong gian
* Anh thay the cho anh that cua mon nuoc

---

## 9. Component style

### Header

* Cao gon
* Khong nen qua day
* Sticky cung duoc, nhung shadow phai rat nhe

### Hero

* Text can le trai
* 2 CTA toi da
* Co 1 block thong tin nho phu tro neu can

### Card mon

* Anh o tren
* Ten mon ro
* Gia tach mau hon text thuong
* Tag nho o goc tren anh

### Card khong gian

* Uu tien anh truoc, text sau
* Mo ta 1-2 dong

### Promo card

* Khong dung style sale qua gay
* Uu tien dep va gon hon la "flashy"

---

## 10. Quy tac section theo trang

### Trang chu

* Hero dep nhat
* Sau do la preview card thong thoang
* Hero uu tien anh lifestyle co logo / tui vai, khong dung poster uu dai

### Gioi thieu

* Anh + text can bang
* Co nhieu khoang tho
* Uu tien anh lifestyle va anh bien hieu de tao cam giac thuong hieu

### Menu

* Filter gon
* Grid deu
* Khong de text va gia nhay lung tung
* Chi dung product shot nen sang, tranh chen poster khuyen mai vao cung grid mon

### Mon noi bat

* Dung anh lon hon
* Tang do nhan cho card
* Uu tien 3 mon co anh chup sach nhat va it text trong anh nhat

### Khong gian

* Gallery la trung tam
* Co nhip thay doi kich thuoc anh hop ly
* Hien tai bo anh nghieng ve lifestyle hon la anh noi that quan, nen section nay nen viet theo huong vibe thuong hieu thay vi gallery noi that day dac

### Uu dai

* Dung mau am hon mot chut
* Van giu dung he mau chung
* Co the dung truc tiep cac banner social nhung can bo khung gon, khong de chiem het page

### Lien he

* Uu tien de nhin, de bam
* Khong can trang tri nhieu

---

## 11. Hieu ung duoc phep

Chi giu cac hieu ung nhe:

* Hover nang len 2-4px
* Zoom anh rat nhe
* Fade nhe cho menu mobile
* Smooth scroll

Khong dung:

* Parallax nang
* Slider tu dong phuc tap
* Glow
* Gradient loe loet

---

## 12. CSS token de xuat

Neu muon gom ve 1 cho, co the dung:

```css
:root {
  --color-brand-700: #205018;
  --color-brand-600: #285018;
  --color-brand-500: #3f6b2c;
  --color-brand-300: #a7b88a;
  --color-cream-50: #f7f4ee;
  --color-cream-100: #efe9de;
  --color-stone-200: #d8d2c8;
  --color-stone-300: #c7c0b5;
  --color-ink-900: #26231f;
  --color-ink-700: #4a453d;
  --color-ink-500: #6f685f;
  --color-line: rgba(38, 35, 31, 0.1);
  --color-shadow: rgba(32, 80, 24, 0.12);
}
```

---

## 13. Ket luan

Chuan visual cua Green Bean nen di theo huong:

> xanh la tram + kem am + chat lieu anh that + bo cuc sach + tuong tac nhe

Khong bien website thanh:

* landing page qua marketing
* web sale flash
* web nha hang luxury

Muc tieu la:

> **mot website demo dep, co gu, nhin la ra chat Green Bean.**
