import "./globals.css";


export const metadata = {
  title: "Tubeflix",
  description: "O melhor lugar para assistir seus vídeos favoritos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
