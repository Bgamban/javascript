<?php 
// Koneksi Ke Database
mysqli_connect("localhost", "root", "", "f4");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novel</title>
</head>
<body>
    <h1>Daftar Novel</h1>
    <table border="1" cellpadding="10" cellspacing="0"></table>
    <tr>
        <th>No</th>
        <th>Aksi</th>
        <th>Gambar</th>
        <th>Nama</th>
        <th>Pengarang</th>
    </tr>
    <tr>
        <td>1</td>
        <td>
            <a href="">Ubah</a> | 
            <a href="">Hapus</a>
        </td>
        <td><img src="../Flexbox/img/dragon-flying.jpg" alt=""></td>
        <td>Dragon</td>
        <td>Haji</td>
    </tr>
</body>
</html>