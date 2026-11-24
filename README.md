# Magenta

Web de eventos, carta y reservas para Magenta, pub de Almussafes (Valencia). Proyecto final de 2.º DAW, curso 2026–2027.

Autor: Óscar Mas Palomino · Tutor: Jose Sebastia Ortega · IES San Vicent Ferrer

## Estado

Entrega 2 (diseño). Todavía no hay código de servidor: el repositorio contiene los prototipos de pantalla en HTML, CSS y JavaScript, el sistema de diseño y la documentación.

## Documentación

- `docs/Entrega 2 - Diseno.pdf`: modelo de datos, arquitectura, roles, API, prototipos, ampliaciones, calendario y uso de IA.
- `Propuesta Proyecto Magenta.dc.html`: propuesta aprobada (entrega 1).
- `Modelo de datos.dc.html`, `Arquitectura.dc.html`, `Roles y permisos.dc.html`, `API.dc.html`: diagramas y tablas.
- `CHANGELOG.md`: registro de cambios.

## Prototipos

Se abren directamente en el navegador desde un servidor local (por ejemplo, la extensión Live Server de VS Code). Versión elegida: v2.

- Web pública: `Magenta Web v2`, `Entradas v2`, `Vuelta del pago`, `Baja newsletter`, `Textos legales`, `Pagina 404`
- Personal: `Inicio de sesion`, `Portero - Lector QR`, `Portero - Reservas`
- Panel: `Admin - Inicio`, `Admin - Eventos`, `Admin - Carta`, `Admin - Reservas`, `Admin - Imagenes`, `Admin - Personal`
- `Correos y PDF`

Las versiones v1, v3 y v4 se conservan como descartes.

## Tecnología prevista

Laravel 11 (PHP 8.3), MySQL 8, JavaScript sin framework, Stripe Checkout en modo pruebas. Despliegue en un VPS Hetzner CX23 con Ubuntu 24.04, Nginx y HTTPS. Desarrollo con Docker (Laravel Sail).

## Ramas

- `main`: producción
- `develop`: integración
- una rama por funcionalidad, que se une a `develop` al terminar
