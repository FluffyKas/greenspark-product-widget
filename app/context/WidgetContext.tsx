'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IWidget } from '../types/interfaces';

interface WidgetsContextProps {
  widgets: IWidget[];
  loading: boolean;
  error: string | null;
  fetchWidgets: () => void;
  activeWidget: number | null;
  setActiveWidget: React.Dispatch<React.SetStateAction<number | null>>;
}

const WidgetsContext = createContext<WidgetsContextProps | undefined>(undefined);

interface WidgetsProviderProps {
  children: ReactNode;
}

export const WidgetsProvider: React.FC<WidgetsProviderProps> = ({ children }) => {
  const [widgets, setWidgets] = useState<IWidget[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeWidget, setActiveWidget] = useState<number | null>(null);

  const fetchWidgets = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');
      const data: IWidget[] = await response.json();
      setWidgets(data);
      const activeWidget = data.find((widget) => widget.active)?.id || null;
      setActiveWidget(activeWidget);

      setError(null);
    } catch (error) {
      setWidgets([]);
      setError('Error fetching widgets');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWidgets();
  }, []);

  const contextValue: WidgetsContextProps = {
    widgets,
    loading,
    error,
    fetchWidgets,
    activeWidget,
    setActiveWidget,
  };

  return <WidgetsContext.Provider value={contextValue}>{children}</WidgetsContext.Provider>;
};

export const useWidgets = () => {
  const context = useContext(WidgetsContext);
  if (!context) {
    throw new Error('useWidgets must be used within a WidgetsProvider');
  }
  return context;
};
