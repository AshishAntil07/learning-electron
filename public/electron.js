const { app, BrowserWindow, screen, ipcMain, Notification } = require('electron');
const path = require('path');

const { getFilesFromFS, getFileFromFS, getFSTree } = require('./mods/fsOperations');

require('dotenv').config();


const receiveActions = {
  getFiles(directoryPath){
    return getFilesFromFS(directoryPath);
  },
  getFile(filePath){
    return getFileFromFS(filePath);
  },
  getDirectoryTree(path){
    return getFSTree(path);
  }
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width,
    height,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL || path.join(__dirname, './index.html')
  );

  ipcMain.on('minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.on('maximize', () => {
    mainWindow.maximize();
  });

  ipcMain.on('close', () => {
    mainWindow.close();
  });

  for(let action in receiveActions){
    ipcMain.on(action, async (event, ...args) => {
      const result = await receiveActions[action](...args);
      event.reply('C-'+action, result);
    });
  }

  ipcMain.on('showNotification', (_e, title, description, delay) => {

    console.log(title, description, delay);

    const notification = new Notification({
      title,
      body: description
    });

    if(delay){
      setTimeout(() => {
        notification.show();
      }, delay);
    } else {
      notification.show();
    }
  });

  mainWindow.on('closed', function () {
    app.quit();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
