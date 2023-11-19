import { Widget } from './components/Widget';

export default function Home() {
  return (
    <main>
      <div className="widget-container | border-2 border-black mx-[1.38rem] my-12 md:mx-auto max-w-[53.1875rem]">
        <h1 className="text-3xl font-bold">Per product widgets</h1>
        <div className="flex">
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </main>
  );
}
