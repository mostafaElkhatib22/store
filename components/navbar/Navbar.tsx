import Container from '@/components/global/Container';
import CartButton from '@/components/navbar/CartButton';
import DarkMode from '@/components/navbar/DarkMode';
import LinksDropdown from '@/components/navbar/LinksDropdown';
import Logo from '@/components/navbar/Logo';
import NavSearch from '@/components/navbar/NavSearch';
import { Suspense } from 'react';
function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
