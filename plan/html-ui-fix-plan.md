# PLAN CHINH SUA HTML UI

## 1. Muc tieu

Chinh sua bo file trong `html/` theo cac yeu cau hien tai:

* Thu nho cac thanh phan giao dien khoang 20%.
* Giu nguyen co chu hien co.
* Dong bo topbar tren tat ca cac trang.
* Dung anh banner `assets/media/home-hero.png` lam banner dau trang `index.html`.
* Link cac trang voi nhau qua topbar va cac CTA co dich den ro rang.
* Nhung chuc nang chua lam that thi khong dieu huong.
* Do va sua cac loi giao dien de thay ngay trong bo HTML demo.

---

## 2. Pham vi file

Can xu ly 7 trang:

* `html/index.html`
* `html/introduction.html`
* `html/menu.html`
* `html/featured.html`
* `html/space.html`
* `html/promotions.html`
* `html/contact.html`

Khong doi ten file trong dot nay.

---

## 3. Thu nho giao dien 20%

Giu nguyen `fontSize` trong Tailwind config.

Chi giam cac gia tri layout:

* `margin-desktop`: `64px` -> `51px`
* `margin-mobile`: `16px` -> `13px`
* `gutter`: `24px` -> `19px`
* `stack-lg`: `32px` -> `26px`
* `stack-md`: `16px` -> `13px`
* `stack-sm`: `8px` -> `6px`

Dong thoi giam cac gia tri hardcode lon:

* `py-32` -> `py-24`
* `py-24` -> `py-20`
* `mb-[80px]` -> `mb-[64px]`
* `h-[600px]` -> `h-[480px]`
* `h-[500px]` -> `h-[400px]`
* `h-[400px]` -> `h-[320px]`
* card radius lon tu `32px/24px` ve khoang `26px/19px`

---

## 4. Dong bo topbar

Topbar moi dung chung:

* Logo text: `Green Bean`
* Link:
  * Trang chu -> `index.html`
  * Gioi thieu -> `introduction.html`
  * Menu -> `menu.html`
  * Mon noi bat -> `featured.html`
  * Khong gian -> `space.html`
  * Uu dai -> `promotions.html`
  * Lien he -> `contact.html`
* Active state dung theo trang hien tai.
* Nut icon ben phai:
  * `map` -> `contact.html`
  * `menu` icon tren mobile chi la visual demo, khong dieu huong.

Topbar can dong nhat:

* chieu cao gon hon
* padding giam nhe
* shadow nhe
* khong de link `#` trong topbar

---

## 5. Banner dau trang main

Trang `index.html` can thay hero cu bang banner:

* `../assets/media/home-hero.png`

Cach bo tri:

* Banner full-width ben duoi topbar.
* Dung anh lam visual chinh, khong cat mat noi dung quan trong.
* Text phu cua website dat o goc duoi trai / overlay nhe.
* Khong che len phan chu lon san co tren banner.
* Co CTA hop ly:
  * `Xem menu` -> `menu.html`
  * `Lien he quan` -> `contact.html`

---

## 6. Link va CTA

### Co dieu huong

Chi gan link khi co trang dich that:

* Xem menu -> `menu.html`
* Tim hieu them / Ve chung toi -> `introduction.html`
* Xem khong gian -> `space.html`
* Uu dai / Dang ky thanh vien -> `promotions.html`
* Lien he / Tim cua hang / Chi duong -> `contact.html`
* Mon noi bat / Specials -> `featured.html`

### Khong dieu huong

Khong gan link cho:

* nut them mon / add
* filter menu
* form submit demo
* icon search
* icon shopping bag
* privacy / terms / private events
* dat cho truoc neu chua co trang/dat cho that

Nhung nut nay co the giu dang button de demo visual.

---

## 7. Loi giao dien can sua

Danh sach loi hien tai can xu ly:

* topbar moi trang mot cau truc va nhieu `href="#"`.
* `index.html` hero dang split layout va chua dung banner moi.
* mot so CTA la `button` nen khong dieu huong duoc du co trang dich.
* nhieu footer link dang tro `#` gay cam giac co chuc nang that.
* trang `contact.html` dang `lang="en"` va nhieu text English, can it nhat chuan hoa title/link/nav theo tieng Viet.
* custom cursor dai trong `menu.html` co the gay roi, can loai bo neu khong can.
* khoang cach section, card, anh, CTA dang hoi lon so voi yeu cau demo gon.

---

## 8. Thu tu thuc hien

1. Cap nhat spacing token va cac hardcode layout lon.
2. Thay topbar dong bo cho 7 trang.
3. Thay hero dau trang `index.html` bang banner moi.
4. Gan link cho topbar, footer link co that, CTA co dich ro.
5. Loai bo hoac giu non-navigation cho chuc nang chua lam.
6. Chay server local va kiem tra nhanh bang browser/screenshot neu co the.
7. Sua tiep cac loi visual thay duoc sau khi kiem tra.

---

## 9. Ket qua mong muon

Sau khi sua:

* Mo `html/index.html` thay banner dung ngay dau trang.
* Topbar tren 7 trang dong nhat va link duoc voi nhau.
* Giao dien gon hon khoang 20% ma chu khong bi nho di.
* Khong con link `#` o cac dieu huong chinh.
* Cac nut chua co chuc nang that khong tao ky vong dieu huong sai.
