import React from "react";
import { Trash2, Info, Phone } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-2">E-Waste Recycle</h1>
        <p className="text-md text-gray-600">Give your old electronics a new life – responsibly.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Trash2 className="h-10 w-10 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">What is E-Waste?</h2>
          <p className="text-sm text-center">
            E-waste includes discarded electronic devices like phones, laptops, and appliances that can harm the environment if not properly recycled.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Info className="h-10 w-10 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Why Recycle?</h2>
          <p className="text-sm text-center">
            Recycling conserves resources, reduces pollution, and protects natural ecosystems by safely disposing of hazardous materials in electronics.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Phone className="h-10 w-10 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
          <p className="text-sm text-center">
            Connect with local recycling centers or drop-off points. Contact us to learn how you can start your e-waste recycling journey today!
          </p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} E-Waste Recycle. All rights reserved.
      </footer>
    </main>
  );
}
