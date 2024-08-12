// Suggested code may be subject to a license. Learn more: ~LicenseLog:3360626964.
import Image from "next/image";
import Navbar from '@/component/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome kontol</h1>
        <p className="text-lg text-gray-600 mb-8">
          Build amazing things with Next.js!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <Image src="/feature1.svg" alt="Feature 1" width={64} height={64} />
          <h2 className="text-xl font-semibold mt-4">Feature 1</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Add more features similarly */}
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to dive in?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sign up today and start building your next project.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up Now
        </button>
      </section>
    </main>
    </>
  );
}
