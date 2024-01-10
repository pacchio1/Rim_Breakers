-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2024 at 07:35 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rimbreakers`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `ID_blog` int(11) NOT NULL,
  `ID_user` int(11) NOT NULL,
  `testo` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id_country` int(11) NOT NULL,
  `ID_league` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `type` varchar(15) NOT NULL,
  `code` varchar(4) NOT NULL,
  `flag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `ID_games` int(11) NOT NULL,
  `ID_league` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` text NOT NULL,
  `ID_home` int(11) NOT NULL,
  `score_home` text NOT NULL,
  `ID_away` int(11) NOT NULL,
  `score_away` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `league`
--

CREATE TABLE `league` (
  `ID_league` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `type` varchar(15) NOT NULL,
  `logo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaguefollowed`
--

CREATE TABLE `leaguefollowed` (
  `ID_user` int(11) NOT NULL,
  `ID_league` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `playerfollowed`
--

CREATE TABLE `playerfollowed` (
  `ID_user` int(11) NOT NULL,
  `ID_player` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `ID_player` int(11) NOT NULL,
  `season` varchar(9) NOT NULL,
  `name` varchar(35) NOT NULL,
  `surname` varchar(40) NOT NULL,
  `weight` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `ID_country` int(11) NOT NULL,
  `mesh_number` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `played_min` int(11) NOT NULL,
  `point_scored` int(11) NOT NULL,
  `assist` int(11) NOT NULL,
  `ID_team` int(11) NOT NULL,
  `shots` int(11) NOT NULL,
  `shots_2` int(11) NOT NULL,
  `shots_3` int(11) NOT NULL,
  `free_trows` int(11) NOT NULL,
  `ball_holding_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `standings`
--

CREATE TABLE `standings` (
  `ID_league` int(11) NOT NULL,
  `season` varchar(11) NOT NULL,
  `position` int(11) NOT NULL,
  `group_name` varchar(15) NOT NULL,
  `ID_team` int(11) NOT NULL,
  `played` int(11) NOT NULL,
  `win` int(11) NOT NULL,
  `perc_win` float NOT NULL,
  `lose` int(11) NOT NULL,
  `perc_lose` float NOT NULL,
  `points_for` int(11) NOT NULL,
  `points_against` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `ID_team` int(11) NOT NULL,
  `ID_league` int(11) NOT NULL,
  `ID_country` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `logo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teamfollowed`
--

CREATE TABLE `teamfollowed` (
  `ID_user` int(11) NOT NULL,
  `ID_team` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID_user` int(11) NOT NULL,
  `name` varchar(11) NOT NULL,
  `surname` varchar(11) NOT NULL,
  `email` varchar(11) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`ID_blog`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id_country`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`ID_games`);

--
-- Indexes for table `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`ID_league`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`ID_player`,`season`,`name`,`surname`);

--
-- Indexes for table `standings`
--
ALTER TABLE `standings`
  ADD PRIMARY KEY (`ID_league`,`season`,`ID_team`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`ID_team`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `ID_player` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_user` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
