-- phpMyAdmin SQL Dump
-- version 5.2.2-1.fc42
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-07-2025 a las 20:04:53
-- Versión del servidor: 10.11.11-MariaDB
-- Versión de PHP: 8.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `aprendiz` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `fechanace` date NOT NULL,
  `email` varchar(200) NOT NULL,
  `foto` varchar(200) NOT NULL DEFAULT 'foto.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `aprendiz`
--

INSERT INTO `aprendiz` (`codigo`, `nombre`, `apellidos`, `fechanace`, `email`, `foto`) VALUES
(1, 'Jose', 'Perez Gomez', '2002-07-15', 'jperez@gmail.com', ''),
(2, 'Cristiano', 'ronaldo', '2006-01-20', 'ronaldo@gmail.com', 'foto.jpg'),
(6, 'marino', 'ronaldo', '2006-01-20', 'marino@gmail.com', 'foto.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `user_email` varchar(200) DEFAULT NULL,
  `user_nombre` varchar(150) DEFAULT NULL,
  `user_apellido` varchar(200) DEFAULT NULL,
  `user_password` varchar(256) DEFAULT NULL,
  `user_foto` varchar(256) NOT NULL DEFAULT 'user.jpg',
  `user_telefono` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aprendiz`
--
ALTER TABLE `aprendiz`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);


ALTER TABLE `aprendiz`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;


ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


CREATE TABLE `ficha` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `jornada` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
