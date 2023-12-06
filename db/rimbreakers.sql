-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 06, 2023 alle 15:27
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

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
-- Struttura della tabella `country`
--

CREATE TABLE `country` (
  `id_country` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `code` varchar(4) NOT NULL,
  `flag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `games`
--

CREATE TABLE `games` (
  `ID_games` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `league`
--

CREATE TABLE `league` (
  `ID_league` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `type` varchar(15) NOT NULL,
  `season` varchar(15) NOT NULL,
  `logo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `season`
--

CREATE TABLE `season` (
  `ID` int(11) NOT NULL,
  `season` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `standings`
--

CREATE TABLE `standings` (
  `ID_league` int(11) NOT NULL,
  `ID_season` int(15) NOT NULL,
  `played` int(11) NOT NULL,
  `win` text NOT NULL,
  `lose` text NOT NULL,
  `points` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `team`
--

CREATE TABLE `team` (
  `ID_team` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `logo` varchar(15) NOT NULL,
  `teams` text NOT NULL,
  `score` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `ID_utente` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `surname` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id_country`);

--
-- Indici per le tabelle `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`ID_games`);

--
-- Indici per le tabelle `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`ID_league`);

--
-- Indici per le tabelle `season`
--
ALTER TABLE `season`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `standings`
--
ALTER TABLE `standings`
  ADD PRIMARY KEY (`ID_league`,`ID_season`),
  ADD KEY `ID_season` (`ID_season`);

--
-- Indici per le tabelle `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`ID_team`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `standings`
--
ALTER TABLE `standings`
  ADD CONSTRAINT `standings_ibfk_1` FOREIGN KEY (`ID_league`) REFERENCES `league` (`ID_league`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `standings_ibfk_2` FOREIGN KEY (`ID_season`) REFERENCES `season` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
