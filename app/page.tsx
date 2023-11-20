'use client';

import { Widget } from './components/Widget';
import { useWidgets } from './context/WidgetContext';

export default function Home() {
  const { widgetData, loading, error } = useWidgets();

  return (
    <main>
      <div className="widget-container | rounded-lg mx-[1.38rem] my-12 md:mx-auto max-w-[53.1875rem]">
        <h1 className="text-3xl font-bold">Per product widgets</h1>
        <div className="flex">{widgetData && widgetData.map((widget) => <Widget key={widget.id} widget={widget} />)}</div>
      </div>
    </main>
  );
}
