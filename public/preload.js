const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, func, { once }) => ipcRenderer[once?'once':'on'](channel, (event, ...args) => func(event, ...args)),
  minimize: () => ipcRenderer.send('minimize'),
  maximize: () => ipcRenderer.send('maximize'),
  close: () => ipcRenderer.send('close'),
  showNotification: (title, description, delay) => ipcRenderer.send('showNotification', title, description, delay),
});
