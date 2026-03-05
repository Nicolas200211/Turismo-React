import NavbarView from '../../src/presentation/components/Navbar/NavbarView';
import FooterView from '../../src/presentation/components/Footer/FooterView';
import PlanesView from '../../src/presentation/components/Planes/PlanesView';

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-(--color-primary)">
      <NavbarView />
      <PlanesView />
      <FooterView />
    </main>
  );
}
