-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Nov 2020 pada 15.49
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_warehouse`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kode_kategori` varchar(255) NOT NULL,
  `nama_kategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id`, `kode_kategori`, `nama_kategori`) VALUES
(1, 'mkn', 'Makanan'),
(2, 'mnm', 'Minuman');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pencatatan_produk`
--

CREATE TABLE `pencatatan_produk` (
  `id_pencatatan` int(11) NOT NULL,
  `jml_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengembalian_produk`
--

CREATE TABLE `pengembalian_produk` (
  `id_pengembalian` int(11) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `jml_produk` int(11) NOT NULL,
  `tgl_pengajuan` date NOT NULL,
  `tgl_pengembalian` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id_produk` bigint(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `deskripsi_produk` varchar(255) NOT NULL,
  `merk_produk` varchar(255) NOT NULL,
  `tgl_produksi` date NOT NULL,
  `tgl_kadaluarsa` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id_produk`, `kategori_id`, `nama_produk`, `deskripsi_produk`, `merk_produk`, `tgl_produksi`, `tgl_kadaluarsa`, `created_at`, `updated_at`) VALUES
(1, 1, 'Chitat', 'Makan ringan dari kentang', 'Indofood', '2020-11-01', '2021-11-01', '2020-11-24 10:04:08', '2020-11-24 12:06:02'),
(2, 1, 'alwan', '', 'asdasd', '0000-00-00', '0000-00-00', '2020-11-24 10:04:08', '2020-11-24 12:45:15'),
(3, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 12:59:40', '2020-11-24 12:59:40'),
(4, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 13:03:29', '2020-11-24 13:03:29'),
(5, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 13:04:02', '2020-11-24 13:04:02'),
(6, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 13:04:33', '2020-11-24 13:04:33'),
(7, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 13:04:54', '2020-11-24 13:04:54'),
(9, 2, 'mie goreng', 'makan berat berbahan mie', 'sedap', '0000-00-00', '0000-00-00', '2020-11-24 13:08:28', '2020-11-24 13:08:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `kode` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `stok`
--

CREATE TABLE `stok` (
  `id_stok` bigint(20) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `jml_stok` int(11) NOT NULL,
  `jml_prd_bagus` int(11) NOT NULL,
  `jml_prd_cacat` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode_kategori`);

--
-- Indeks untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  ADD PRIMARY KEY (`id_pencatatan`);

--
-- Indeks untuk tabel `pengembalian_produk`
--
ALTER TABLE `pengembalian_produk`
  ADD PRIMARY KEY (`id_pengembalian`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD KEY `kategori_id` (`kategori_id`);

--
-- Indeks untuk tabel `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Indeks untuk tabel `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`id_stok`),
  ADD KEY `produk_id` (`produk_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  MODIFY `id_pencatatan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `pengembalian_produk`
--
ALTER TABLE `pengembalian_produk`
  MODIFY `id_pengembalian` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `stok`
--
ALTER TABLE `stok`
  MODIFY `id_stok` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `stok`
--
ALTER TABLE `stok`
  ADD CONSTRAINT `stok_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id_produk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
