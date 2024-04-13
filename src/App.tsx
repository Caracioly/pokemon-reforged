import Header from "./app/header";
import Pokemon from "./app/pokemon";

export default function App() {
  return (
    <main>
      <Header />
      <div className="h-full p-1 w-full bg-slate-600 gap-2 flex flex-col xl:grid xl:grid-cols-2">
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
      </div>
    </main>
  );
}
