-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Des 2020 pada 17.52
-- Versi server: 10.1.37-MariaDB
-- Versi PHP: 7.4.13

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
(6, 'A1', 'Makanan'),
(7, 'B1', 'Minuman');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pencatatan_produk`
--

CREATE TABLE `pencatatan_produk` (
  `id_pencatatan` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `jml_produk` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pencatatan_produk`
--

INSERT INTO `pencatatan_produk` (`id_pencatatan`, `status_id`, `produk_id`, `jml_produk`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 10, '2020-12-10 16:35:53', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengembalian_produk`
--

CREATE TABLE `pengembalian_produk` (
  `id_pengembalian` int(11) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `jml_produk` int(11) NOT NULL,
  `tgl_pengajuan` date NOT NULL,
  `tgl_pengembalian` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pengembalian_produk`
--

INSERT INTO `pengembalian_produk` (`id_pengembalian`, `produk_id`, `keterangan`, `jml_produk`, `tgl_pengajuan`, `tgl_pengembalian`, `created_at`, `updated_at`) VALUES
(1, 1, 'rusak', 10, '2020-09-03', '2020-10-02', '2020-12-10 09:55:18', '2020-12-10 15:53:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id_produk` bigint(20) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `kode_produk` varchar(200) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `deskripsi_produk` varchar(255) NOT NULL,
  `merk_produk` varchar(255) NOT NULL,
  `tgl_produksi` date NOT NULL,
  `tgl_kadaluarsa` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id_produk`, `kategori_id`, `kode_produk`, `nama_produk`, `deskripsi_produk`, `merk_produk`, `tgl_produksi`, `tgl_kadaluarsa`, `created_at`, `updated_at`) VALUES
(1, 6, 'AA', 'Oreo Vanilla', 'Biskuit coklat dengan krim putih di tengahnya', 'Oreo', '2020-12-02', '2021-12-12', '2020-12-01 17:12:18', '2020-12-10 09:53:00'),
(5, 6, 'A55', 'Indomie Goreng Rasa Bawang', 'Mie instan cepat saji rasa bawang', 'Indomie', '2020-02-04', '2021-02-04', '2020-12-01 17:13:38', '2020-12-01 17:13:38'),
(15, 7, 'A22', 'Ultramilk Vanilla', 'Roti rasa cokelat', 'Ultramilk', '2020-12-11', '2021-12-11', '2020-12-10 17:50:26', '2020-12-10 17:50:26'),
(16, 6, 'A33', 'Sari Roti Cokelat', 'Roti rasa cokelat', 'Sari Roti', '2020-12-11', '2020-12-17', '2020-12-10 17:50:26', '2020-12-10 17:50:26'),
(19, 7, 'A44', 'Air Mineral', 'Air Mineral isi 60 ml', 'Aqua', '2020-12-11', '2021-12-11', '2020-12-10 17:51:41', '2020-12-10 17:51:41'),
(20, 6, 'A51', 'Mie Sedap Goreng Rasa Bawang', 'Mie instan cepat saji rasa bawang', 'Indofood', '2020-12-11', '2022-12-11', '2020-12-10 17:51:41', '2020-12-10 17:52:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `kode_status` varchar(255) NOT NULL,
  `nama_status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `status`
--

INSERT INTO `status` (`id_status`, `kode_status`, `nama_status`, `created_at`, `updated_at`) VALUES
(1, 'pd', 'Pending', '2020-12-01 17:08:27', '0000-00-00 00:00:00'),
(2, 'sc', 'Berhasil', '2020-12-01 17:08:27', '0000-00-00 00:00:00'),
(3, 'gl', 'Gagal', '2020-12-01 17:09:26', '0000-00-00 00:00:00');

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `stok`
--

INSERT INTO `stok` (`id_stok`, `produk_id`, `jml_stok`, `jml_prd_bagus`, `jml_prd_cacat`, `created_at`, `updated_at`) VALUES
(4, 1, 100, 100, 0, '2020-12-10 07:41:37', '2020-12-10 07:41:37'),
(5, 1, 100, 100, 0, '2020-12-10 07:52:40', '2020-12-10 07:52:40');

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
  ADD PRIMARY KEY (`id_pencatatan`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `pencata_produk_ibfk_2` (`produk_id`);

--
-- Indeks untuk tabel `pengembalian_produk`
--
ALTER TABLE `pengembalian_produk`
  ADD PRIMARY KEY (`id_pengembalian`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD UNIQUE KEY `kode_produk` (`kode_produk`),
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
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  MODIFY `id_pencatatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `pengembalian_produk`
--
ALTER TABLE `pengembalian_produk`
  MODIFY `id_pengembalian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `stok`
--
ALTER TABLE `stok`
  MODIFY `id_stok` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  ADD CONSTRAINT `pencata_produk_ibfk_2` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id_produk`),
  ADD CONSTRAINT `pencatatan_produk_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id_status`);

--
-- Ketidakleluasaan untuk tabel `pengembalian_produk`
--
ALTER TABLE `pengembalian_produk`
  ADD CONSTRAINT `pengembalian_produk_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id_produk`);

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
