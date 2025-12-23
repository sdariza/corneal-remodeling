import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import NavButton from "../NavButton";
const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="grid flex flex-col min-h-screen from-slate-50 via-blue-50/30 to-slate-100">
            <header className="border-b-2 border-blue-600/20 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-blue-500/5">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center gap-3 group" to="/">
                            <div className="p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                                <img
                                    className="h-10 w-10"
                                    src="https://assets.cdn.filesafe.space/l9EdT5iM1dwbD8M4yYj1/media/68a72009465199977ee45af9.webp"
                                    alt="logo_carriazo"
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-slate-900">
                                    Corneal Remodeling
                                </h1>
                                <p className="text-xs text-slate-500">
                                    Sistema de diagnóstico avanzado
                                </p>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-2">
                            <NavButton path="/queratocono" text="Queratocono" />
                            <NavButton path="/queratoglobo" text="Queratoglobo" />
                            <NavButton path="/ectasia-post-lasik" text="Ectasia Post LASIK" />
                            <NavButton path="/ectasia-post-qr" text="Ectasia Post QR" />
                            <NavButton path="/ectasia-post-qpp" text="Ectasia Post QPP" />
                        </nav>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 transition"
                            aria-label="Abrir menú"
                        >
                            {/* Icono hamburguesa */}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    {menuOpen && (
                        <nav className="md:hidden mt-6 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg">
                            <NavButton path="/queratocono" text="Queratocono" />
                            <NavButton path="/queratoglobo" text="Queratoglobo" />
                            <NavButton path="/ectasia-post-lasik" text="Ectasia Post LASIK" />
                            <NavButton path="/ectasia-post-qr" text="Ectasia Post QR" />
                            <NavButton path="/ectasia-post-qpp" text="Ectasia Post QPP" />
                        </nav>
                    )}
                </div>
            </header>

            <main className="grid flex-grow container mx-auto px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>

            <footer className="border-t border-slate-200 bg-white/50 backdrop-blur">
                <div className="container mx-auto px-6 py-8">
                    <p className="text-center text-sm text-slate-600">
                        © 2025 Corneal Remodeling System - Diagnóstico médico profesional
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Layout;
