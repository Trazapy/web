'use client';

import Image from 'next/image';
import Head from 'next/head';
import { useParams } from 'next/navigation';

const productos = {
  trace_assign: {
    name: 'trace_assign',
    description: 'Descripción extendida del Producto 1.',
    video: '/videos/video1.mp4',
    images: ['/images/product1-1.jpg', '/images/product1-2.jpg'],
  },
  inventari: {
    name: 'inventari',
    description: 'Descripción extendida del Producto 2.',
    video: '/videos/video2.mp4',
    images: ['/images/product2-1.jpg', '/images/product2-2.jpg'],
  },
  garage_360: {
    name: 'garage_360',
    description: 'Descripción extendida del Producto 3.',
    video: '/videos/video3.mp4',
    images: ['/images/product3-1.jpg', '/images/product3-2.jpg'],
  }
};

export default function ProductDetail() {
  const { id } = useParams();  // Obtén el id directamente desde useParams

  // Obtén el producto por id
  const product = productos[id];

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <Head>
        <title>{product.name} - Detalles</title>
      </Head>

      <header className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl">{product.name}</h1>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Detalles del {product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {product.images.map((image, index) => (
            <div key={index} className="w-full h-auto rounded-lg shadow-md">
              <Image src={image} alt={product.name} width={500} height={300} layout="responsive" />
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="mb-8">
          <video controls className="w-full rounded-lg shadow-md">
            <source src={product.video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </main>
    </div>
  );
}
