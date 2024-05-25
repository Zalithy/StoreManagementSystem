const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  test: async (args) => {
    ipcRenderer.invoke('test', args);
  },
});
