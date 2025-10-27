export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-center w-full px-3">
      <p className="text-black dark:text-white text-sm">
        &copy; {new Date().getFullYear()} Gustavo Chaves. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
