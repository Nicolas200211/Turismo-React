import NavbarView from '../src/presentation/components/Navbar/NavbarView';
import HomeView from '../src/presentation/components/Home/HomeView';
import MainView from '../src/presentation/components/Main/MainView';
import IdiomasView from '../src/presentation/components/Idiomas/IdiomasView';
import FooterView from '../src/presentation/components/Footer/FooterView';
import '../app/globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-primary)">
      <NavbarView />
      <HomeView />
      <MainView />
      <IdiomasView />
      <FooterView />
    </main>
  );
}
