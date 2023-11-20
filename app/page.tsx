'use client';

import { Widget } from './components/Widget';
import { useWidgets } from './context/WidgetContext';

export default function Home() {
  const { widgets, loading, error } = useWidgets();

  return (
    <main>
      <div className="widget-container">
        <h1 className="widget-container-title">Per product widgets</h1>
        <div className="widgets-inner-container">{widgets && widgets.map((widget) => <Widget key={widget.id} widget={widget} />)}</div>
      </div>
    </main>
  );
}
