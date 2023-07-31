-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2023 at 05:41 AM
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
-- Database: `aplicacion`
--

-- --------------------------------------------------------

--
-- Table structure for table `formularios`
--

CREATE TABLE `formularios` (
  `id` int(15) NOT NULL,
  `usuario_creador` int(15) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_modificacion` date NOT NULL,
  `fecha_creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formularios`
--

INSERT INTO `formularios` (`id`, `usuario_creador`, `titulo`, `descripcion`, `fecha_modificacion`, `fecha_creacion`) VALUES
(1, 3, 'Prueba de Azulejos', 'Los azulejos son aves....', '2023-07-11', '2023-07-01');

-- --------------------------------------------------------

--
-- Table structure for table `informacion_res`
--

CREATE TABLE `informacion_res` (
  `id` int(15) NOT NULL,
  `usuario_respuesta` int(15) NOT NULL,
  `formulario` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `informacion_res`
--

INSERT INTO `informacion_res` (`id`, `usuario_respuesta`, `formulario`) VALUES
(1, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(15) NOT NULL,
  `pregunta` text NOT NULL,
  `formulario` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `formulario`) VALUES
(1, '¿Cuántas horas duerme un azulejo?', 1),
(2, 'Descripcion de un azulejo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(15) NOT NULL,
  `informacion` int(15) NOT NULL,
  `pregunta` int(15) NOT NULL,
  `respuesta` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(15) NOT NULL,
  `usuario_unico` varchar(20) NOT NULL,
  `contrasena` varchar(1000) NOT NULL,
  `correo` varchar(1000) NOT NULL,
  `n_telefonico` int(15) NOT NULL,
  `edad` int(15) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario_unico`, `contrasena`, `correo`, `n_telefonico`, `edad`, `fecha_nacimiento`) VALUES
(3, 'Pepito', '$2a$08$w52mEOX45YKrh6GvKf79YuKp1aaD72EskmOcyagwdtcDS3ITOs53q', 'pepito@gmail.com', 0, 18, '2023-07-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formularios`
--
ALTER TABLE `formularios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_creador` (`usuario_creador`);

--
-- Indexes for table `informacion_res`
--
ALTER TABLE `informacion_res`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_respuesta` (`usuario_respuesta`),
  ADD KEY `formulario` (`formulario`);

--
-- Indexes for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `formulario` (`formulario`);

--
-- Indexes for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `informacion` (`informacion`,`pregunta`),
  ADD KEY `pregunta` (`pregunta`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formularios`
--
ALTER TABLE `formularios`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `informacion_res`
--
ALTER TABLE `informacion_res`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `formularios`
--
ALTER TABLE `formularios`
  ADD CONSTRAINT `formularios_ibfk_1` FOREIGN KEY (`usuario_creador`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `informacion_res`
--
ALTER TABLE `informacion_res`
  ADD CONSTRAINT `informacion_res_ibfk_2` FOREIGN KEY (`formulario`) REFERENCES `formularios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `informacion_res_ibfk_3` FOREIGN KEY (`usuario_respuesta`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`formulario`) REFERENCES `formularios` (`id`);

--
-- Constraints for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`pregunta`) REFERENCES `preguntas` (`id`),
  ADD CONSTRAINT `respuestas_ibfk_2` FOREIGN KEY (`informacion`) REFERENCES `informacion_res` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
