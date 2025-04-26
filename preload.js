const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  // Request management
  getPendingRequests: () => ipcRenderer.invoke('get-pending-requests'),
  getRequestHistory: () => ipcRenderer.invoke('get-request-history'),
  approveRequest: (requestId) => ipcRenderer.invoke('approve-request', requestId),
  denyRequest: (requestId, reason) => ipcRenderer.invoke('deny-request', requestId, reason),
  
  // Admin information
  getAdminInfo: () => ipcRenderer.invoke('get-admin-info'),
  
  // Dashboard data
  getDashboardStats: () => ipcRenderer.invoke('get-dashboard-stats'),
  
  // Filtering and sorting
  filterRequests: (filters) => ipcRenderer.invoke('filter-requests', filters),
  sortRequestsByPriority: () => ipcRenderer.invoke('sort-requests-by-priority'),
  
  // Utility functions
  formatDate: (date) => {
    return new Date(date).toLocaleString();
  },
  getPriorityLabel: (priority) => {
    const priorityLabels = {
      1: 'Graduating Senior',
      2: 'Previous Level Course',
      3: 'Prerequisite for Multiple Courses',
      4: 'Prerequisite for Graduation Project',
      5: 'Schedule Gap Reduction',
      6: 'Medical Case',
      7: 'Same Academic Level',
      8: 'Below Minimum Credits',
      9: 'Low Credit Hours'
    };
    return priorityLabels[priority] || 'Unknown';
  }
});
