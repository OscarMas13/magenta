# Guía rápida: subir el proyecto a GitHub

No hace falta usar la terminal. Usaremos **GitHub Desktop**, que hace lo mismo con botones.

## 1. Preparar (solo la primera vez)
1. Crea una cuenta en https://github.com
2. Instala GitHub Desktop: https://desktop.github.com e inicia sesión con tu cuenta.
3. Aquí, descarga el proyecto entero (te paso el ZIP) y descomprímelo en una carpeta, por ejemplo `Documentos/magenta`.

## 2. Crear el repositorio (solo la primera vez)
1. En GitHub Desktop: **File → Add local repository** y elige la carpeta `magenta`.
2. Te dirá que no es un repositorio: pulsa **create a repository**.
3. Nombre: `magenta`. Pulsa **Create repository**.
4. Arriba pulsa **Publish repository**. Puedes dejarlo privado y dar acceso a tu tutor más tarde.

## 3. Cada vez que hagamos cambios
1. Descarga de nuevo el proyecto y copia los archivos encima de los de tu carpeta `magenta` (reemplazar).
2. Abre GitHub Desktop: a la izquierda verás los archivos que han cambiado.
3. Abajo a la izquierda, en **Summary**, escribe el mensaje del commit. Al final de cada cambio te dejo uno sugerido.
4. Pulsa **Commit to main** y luego **Push origin**.

## Cómo escribir los mensajes de commit
Empieza con un prefijo y describe el cambio en pocas palabras:
- `feat:` algo nuevo → `feat: añadir sección de la carta`
- `fix:` un arreglo → `fix: iconos que no cargaban`
- `style:` cambio visual → `style: redondear botones`
- `docs:` documentación → `docs: añadir premortem a la propuesta`

## Consejos para la nota
- Haz commits pequeños y a menudo. El tribunal valora ver el avance semana a semana.
- Cuando cierres una etapa, crea una **etiqueta** (versión): en GitHub, **Releases → Create a new release**, con el número del CHANGELOG (por ejemplo `v0.4.0`).
- Más adelante, cuando programes el servidor, conviene trabajar con ramas (una por funcionalidad). Ya te lo explicaré cuando llegue el momento.
