import React from 'react';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
    const products = [
        {
            id: 1,
            name: 'Dahlia Type 85',
            image: '/img/Dahlia/Dahlia depan.webp',
            hoverImage: '/img/Dahlia/dahlia dalam.webp',
            videoLink: 'https://vt.tiktok.com/ZS5WXRFAL/',
            specs: {
                luas: 'LT 6x15 | LB 85 m²',
                bedrooms: '3 Kamar Tidur',
                bathrooms: '3 Kamar Mandi',
                garage: 'Garasi Luas',
            },
            features: ['Taman + Lahan Kosong', 'Bebas Banjir', 'Westafel Tersedia'],
            pricing: {
                price: 'Rp. 900.000.000',
                dp: 'Rp. 90jt',
                installment15: 'Rp 5.4jt/bln',
            }
        },
        {
            id: 2,
            name: 'Pinisi UNM Type 85',
            image: '/img/Pinisi/pinisi unm tampak depan.webp',
            hoverImage: '/img/Pinisi/pinisi dalam.webp',
            videoLink: 'https://vt.tiktok.com/ZS5sCatUq/',
            specs: {
                luas: 'LT 6x13 | LB 85 m²',
                bedrooms: '3 Kamar Tidur',
                bathrooms: '3 Kamar Mandi',
                garage: 'Garasi Luas',
            },
            features: ['Taman + Lahan Kosong', 'Bebas Banjir', 'Westafel Tersedia'],
            pricing: {
                price: 'Rp. 850.000.000',
                dp: 'Rp. 85jt',
                installment15: 'Rp 5.9jt/bln',
            }
        },
        {
            id: 3,
            name: 'Edelweiss Type 112',
            image: '/img/Edelweiss/Edelweiss depan.webp',
            hoverImage: '/img/Edelweiss/Edelweiss dalam.webp',
            videoLink: 'https://vt.tiktok.com/ZS5KoDYeo/',
            specs: {
                luas: 'LT 9x15 | LB 112 m²',
                bedrooms: '3 Kamar Mandi',
                bathrooms: '3 Kamar Tidur',
                garage: 'Garasi Luas',
            },
            features: ['Taman Depan & Belakang', 'Tanah Sangat Luas', 'Premium Design'],
            pricing: null // Special case
        }
    ];

    return (
        <div id="katalog" className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Pilihan Tipe Rumah Kami
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Temukan desain yang sesuai dengan gaya hidup Anda, dari minimalis modern hingga premium family home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
