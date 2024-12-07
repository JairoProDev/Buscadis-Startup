import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a Buscadis</h1>
      </div>
    </main>
  );
}
