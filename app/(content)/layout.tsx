import Footer from '@/components/shared/layout/Footer';
import Header from '@/components/shared/layout/Header';

// import Header from "@/components/headerComponents/Header";
// import Footer from "@/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header variant="overlay" isDarkbg={true} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
