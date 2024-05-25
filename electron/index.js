const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
});

const db = require('sqlite3')

ipcMain.handle('test', async (event, args) => {
  const a = new db.Database(path.join(__dirname, 'database.db'))
  a.run(`CREATE TABLE users (
    id INTEGER,
    name TEXT
  )`)
})