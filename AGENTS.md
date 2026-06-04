# AGENTS.md

## Muc tieu repo

Repo nay la bo demo visual HTML cho website Green Bean Coffee & Tea.

Uu tien:

* Demo nhin that, gon, de duyet.
* Khong gia lap backend.
* Khong tao ky vong chuc nang that neu trang hoac luong chua ton tai.
* Chinh sua theo style guide trong `plan/style-guide.md`.

## Pham vi ky thuat

* Dung HTML, Tailwind CDN, JS nhe trong tung file.
* Khong them framework hay build step neu chua duoc yeu cau.
* Uu tien anh local trong `assets/images/`.
* Cac form, filter, nut them mon co the la demo visual, khong can submit that.

## Cach ap dung skill moi

### `gpt-tasteskill`

Chi ap dung co chon loc cho repo nay:

* Tang tinh chat chu y cua hero, nav, footer.
* Uu tien bo cuc co chu dich, khong bi generic.
* Giu hinh anh ro, bo cuc sach, CTA doc duoc ro rang.

Khong ap dung nguyen xi cac quy tac sau cua skill:

* GSAP bat buoc.
* Spacing qua lon theo huong landing page cinematic.
* AIDA day du tren moi trang.
* Layout qua "showcase" lam lech muc tieu demo HTML gon.

### `find-skills`

Chi dung khi can tim them skill moi cho mot nhu cau khac ma repo chua co cach xu ly ro rang.

## Nguyen tac UI cho repo nay

* Header va footer phai dong bo tren tat ca trang trong `html/`.
* Header:
  * logo text `Green Bean`
  * nav link noi bo giua 7 trang
  * icon `map` tro ve `contact.html`
  * mobile menu chi la demo visual neu chua co drawer that
* Footer:
  * mot cau truc chung tren moi trang
  * khong de footer dark mode pha tron voi trang sang
  * link that thi dieu huong, muc chua lam thi `aria-disabled="true"`
* Hero trang chu:
  * dung anh local
  * anh full man hinh, object-fit hop ly
  * khong overlay lam mo anh
* Typography:
  * khong letter spacing am
  * H1 co the lon nhung phai doc duoc tren mobile
* Mau sac:
  * theo bang mau trong `plan/style-guide.md`
  * tranh dung qua nhieu tông khong nam trong he mau Green Bean

## Quy tac sua file

* Neu sua nhieu file HTML cung luc, uu tien dong bo theo component chung: header, footer, hero, CTA.
* Khong doi ten file neu user chua yeu cau.
* Giu ten file `intrduction.html` nhu hien tai de tranh vo link.
* Neu co chuc nang chua lam that, giu dang button hoac form demo, khong fake navigation.

## Truoc khi ket thuc

Kiem tra lai:

* cac link giua 7 trang co dung khong
* khong con `href="#"`
* hero trang chu mo ra khong bi hở nen hoac crop lech
* footer va header co cung ngôn ngu visual
