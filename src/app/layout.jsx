import { Inter } from 'next/font/google';

import '@/app/globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HARDWORK MEDICINA',
  description: `
    Foco, estratégia e suor! 
    Essas são as premissas do HARDWORK MEDICINA para a preparação para as provas de residência médica. 
    E tudo isso aliado ao elemento mais poderoso da educação: envolvimento. 
    Aqui no Hardwork já decidimos, 2024 é nosso!
    `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
