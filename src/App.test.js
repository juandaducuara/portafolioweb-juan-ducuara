import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { CONTENT, PROFILE } from './utils/data';

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

beforeEach(() => {
  localStorage.setItem('lang', 'es');
});

test('muestra el nombre y el rol en la portada', () => {
  renderApp();
  expect(screen.getByRole('heading', { level: 1, name: PROFILE.name })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: 'Desarrollador Full Stack' })).toBeInTheDocument();
});

test('el botón de CV apunta al PDF descargable', () => {
  renderApp();
  const cvLink = screen.getByRole('link', { name: /descargar cv/i });
  expect(cvLink).toHaveAttribute('href', PROFILE.cv);
  expect(cvLink).toHaveAttribute('download');
});

test('los botones "Contáctame" llevan a la sección de contacto', () => {
  renderApp();
  const buttons = screen.getAllByRole('link', { name: 'Contáctame' });
  expect(buttons.length).toBeGreaterThan(0);
  buttons.forEach((button) => expect(button).toHaveAttribute('href', '#seccionContacto'));
});

test('los datos de contacto son enlaces funcionales', () => {
  renderApp();
  const contact = document.getElementById('seccionContacto');
  expect(within(contact).getByRole('link', { name: /correo/i })).toHaveAttribute('href', `mailto:${PROFILE.email}`);
  expect(within(contact).getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', PROFILE.linkedin);
  expect(within(contact).getByRole('link', { name: /github/i })).toHaveAttribute('href', PROFILE.github);
});

test('la experiencia muestra primero el empleo actual', () => {
  renderApp();
  const experience = document.getElementById('seccionExperienciaLaboral');
  const roles = within(experience).getAllByRole('heading', { level: 3 });
  expect(roles[0]).toHaveTextContent('Ingeniero de Desarrollo');
});

test('el botón de idioma cambia el contenido a inglés y lo recuerda', () => {
  renderApp();
  fireEvent.click(screen.getByRole('button', { name: /view in english/i }));

  expect(screen.getByRole('heading', { level: 2, name: 'Full Stack Developer' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Work experience' })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
  expect(localStorage.getItem('lang')).toBe('en');
});

// Evita que una traducción quede incompleta: ES y EN deben tener la misma forma
test('el contenido en inglés tiene la misma estructura que en español', () => {
  const shape = (value) => {
    if (Array.isArray(value)) return value.map(shape);
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]));
    }
    return typeof value;
  };
  expect(shape(CONTENT.en)).toEqual(shape(CONTENT.es));
});
