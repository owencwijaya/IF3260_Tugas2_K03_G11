# 3D Hollow Object App
>Implementasi WebGL dalam bentuk program 3D untuk memanipulasi objek _hollow_ <br>
>Tugas Besar II IF3260 Grafika Komputer Sem. 2 2022/2023

## Requirements
1. _Web browser_ favorit Anda
2. **[RECOMMENDED]** _Extension_ **_Live Server_** pada _Visual Studio Code_

## Cara Menjalankan
_Fork_ repository ini ke komputer Anda terlebih dahulu. Ada 3 cara untuk menjalankan aplikasi:
1. **Membuka file index.html**
2. **Menggunakan Visual Studio Code**

### Membuka `index.html`
1. Pastikan _repository_ ini sudah di-fork
2. Buka direktori `src`, lalu buka file `index.html` pada _browser_ Anda

### Menggunakan Visual Studio Code
1. Pastikan _extension_ **_Live Server_** sudah terpasang
> Klik menu '_Extensions_' > cari **_Live Server_** > klik _Install_
2. Buka dokumen `index.html` dari _Visual Studio Code_
3. Klik kanan, lalu pilih opsi '**_Open with Live Server_**
4. Akan muncul _link_ menuju aplikasi (biasanya akan di-_redirect_ atau Anda dapat membuka langsung _link tersebut_)


## Cara Menggunakan
<h3>Transformasi</h3>
<ol>
    <li>Pengguna dapat melakukan translasi objek pada sumbu X, Y, dan Z menggunakan <i>translation slider</i> yang tersedia.</li>
    <li>Pengguna dapat melakukan rotasi objek pada sumbu X, Y, dan Z menggunakan <i>rotation slider</i> yang tersedia.</li>
    <ul>
        <li>Pengguna dapat mengaktifkan rotasi otomatis per sumbu menggunakan <i>checkbox</i> <b>Spin</b> di kanan <i>slider</i></li>
    </ul>
    <li>Pengguna dapat melakukan scaling objek pada sumbu X, Y, dan Z menggunakan <i>scaling slider</i> yang tersedia.</li>
    <li>Pengguna dapat mengaktifkan <i>shader</i> menggunakan <i>checkbox</i> <b>"Use shader?"</b></li>
        <ul>
            <li>Menyalakan <i>shader</i> akan memberikan efek bayangan pada objek yang ditampilkan.</li>
            <li>Menonaktifkan <i>shader</i> akan membuat objek ditampilkan dengan satu warna solid.</li>
        </ul>
    <li>Pengguna dapat mengaktifkan animasi rotasi menggunakan <i>checkbox</i> <b>"Rotation animation"</b></li>
        <ul>
            <li>Menyalakan <i>checkbox</i> akan membuat objek berputar secara otomatis secara random dan berubah warna seiring berjalannya waktu.</li>
            <li>Menonaktifkan <i>checkbox</i> akan membuat objek berhenti berputar dan kembali ke <i>state</i> sebelum berputar.</li>
            <li>Pada saat animasi aktif, <i>rotation slider</i> dan <i>color picker</i> <b>tidak dapat digunakan</b>, namun dapat digunakan setelah <i>checkbox</i> dinonaktifkan</li>
        </ul>
    <li>Pengguna dapat mengaktifkan perubahan warna saat berputar dengan menggunakan <i>checkbox</i> <b>"Enable color change"</b></li>
        <ul>
            <li>Dapat digunakan juga pada <i>checkbox</i> <b>Spin</b> pada rotasi X, Y, dan Z</li>
            <li><i>Checkbox</i> akan aktif apabila terdapat proses rotasi otomatis yang aktif</li>
        </ul>
</ol>

<h3>Kontrol Kamera</h3>
<ol>
    <li>Pengguna dapat mengatur jarak kamera dari objek menggunakan <i>slider</i> <b>"Camera distance"</b></li>
    <li>Pengguna dapat menggerakan kamera mengelilingi objek secara horizontal menggunakan <i>slider</i> <b>"Horizontal position</b></li>
        <ul>
            <li>Pergerakan dilakukan sejauh <b>maksimal 180 derajat</b> dari posisi awal kamera</li>
        </ul>
    <li>Pengguna dapat menggerakan kamera mengelilingi objek secara vertical menggunakan <i>slider</i> <b>"Vertical position</b></li>
        <ul>
            <li>Pergerakan dilakukan sejauh <b>maksimal 90 derajat</b> dari posisi awal kamera</li>
        </ul>
    <li>Khusus proyeksi <i>perspective</i> dan <i>oblique</i>, pengguna dapat mengubah sudut tampilan dengan <i>FOV slider</i></li>
</ol>

<h3>Lain-lain</h3>
<ol>
    <li>Pengguna dapat me-reset parameter transformasi menggunakan tombol <b>Reset</b></li>
    <li>Pengguna dapat melakukan <i>loading</i> objek yang sudah disimpan selanjutnya dengan tombol <b>Load Model</b></li>
    <li>Pengguna dapat melakukan <i>save</i> objek yang telah dibuat dengan mengisikan nama <i>file</i> di sebelah tombol <b>Save Model</b>, lalu menekan tombol <b>Save Model</b></li>
    <ul>
        <li>Transformasi yang dilakukan akan disimpan, dan akan diaplikasikan <b>hanya pada saat loading</b> sebagai state awal</li>
    </ul>
</ol>