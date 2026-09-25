# Juan David Ducuara - Portafolio Web

Portafolio profesional bilingüe (español / inglés) que muestra mi experiencia como Desarrollador Full Stack: experiencia laboral, un caso de estudio de mi proyecto actual, habilidades técnicas, estudios y contacto.

**[Ver portafolio en vivo](https://juandaducuara.github.io/portafolioweb-juan-ducuara)**

## Características

- **Bilingüe ES / EN**: selector de idioma en la barra de navegación. La elección se recuerda entre visitas y el sitio abre en inglés si el navegador del visitante está en inglés.
- **Pensado para reclutadores**: nombre, rol y botón para descargar la hoja de vida desde la portada; la experiencia aparece antes que los estudios.
- **Experiencia en timeline**: cada cargo muestra primero sus logros clave; las funciones completas se despliegan bajo demanda.
- **Caso de estudio**: reto, solución, arquitectura, decisiones técnicas y métricas de un proyecto con código confidencial.
- **Contacto directo**: enlaces a correo, LinkedIn, GitHub y hoja de vida en PDF (sin formularios que dependan de un backend).
- **Responsive y accesible**: diseño adaptado a móvil, textos alternativos y foco visible al navegar con teclado.
- **Vista previa al compartir**: metadatos Open Graph para LinkedIn, WhatsApp y otras redes.

## Tecnologías

- **React 18** con Create React App
- **Context API** para el manejo del idioma
- **CSS3** con variables, grid, flexbox y animaciones
- **Jest + React Testing Library** para pruebas
- **GitHub Actions + GitHub Pages** para despliegue continuo

## Instalación

Requiere Node.js 18 o superior.

```bash
git clone https://github.com/juandaducuara/portafolioweb-juan-ducuara.git
cd portafolioweb-juan-ducuara
npm install
npm start
```

El sitio queda disponible en http://localhost:3000/portafolioweb-juan-ducuara.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm test` | Ejecuta las pruebas en modo interactivo |
| `npm run build` | Genera el build de producción en `build/` |
| `npm run deploy` | Genera el build y lo publica manualmente en la rama `gh-pages` |

## Estructura del proyecto

```
public/
├── assets/images/           # Foto, logo e íconos (tech/ contiene los SVG del stack)
├── cv-juan-ducuara.pdf      # Hoja de vida descargable
└── index.html               # Metadatos SEO y Open Graph
src/
├── components/
│   ├── Navbar/              # Navegación, selector de idioma y menú móvil
│   ├── Hero/                # Portada: nombre, resumen, CV y redes
│   ├── WorkExperiece/       # Timeline de experiencia laboral
│   ├── ProyectosDestacados/ # Caso de estudio y otros proyectos
│   ├── Skills/              # Habilidades técnicas por categoría
│   ├── EstudiosRealizados/  # Formación académica y cursos
│   ├── ContactMe/           # Tarjetas de contacto
│   └── Footer/              # Pie de página
├── context/
│   └── LanguageContext.jsx  # Idioma actual, cambio y persistencia
├── utils/
│   └── data.js              # Todo el contenido del portafolio (ES y EN)
├── App.jsx                  # Orden de las secciones
├── App.css                  # Estilos compartidos entre secciones
├── App.test.js              # Pruebas
└── index.css                # Variables de diseño y estilos globales
```

## Cómo actualizar el contenido

Todo el texto del sitio está en `src/utils/data.js`; no hace falta tocar los componentes.

- `PROFILE`: nombre, correo, enlaces, ruta del CV y foto (no dependen del idioma).
- `CONTENT.es` y `CONTENT.en`: textos de cada sección y de la interfaz.

Al editar un idioma hay que reflejar el cambio en el otro: ambos deben tener exactamente la misma estructura, y una prueba falla si no es así.

Para cambiar la hoja de vida, reemplaza `public/cv-juan-ducuara.pdf` conservando el nombre. No incluyas datos como cédula, dirección, teléfono o edad: el archivo es público.

## Pruebas

```bash
npm test
```

Las pruebas verifican que la portada muestre nombre y rol, que el CV y los enlaces de contacto funcionen, que la experiencia empiece por el empleo actual, que el cambio de idioma funcione y que las traducciones estén completas.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que compila el proyecto y lo publica en GitHub Pages.

El workflow corre con `CI=true`, por lo que cualquier advertencia de ESLint hace fallar el build. Antes de hacer push conviene verificar:

```bash
# Bash / Git Bash
CI=true npm run build

# PowerShell
$env:CI="true"; npm run build; Remove-Item Env:CI
```

## Contacto

- **Email:** jducuara82@gmail.com
- **LinkedIn:** [juandaducuara](https://www.linkedin.com/in/juandaducuara)
- **GitHub:** [juandaducuara](https://github.com/juandaducuara)
