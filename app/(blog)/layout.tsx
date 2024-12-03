import "../globals.css";
import "../tailwind.scss";


export const metadata = {
  title: "The best taxi app in Greece | Book 24/7 | Since 2015 | About Aegean",
  description: "The Best Taxi App for Greek Islands. 200,000+ Downloads in Apple iOS and Google Play store. Rated #1. Expert Team. Great Customer Service. Open 24/7",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>test{children}</>;
}
