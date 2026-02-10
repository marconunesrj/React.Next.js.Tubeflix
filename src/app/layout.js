import Link from "next/link";
import styles from "./layout.module.css"; 
import "./globals.css";
import "./theme.css";
import ThemeToggle from "@/components/themeToggle";

export const metadata = {
  title: "Tubeflix",
  description: "O melhor lugar para assistir seus vídeos favoritos",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="pt-BR" data-theme="light">
    <html lang="pt-BR">
      <body className={styles.body}>
        <header className={styles.header}>
          <h1><Link href="/">Tubeflix</Link></h1>
          <nav>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
          </nav>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 Tubeflix. Todos os direitos reservados.</p>
          <ThemeToggle />
        </footer>
      </body>
    </html>
  );
}
