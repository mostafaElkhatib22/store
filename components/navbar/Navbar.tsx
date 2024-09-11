import Container from "@/components/global/Container";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";
import CartButton from "@/components/navbar/CartButton";
import LinkDropdown from "@/components/navbar/LinkDropdown";
import ModeToggle from "@/components/navbar/DarkMode";
import { Suspense } from "react";
function Navbar() {
  return (
    <div className="border-b">
      <Container className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinkDropdown />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
