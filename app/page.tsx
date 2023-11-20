'use client';

import { Widget } from './components/Widget';
import { useWidgets } from './context/WidgetContext';

export default function Home() {
  const { widgets, loading, error } = useWidgets();

  return (
    <main className="flex items-center justify-center min-h-screen">
      {loading && <div className="loader"></div>}
      <>
        {!loading && (
          <div className="widget-container">
            <h1 className="widget-container-title">Per product widgets</h1>
            {widgets.map((widget) => (
              <Widget key={widget.id} widget={widget} />
            ))}
          </div>
        )}
      </>
    </main>
  );
}
