export default function Footer() {
  return (
    <footer className="w-full px-3 py-4 mt-auto">
      <p className="text-black dark:text-white text-sm text-center">
        &copy; {new Date().getFullYear()} Gustavo Chaves. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
