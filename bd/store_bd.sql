-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 15-06-2018 a las 23:51:28
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `store_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrusel`
--

CREATE TABLE `carrusel` (
  `id_imagen` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `ruta` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'usuario', 'usuario basico, es el usuario principal, puede crear perfiles y subir sus datos personales'),
(2, 'empresa', 'usuario que vende productos'),
(3, 'administrador', 'usuario con todos los permisos que administra toda la pagina ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(20) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_tipo_perfil` int(11) NOT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `verificado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `usuario`, `email`, `password`, `id_tipo_perfil`, `foto_perfil`, `verificado`) VALUES
(1, 'pag', 'pagdev@gmail.com', '$2b$10$vx1EG6hjTSbLm/NgjgsmGeR8gw71YXUQ8YHP12PP0AwtEYkoSbpTK', 1, '../../../static/generico.jpg', 0),
(4, 'usuario1', 'usuario1@gmail.com', '$2b$10$2pQbh.vyBr4MryGY2uTga.cKppF.4qOD1hM1RTFPwbLqMrAbW8scK', 1, NULL, 0),
(5, 'user', 'user@gmail.com', '$2b$10$Bp9AtA2h/6jaOybqnhgd6.8eF6uyn8SbL/3QwaNa9LPtjFGLKFjXG', 1, NULL, 0),
(6, 'usuario3', 'usuario3@gmail.com', '$2b$10$4nhoHfUbZC5qg0so2B6i0ucHkceHe7IOv0jmcVL.yJEhxOXmTVNt.', 2, NULL, 0),
(7, 'usuario4', 'usuario4@gmail.com', '$2b$10$zHrcAFFm1qXjCzJKie24COAcoNGJ4N3aQuHxfA2E4TKi9Wucmcghq', 2, NULL, 0),
(8, 'usuario5', 'usuario5@gmail.com', '$2b$10$BS3EmfKHFs.BpIVT/G3/D.Y7bTYyMSWfj3lt.BdHqiq113tLVaRB.', 2, NULL, 0),
(9, 'usuario6', 'usuario6@gmail.com', '$2b$10$L1zOdkfNxALK6Wkw7OG8juWixIVoZL8Vmv.UHdp0PgG8TEWZskrly', 2, NULL, 0),
(10, 'usuarioP', 'usuarioP@gmail.com', '$2b$10$kYk1O0WppkEJiAeaGCAXWelYkcYh6rU3tWgUvQ8NSnNuEeoSBGWWO', 1, '../../../static/generico.jpg', 0),
(11, 'prueba1', 'prueba1@gmail.com', '$2b$10$x/sGvzhfWFf6NesCiFoOqOmzHV3O3yT.lRvanIKKLVNEsi3B1hXrC', 2, '../../../static/generico.jpg', 0),
(12, 'prueba2', 'prueba2@gmail.com', '$2b$10$Suq2KcWe0tIgrLVK/fw8pOXn8jz8mkokHl3vPQXTihtEFwJptzx9O', 1, '../../../static/generico.jpg', 0),
(13, 'prueba3', 'prueba3@gmail.com', '$2b$10$rlp.IYkqqy8AbRO/a1CM1etqgbTkDIHJxNCKDV84nkFRaZVvS/KV2', 1, '../../../static/generico.jpg', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  ADD PRIMARY KEY (`id_imagen`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `perfil_user` (`id_tipo_perfil`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  MODIFY `id_imagen` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
