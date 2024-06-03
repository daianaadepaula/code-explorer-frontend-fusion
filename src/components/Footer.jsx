import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t py-6 text-white border-neutral-400">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>

        <div className="flex items-center">
          <ul className="flex flex-col gap-4 md:flex-row md:ml-8 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-indigo-300" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
				
      </div>
    </footer>
  );
};

export default Footer;
