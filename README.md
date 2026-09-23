# Lazos · app

Interfaz web de Lazos. Se sirve como sitio estático desde GitHub Pages.

Los datos no viven aquí: están en Supabase, protegidos por Row Level
Security. La página pide la cartera completa y la base devuelve únicamente
las filas que le corresponden a quien inició sesión.

## Configuración

`config.js` guarda la URL del proyecto y la llave `anon` de Supabase.

Esa llave es **pública por diseño**: viaja dentro de la aplicación y
cualquiera que abra la página puede verla. No es un secreto y no necesita
serlo, porque por sí sola no abre nada: sin una sesión iniciada, las
políticas de la base no entregan ni una fila.

La llave `service_role` es otra cosa y **nunca** va en este repositorio.
