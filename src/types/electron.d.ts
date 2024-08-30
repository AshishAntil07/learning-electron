export {};

declare global {
  interface Window {
    electron: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      showNotification: (title: string, description?: string, delay?: number) => void;
    };
  }
}
