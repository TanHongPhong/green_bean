# AGENTS.md

## Muc tieu repo

Repo nay la bo demo visual HTML cho website Green Bean Coffee & Tea.

Uu tien:

* Demo nhin that, gon, de duyet.
* Khong gia lap backend.
* Khong tao ky vong chuc nang that neu trang hoac luong chua ton tai.
* Chinh sua theo style guide trong `plan/style-guide.md`.
* Giu website co cam giac quan ca phe that: xanh tram, kem am, anh ro, bo cuc sach.

## Pham vi ky thuat

* Dung HTML, Tailwind CDN, CSS/JS nhe.
* Khong them framework, bundler, package manager hay build step neu user chua yeu cau.
* Uu tien anh local trong `assets/media/`; chi dung anh remote khi chua co anh local phu hop.
* Cac form, filter, nut them mon, nut dang ky co the la demo visual, khong can submit that.
* Neu them JS, uu tien JS ngan trong file hien tai hoac `assets/site.js` neu la hanh vi dung chung.
* Neu them CSS dung chung, uu tien `assets/site.css`; neu chi phuc vu mot trang, co the de inline gon trong trang do.

## Skill workflow

Chi dung skill khi no thuc su giup giai quyet yeu cau. Style guide cua repo luon la nguon uu tien cao hon cac rule cinematic/generic cua skill.

### `gpt-taste`

Ap dung co chon loc cho repo nay:

* Nang chat luong hero, nav, footer, CTA va cac section co hinh anh.
* Lam bo cuc co chu dich, tranh cam giac template chung chung.
* Giu H1 rong, de doc, khong bi vo thanh nhieu dong tren mobile.
* Tang chat hinh anh, crop, contrast va rhythm cua page khi can.

Khong ap dung nguyen xi cac quy tac sau:

* Khong bat buoc GSAP.
* Khong bat buoc AIDA day du tren moi trang.
* Khong dung spacing qua lon theo huong landing page cinematic neu lam demo bi dai.
* Khong bien trang static thanh showcase qua cau ky.
* Khong dung random font/layout neu pha vo nhan dien trong `plan/style-guide.md`.

### `ui-ux-pro-max`

Dung khi user yeu cau thiet ke, review UI, sua responsive, cai thien UX hoac can he thong hoa visual.

Ap dung cho repo nay:

* Mac dinh stack la `html-tailwind`.
* Chi lay guideline phu hop voi static HTML/Tailwind CDN.
* Khong tao `design-system/` hay file moi neu user chi yeu cau sua HTML gon.
* Uu tien accessibility, contrast, responsive, focus state va tinh nhat quan component.

### `imagegen`

Dung khi can tao anh bitmap moi, anh hero, texture, product/lifestyle mockup hoac bien the hinh anh.

Voi repo nay:

* Luu anh sinh ra vao `assets/media/` theo nhom phu hop.
* Khong thay anh local dang tot bang anh sinh moi neu khong co ly do ro.
* Anh dung tren site phai ro chu the, khong toi, khong mo, khong stock-like.

### GitNexus skills

Dung khi user yeu cau hieu code, trace loi, review PR, refactor hoac phan tich tac dong.

Voi repo nay:

* Neu GitNexus chua index repo, doc truc tiep bang `rg`, `Get-Content` va cau truc file.
* Khong can ep dung process/API tools vi repo hien la static HTML, khong co backend route.

### Tim skill/tool moi

Chi dung tool discovery khi user yeu cau mot plugin/connector/skill cu the, hoac nhu cau khong the xu ly tot bang cac skill san co.

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
  * link that thi dieu huong, muc chua lam thi `aria-disabled="true"` va khong co `href`
* Hero trang chu:
  * uu tien anh local
  * anh full man hinh, `object-fit` hop ly
  * overlay nhe, khong lam mo anh
  * CTA doc duoc ro tren mobile va desktop
* Typography:
  * khong letter spacing am
  * H1 co the lon nhung phai doc duoc tren mobile
  * text trong card/button khong duoc tran, che, hoac bi cat
* Mau sac:
  * theo bang mau trong `plan/style-guide.md`
  * tranh dung qua nhieu tong khong nam trong he mau Green Bean
  * tranh gradient/orb/trang tri lam lech tinh cach "xanh, am, tinh te, de ghe"
* Hinh anh:
  * uu tien anh local trong `assets/media/`
  * khong dung poster social lam hero chinh neu anh co qua nhieu chu
  * product/menu dung anh san pham sang, ro, crop deu
  * space/gioi thieu dung anh lifestyle/thuong hieu/khong gian that

## Quy tac sua file

* Neu sua nhieu file HTML cung luc, uu tien dong bo theo component chung: header, footer, hero, CTA.
* Khong doi ten file neu user chua yeu cau.
* Giu ten file `introduction.html` nhu hien tai de tranh vo link.
* Neu co chuc nang chua lam that, giu dang button hoac form demo, khong fake navigation.
* Khong them `href="#"`; neu chua co dich den that, dung `button type="button"` hoac `aria-disabled="true"`.
* Khong them framework/build step.
* Tranh sua noi dung/anh ngoai scope neu user chi yeu cau mot phan nho.
* Neu thay text tieng Viet bi loi khi doc terminal, kiem tra lai bang UTF-8 truoc khi ket luan file bi hong.

## Trang hien co

7 trang HTML can giu link noi bo dung:

* `index.html`
* `introduction.html`
* `menu.html`
* `featured.html`
* `space.html`
* `promotions.html`
* `contact.html`

## Truoc khi ket thuc

Kiem tra lai:

* cac link giua 7 trang co dung khong
* khong con `href="#"`
* cac trang co `<title>` phu hop
* hero trang chu mo ra khong bi ho nen hoac crop lech
* footer va header co cung ngon ngu visual
* anh quan trong khong phu thuoc remote neu da co anh local phu hop
* layout khong bi ngang scroll tren mobile
* form/nut demo noi ro la demo visual neu chua co chuc nang that
