import Link from 'next/link';

export default function Manufacturing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-orange-500">Manufacturing Division</h1>
            <p className="text-lg text-gray-700 mb-8">Detailed manufacturing services and information will be available here.</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Back to Home
            </Link>
        </div>
    );
}
