-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 12, 2023 at 05:28 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_js`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `studentsID` text DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Class` varchar(50) DEFAULT NULL,
  `ID` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`studentsID`, `FirstName`, `LastName`, `Email`, `Gender`, `Class`, `ID`) VALUES
('STUDENT:a5a9b7424e6a4bb4921889937c360acf', 'សុខសោភា', 'មាស', 'meas.soksophea@gmail.com', 'ស្រី', 'WEB-B', 'WEB-2021'),
('STUDENT:c019377ee5af419e871c12922903a2e6', 'ភារ៉ុន', 'រ៉ាត់', 'rath.phearun@gmail.com', 'ប្រុស', 'SNA', 'SNA-009'),
('STUDENT:7c3f67fd9f6c44ab89d73ff7f236c883', 'សុខនឿន', 'ស្រ៊ុន', 'srun.soknoeurn@gmail.com', 'ស្រី', 'WEB-A', '២០២៣-០៣៥'),
('STUDENT812ec4db8a2d45cdba84827ee88a3676', 'ជុំ', 'យឿន', 'chum.yoeurn@student.passerellesnumeriques.org', 'ប្រុស', 'WEB-A', '២០២១-០០៧');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
