-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2020 a las 20:48:16
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dblaboratorio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `tipoSangre` varchar(10) NOT NULL,
  `experiencia` int(11) NOT NULL,
  `fechaNacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`id`, `idHospital`, `nombre`, `direccion`, `telefono`, `tipoSangre`, `experiencia`, `fechaNacimiento`) VALUES
(28, 1, 'Howard lovecraft', 'cll 7X #13 106', '3666443203', 'O-', 5, '2020-05-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `nit` varchar(50) NOT NULL,
  `nombrerep` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hospital`
--

INSERT INTO `hospital` (`id`, `nombre`, `telefono`, `direccion`, `nit`, `nombrerep`) VALUES
(1, 'Hospital Umbrella', '32222222', 'Cr 24Z #193 26', '123456789019', 'German Vega');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `eps` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `nombreAcompanante` varchar(50) NOT NULL,
  `telefonoAcompanante` varchar(50) NOT NULL,
  `antecedentes` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `eps`, `direccion`, `nombreAcompanante`, `telefonoAcompanante`, `antecedentes`) VALUES
(1, 'German', 'Sura', 'Cr 24Z #193 26', 'Anne hathaway', '32222222', 'ninguno'),
(3, 'gewrw', 'option', '321', 'tod', '32223234', 'Ninguno '),
(4, 'jod', 'option', 'cr74', 'gdgasd', '3623626', 'Ninguno '),
(6, 'Massi', 'option', 'cr26 #17 21', 'gdgasd', '32223234', 'Si'),
(7, 'German Vega', 'option', 'cr4 #42 76', 'anne hathaway', '312578769', 'Ninguno '),
(10, 'jesus', 'option', 'cr1#11 1', '', '311111111', 'Si'),
(11, 'dsad', 'option', '32134575', 'eddy', '32223234', 'Ninguno '),
(12, 'wfewfew', 'option', 'cr74', 'ted', '32223234', 'Ninguno '),
(14, 'messi', 'option', 'Cll 7', 'tod', '3222222', 'Ninguno '),
(15, 'maradona', 'option', 'cr 72 # 24 15', 'messi', '315440003', 'Ninguno '),
(17, 'thor', 'VIVA1A', 'Cll 127 Olimpo', 'loki', '31212121', 'Ninguno '),
(65, 'mario', 'COOMEVA', 'cr74', 'ted', '32223234', 'Ninguno '),
(66, 'mario2', 'COOMEVA', 'cr74', 'gdgasd', '3222222', 'Si'),
(67, 'wafer', 'COOMEVA', 'cr34', 'oreo', '32223234', 'Si'),
(69, 'gewrw', 'SUSALUD', 'cr56 #17 21', 'Ramona', '32223234', 'carcel'),
(71, 'cano', 'VIVA1A', 'cr56 #17 21', 'messi', '3623626', 'Ninguno '),
(72, 'Junior', 'SURA', 'Cr 24Z #193 26', 'Anne', '32222222', 'Si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `triage`
--

CREATE TABLE `triage` (
  `idT` int(11) NOT NULL,
  `idDoctor` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  `motivo` text NOT NULL,
  `diagnostico` text NOT NULL,
  `requiereMedicina` varchar(50) NOT NULL,
  `covid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idHospital` (`idHospital`) USING BTREE;

--
-- Indices de la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `triage`
--
ALTER TABLE `triage`
  ADD PRIMARY KEY (`idT`),
  ADD KEY `idDoctor` (`idDoctor`) USING BTREE,
  ADD KEY `idPaciente` (`idPaciente`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `hospital`
--
ALTER TABLE `hospital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `triage`
--
ALTER TABLE `triage`
  MODIFY `idT` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`idHospital`) REFERENCES `hospital` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `triage`
--
ALTER TABLE `triage`
  ADD CONSTRAINT `triage_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `triage_ibfk_2` FOREIGN KEY (`idDoctor`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
