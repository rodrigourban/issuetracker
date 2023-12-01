'use client';
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <svg
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          strokeWidth='1.9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          color='#4d4d4d'
        >
          <path
            d='M12 22L3.30863 17.1715C3.11815 17.0656 3.00001 16.8649 3.00001 16.647L2.99999 7.35304C2.99999 7.13514 3.11813 6.93437 3.30861 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8819 6.93437 21 7.13514 21 7.35304L21 11'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M3.52844 7.29363L11.7086 11.8382C11.8898 11.9388 12.1102 11.9388 12.2914 11.8382L20.5 7.27783'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M12 12V17.5'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M12 2V9'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M18.6569 17.2427L19.364 17.9498'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M17.2426 18.6567L17.9497 19.3638'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M18.6569 14.4144L14.4142 18.6571C13.6332 19.4381 13.6332 20.7045 14.4142 21.4855L15.1213 22.1926C15.9024 22.9737 17.1687 22.9737 17.9497 22.1926L22.1924 17.95C22.9734 17.1689 22.9734 15.9026 22.1924 15.1215L21.4853 14.4144C20.7042 13.6334 19.4379 13.6334 18.6569 14.4144Z'
            stroke='#4d4d4d'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link, key) => (
          <Link
            href={link.href}
            className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            key={key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
