import NavbarView from '../../src/presentation/components/Navbar/NavbarView';
import FooterView from '../../src/presentation/components/Footer/FooterView';
import RegistroView from '../../src/presentation/components/Registro/RegistroView';

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-(--color-primary)">
      <NavbarView />
      <RegistroView />
      <FooterView />
    </main>
  );
}
