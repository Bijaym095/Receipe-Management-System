import { NavLogo } from "@/components/layouts/nav-logo";
import { NavMenu } from "@/components/layouts/nav-menu";
import { NavigationSheet } from "@/components/layouts/navigation-sheet";

const NAV_MENU = [
  {
    name: "Home",
    href: "#",
  },
];

const MainNav = () => {
  return (
    <nav className="fixed top-0 inset-x-0 py-4 bg-background border-b border-gray-100">
      <div className="container">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <NavLogo />
          <div className="flex items-center gap-3">
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
