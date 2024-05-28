import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-6 border-neutral-700">
      <div className="flex flex-col lg:flex-row sm:justify-between justify-center items-center gap-10">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex">
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
          <div className="flex">
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
          <div className="flex">
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
          <div className="flex">
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
