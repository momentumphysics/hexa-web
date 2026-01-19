import React from 'react';

export default function Hero() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id="beranda" className="relative bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/img/Edelweiss/Edelweiss depan.webp"
                    alt="Hexa Modern Living"
                />
                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" aria-hidden="true"></div>
            </div>

            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center sm:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl max-w-3xl" data-aos="fade-up">
                    <span className="block xl:inline">Hexa: Hunian Impian</span>{' '}
                    <span className="block text-accent xl:inline">di Lokasi Strategis Makassar & Gowa</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
                    Rumah luas, cicilan fleksibel, DP ringan! Unit terbatas. Temukan kenyamanan hidup di lingkungan terbaik.
                </p>
                <div className="mt-10 sm:flex sm:justify-start" data-aos="fade-up" data-aos-delay="400">
                    <div className="rounded-md shadow">
                        <a
                            href="#katalog"
                            onClick={(e) => handleScroll(e, '#katalog')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-yellow-600 md:py-4 md:text-lg transition-all"
                        >
                            Lihat Tipe Rumah
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#kontak"
                            onClick={(e) => handleScroll(e, '#kontak')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
