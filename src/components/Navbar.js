'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleScroll() {
            setIsOpen(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const routes = {
        '/': 'Inicio',
        '/products': 'Productos',
        '/services': 'Servicios',
        '/contact': 'Contacto'
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white p-4 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center text-black">
                    <Image
                        src="/images/logo.svg"
                        alt="TrazaPy SVG Logo"
                        width={185}
                        height={50}
                        className="ml-2"
                    />
                </Link>

                <button
                    className="block lg:hidden text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                <ul className="hidden lg:flex lg:space-x-4 font-sans">
                    {Object.entries(routes).map(([path, text]) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={`text-lg font-semibold mr-4 ${
                                    pathname === path ? 'text-[#85c1e9]' : 'text-gray-800 hover:text-[#85c1e9]'
                                }`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {isOpen && (
                    <div
                        ref={menuRef}
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col items-start p-6 transition-transform transform translate-x-0"
                    >
                        <ul className="space-y-6 text-black">
                            {Object.entries(routes).map(([path, text]) => (
                                <li key={path}>
                                    <Link
                                        href={path}
                                        className={`text-lg font-semibold mr-4 ${
                                            pathname === path ? 'text-[#85c1e9]' : 'text-gray-800 hover:text-[#85c1e9]'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
