import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl h-auto flex justify-center" style={{ marginTop: '-80px' }}>
        <img
          src="/images/404.svg"
          alt="404 - No encontrado"
          className="w-3/4 h-auto"
        />
      </div>
      <p className="text-lg text-gray-600" style={{ marginTop: '-30px' }}>
          Lo sentimos, no pudimos encontrar esta página. 
          <Link href="/" className="text-blue-600 hover:underline ml-2">
            Volver a la página principal
          </Link>
        </p>
    </div>
  );
}
