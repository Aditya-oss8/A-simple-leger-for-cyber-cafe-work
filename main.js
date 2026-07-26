const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  const iconPath = path.join(__dirname, 'build', 'icon.ico'); // used for the app window while running
  const winOptions = {
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  };

  // Only set icon if it actually exists, to avoid startup issues
  if (fs.existsSync(iconPath)) {
    winOptions.icon = iconPath;
  }

  mainWindow = new BrowserWindow(winOptions);

  Menu.setApplicationMenu(null);
  mainWindow.loadFile('index.html');

  // Uncomment the line below if you need to debug (opens DevTools):
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
