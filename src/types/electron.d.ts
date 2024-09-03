import Electron from 'electron';

export {};

declare global {
  interface Window {
    electron: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      showNotification: (title: string, description?: string, delay?: number) => void;
      send: (channel: string, ...args: any) => void;
      receive: <T>(channel: string, callback: (event: Electron.IpcRendererEvent, ...args) => void, ...args) => Promise<T>;
    };
  }
}
