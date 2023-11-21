'use client';

import { Widget } from './components/Widget';
import { useWidgets } from './context/WidgetContext';

export default function Home() {
  const { widgets, loading, error } = useWidgets();

  return (
    <main>
      {loading && <div className="loader"></div>}
      <>
        {!loading && (
          <div className="widgets-display">
            <h1 className="widgets-display-title">Per product widgets</h1>
            <div className="widgets-inner-container">
              {widgets.map((widget) => (
                <Widget key={widget.id} widget={widget} />
              ))}
            </div>
          </div>
        )}
      </>
    </main>
  );
}
