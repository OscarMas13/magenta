# Registro de cambios — Magenta

Cada vez que hagamos un cambio, se apunta aquí arriba del todo y después se sube a GitHub con un commit.

## [0.27.0] — 2026-11-12
### Añadido
- «Correos y PDF»: correos de entradas, reserva aceptada, reserva rechazada y nuevo evento (con enlace de baja), PDF de la entrada con QR real y lista del plan B para el portero.
### Corregido
- Diálogos del panel con esquinas normales (antes salían ovalados).

## [0.26.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Personal»: alta por invitación (enlace de contraseña de 24 h), editar nombre, email y rol, activar o desactivar sin borrar y restablecer contraseña. No puedes desactivarte ni quitar al último admin.

## [0.25.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Imágenes»: subir con botón o arrastrando (JPG, PNG, WebP, máx. 5 MB, mín. 1200 px), filtros por uso, detalle con tamaños generados y dónde se usa. Solo se pueden borrar las que no se usan.

## [0.24.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Reservas»: pestañas Pendientes, Aceptadas y Rechazadas, agrupadas por día con el aforo de terraza (60). Aceptar envía correo; rechazar pide un motivo. Aviso si se supera el aforo y opción de deshacer.

## [0.23.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Carta»: pestañas Pijoteo y Cócteles, edición en la propia fila (nombre, precio, descripción), ordenar con flechas, ocultar sin borrar y eliminar con confirmación.

## [0.22.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Eventos»: lista con filtros (publicados, borradores, pasados) y edición en la misma pantalla. Datos, cartel, tipos de entrada (no se borran ni bajan de lo vendido), aviso de aforo y aviso a suscriptores una sola vez por evento. Guardar borrador / Publicar.

## [0.21.0] — 2026-11-12
### Añadido
- Pantalla «Admin · Inicio» (oscura, estilo v2): menú lateral del panel, aviso de reservas por responder, próxima noche con aforo vendido e ingresos, ventas de los últimos 7 días y próximos eventos.

## [0.20.0] — 2026-11-12
### Añadido
- Pantalla «Portero · Reservas de hoy» (móvil): reservas aceptadas de la terraza, búsqueda por nombre o últimos 3 del teléfono, filtros, botón «Llegó» con deshacer, aviso de retraso a partir de 15 min y contador de personas.

## [0.19.0] — 2026-10-30
### Añadido
- Pantalla «Portero · Lector QR» (móvil): visor con escaneo simulado, código a mano, contador de gente dentro, últimos escaneos y resultado a pantalla completa (válida, ya usada, otra noche, no existe). Descarga de la lista en PDF.
### Cambiado
- Modelo: entradas.codigo_qr pasa a CHAR(12) para poder escribirlo a mano (formato 7K2Q-D9XA-M3PF).

## [0.18.0] — 2026-10-30
### Añadido
- Pantalla «Inicio de sesión» del personal (oscura, estilo v2): errores por campo y estados de credenciales incorrectas, bloqueo tras 5 intentos y cuenta desactivada. Redirige al portero o al panel según el rol.

## [0.17.1] — 2026-10-30
### Cambiado
- La lista del plan B se descarga en PDF (laravel-dompdf).
- Se decide no reenviar entradas desde el panel.
- Correos previstos: entradas en PDF, reserva aceptada, reserva rechazada, recordatorio 24 h y aviso de evento nuevo.

## [0.17.0] — 2026-10-30
### Añadido
- Página 404 (estilo v2): mensaje, botones a la web y a la agenda, la próxima noche con entradas y enlaces a las secciones.
### Corregido
- Textos legales: las tablas usan columnas proporcionales y ya no aprietan la descripción.

## [0.16.0] — 2026-10-30
### Añadido
- Pantalla «Textos legales» (estilo v2): privacidad, aviso legal, cookies y condiciones de compra en una sola plantilla con índice.

## [0.15.0] — 2026-10-30
### Añadido
- Pantalla «Baja de la newsletter» (estilo v2) con tres estados: baja hecha, vuelta a apuntarse y enlace no válido.
### Corregido
- Entradas v2: el bloque del evento ya no tapa los pasos en pantallas de una columna.

## [0.14.0] — 2026-10-30
### Añadido
- «Entradas v2»: compra de entradas con el estilo de la v2. Pasos Entradas → Datos → Pago (Stripe), errores junto a cada campo, máximo 10 entradas y botón «Ir al pago» que lleva a la vuelta del pago.
### Cambiado
- La agenda de la v2 y la vuelta del pago enlazan a «Entradas v2». La versión anterior se conserva.

## [0.13.0] — 2026-10-30
### Añadido
- Pantalla «Vuelta del pago» (estilo v2) con cuatro estados: pagada, pendiente (se confirma sola), cancelada y caducada. Se elige con ?estado= o con el ajuste «estado».

## [0.12.2] — 2026-10-30
### Cambiado
- Las entradas se envían por correo en PDF; se quita la página «Mis entradas».
- Modelo: se quita compras.token_acceso y pago_ref pasa a ser único.
- API: GET /compras/{token} pasa a GET /compras/estado?sesion= (sin QR).
- Arquitectura: laravel-dompdf para generar el PDF de las entradas.

## [0.12.1] — 2026-10-30
### Cambiado
- Se elige la v2 como diseño base de la web.
- v2: el email es obligatorio en la reserva de mesa y la confirmación se envía por correo.

## [0.12.0] — 2026-10-30
### Añadido
- La API (entrega 2): rutas previstas con método, qué hace, rol y respuestas, códigos HTTP y decisiones.

## [0.11.0] — 2026-10-30
### Añadido
- Roles y permisos (entrega 2): tabla de visitante, portero y admin, con cómo se comprueba cada permiso.
### Cambiado
- Modelo de datos: se quita «anulada» de entradas.estado y se añade eventos.avisado_en.

## [0.10.0] — 2026-10-30
### Añadido
- Arquitectura (entrega 2): diagrama de cliente, API, servidor, base de datos, servicios externos y entornos, con la tecnología de cada capa y el flujo de una compra.

## [0.9.0] — 2026-10-30
### Añadido
- Modelo de datos (entrega 2): diagrama entidad-relación con 13 tablas en notación pata de gallo, valores ENUM y justificación.
### Cambiado
- Se quita el «Pack 4 amigos» de la compra de entradas.
- Las entradas dejan de ser nominativas.
- v4: el email es obligatorio en la reserva de mesa.

## [0.8.1] — 2026-10-17
### Cambiado
- v4: «Próximas noches» pasa a la lista de eventos en filas de la v1 (fecha, imagen, título, precio y flecha).

## [0.8.0] — 2026-10-17
### Añadido
- «Magenta Web v4»: la estructura de v3 con estilo de discoteca, más juvenil: fondo negro, titulares gigantes en mayúsculas, foto de pista en el banner, cinta de eventos en movimiento, fechas enormes en los carteles y componentes del sistema de diseño Magenta.
- v1, v2 y v3 se conservan sin cambios.

## [0.7.0] — 2026-10-16
### Añadido
- «Magenta Web v3»: tercer diseño hecho desde cero (tipografía Instrument Serif + Instrument Sans, fondo claro, botones rectos).
- Explorador «a esta hora»: eliges día y hora y la sección cambia de color de la tarde a la madrugada y dice si está abierto y qué hay.
- Agenda con carteles que se apilan al hacer scroll, reserva escrita como una frase y mapa en «Cómo llegar».
- v1 y v2 se conservan sin cambios.

## [0.6.0] — 2026-10-16
### Añadido
- «Magenta Web v2»: rediseño completo de la web. La versión anterior se conserva en «Magenta Web.dc.html» y en «Magenta Web v1 (copia).dc.html».
- Estado en vivo en el banner (abierto ahora / hora de apertura) y el evento de esta noche.
- Reserva de mesa dentro de la página: las horas disponibles cambian según el horario del día elegido.
- Horario semanal con el día de hoy destacado.
### Cambiado
- Agenda en lista con fechas grandes, carta completa en dos columnas (Pijoteo y Cócteles), botones redondos.
- Fechas de los eventos de ejemplo actualizadas a partir del 16 de octubre y horario de DJ 23:00 → 03:30.

## [0.5.3] — 2026-10-01
### Documentación
- La versión en inglés pasa de «lo que queda fuera» al alcance (entrega 5).

## [0.5.2] — 2026-10-01
### Cambiado
- Horario actualizado en la web y en la propuesta: LUN–JUE 18:00–22:30, VIE–SÁB 17:00–03:30, DOM 17:00–01:00.

## [0.5.1] — 2026-10-01
### Documentación
- Propuesta reescrita según el guion del profesor: organización, necesidad, alcance, lo que queda fuera, qué pasa si falla, las 9 piezas en una línea, ampliaciones, datos personales y calendario de 5 entregas.

## [0.5.0] — 2026-10-01
### Cambiado
- Web adaptada a móvil: menú desplegable con icono de hamburguesa, logo y barra más pequeños, agenda en carrusel a casi todo el ancho, pie e información en una columna y avisos ajustados a la pantalla.
- Página de entradas adaptada a móvil: cabecera compacta que solo muestra el paso actual.

## [0.4.0] — 2026-10-01
### Documentación
- Propuesta del proyecto final con los 9 puntos obligatorios y 3 ampliaciones: panel de administración con estadísticas, notificaciones por correo y carga de imágenes.
- Se quita el rol «cliente»: el público no inicia sesión y solo deja sus datos al comprar o reservar. Roles: portero y administrador.
- Se quitan los pedidos: la carta es solo informativa.
- Se añade un premortem al plan de pruebas.

## [0.3.0] — 2026-09-30
### Añadido
- Página de compra de entradas en tres pasos (elegir entradas, datos y confirmación), con «Otras fechas» al final.
- Animaciones: aparición al hacer scroll, zoom lento del banner, transición en la carta y balanceo del botón de entradas. Se desactivan con «reducir movimiento».
### Cambiado
- La agenda abre la página de entradas en lugar de una ventana emergente.
- El botón «Entradas» del menú tiene forma de ticket.
- Se quita «Comprar entradas» del banner.

## [0.2.0] — 2026-09-28
### Añadido
- Sección «La carta» con pestañas Pijoteo y Cócteles.
- Sección «El pub» con una frase, un párrafo y cuatro huecos para fotos.
### Cambiado
- La sección VIP pasa a ser «Terraza», con su foto y reserva de mesa en terraza o interior.
- Nuevas fotos en el banner y en la terraza.

## [0.1.0] — 2026-09-25
### Añadido
- Primera versión de la web: banner, agenda con filtro por género, información práctica y pie con newsletter.
- Sistema de diseño Magenta (colores, tipografía y componentes a partir del logo).
### Cambiado
- Barra de menú más alta y logo más grande.
- Esquinas redondeadas en botones y cajas.
