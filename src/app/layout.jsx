import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";


export const metadata = {
  title: "Investment Bank Of Africa",
  description: "Investment Bank Of Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
