"use client";

import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function Home() {
  return (
    <div>
      <main className="bg-blue-100">
        <section className="flex h-90">
          <div className="flex flex-col justify-center items-center w-1/2 p-8 bg-white">
            <h1 className="text-4xl text-center font-bold text-gray-800 mb-4">
              Transformamos tus ideas en soluciones digitales.
            </h1>
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
              Acompañamos el crecimiento de tu empresa con tecnología eficiente.
            </h2>
          </div>
          <div className="w-1/2 p-8 bg-white flex justify-center items-center">
            <ReactSVG
              src="/images/idea.svg"
              className="w-1/2 h-auto"
            />
          </div>
        </section>

        <section id="products" className="py-8 bg-white p-8" style={{ marginTop: '-20px' }}>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Productos Principales</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/products/inventari">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/inventari.png"
                      alt="Inventari"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Gestión de stock.</p>
                </div>
              </Link>
              <Link href="/products/garage_360">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/garage_360.png"
                      alt="Garage 360"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Presupuestos y gestión de  repuestos.</p>
                </div>
              </Link>
              <Link href="/products/trace_assign">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/trace_assign.png"
                      alt="Trace Assign"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Asignación y control de tareas.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-12 bg-gray-50 p-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 1</h3>
                <p className="text-gray-600">Descripción breve del servicio 1.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 2</h3>
                <p className="text-gray-600">Descripción breve del servicio 2.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 3</h3>
                <p className="text-gray-600">Descripción breve del servicio 3.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="clientes" className="py-12 bg-white p-8">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestros Clientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/products/inventari">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/inventari.png"
                      alt="Inventari"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Gestión de stock.</p>
                </div>
              </Link>
              <Link href="/products/garage_360">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/garage_360.png"
                      alt="Garage 360"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Presupuestos y gestión de  repuestos.</p>
                </div>
              </Link>
              <Link href="/products/trace_assign">
                <div className="p-6 bg-[#85c1e9] rounded-lg shadow-md hover:bg-[#a2d9ff] transition cursor-pointer">
                  <div className="relative w-full h-16 mb-4 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src="/images/trace_assign.png"
                      alt="Trace Assign"
                      className="w-auto h-full "
                    />
                  </div>
                  <p className="text-gray-600">Asignación y control de tareas.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
