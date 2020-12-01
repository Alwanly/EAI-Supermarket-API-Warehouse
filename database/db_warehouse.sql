-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Des 2020 pada 18.14
-- Versi server: 10.1.37-MariaDB
-- Versi PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Struktur dari tabel `pencatatan_produk`
--

CREATE TABLE `pencatatan_produk` (
  `id_pencatatan` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `jml_produk` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  ADD PRIMARY KEY (`id_pencatatan`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `pencata_produk_ibfk_2` (`produk_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  MODIFY `id_pencatatan` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pencatatan_produk`
--
ALTER TABLE `pencatatan_produk`
  ADD CONSTRAINT `pencata_produk_ibfk_2` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id_produk`),
  ADD CONSTRAINT `pencatatan_produk_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id_status`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
