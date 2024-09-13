import MobileMenu from "./MobileMenu";

function ButtonMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="z-50 md:hidden">
        {isOpen ? (
          <img src="/assets/shared/icon-hamburger.svg" alt="hamburger" />
        ) : (
          <img src="/assets/shared/icon-close.svg" alt="close" />
        )}
      </button>
      {!isOpen && <MobileMenu />}
    </>
  );
}

export default ButtonMenu;
