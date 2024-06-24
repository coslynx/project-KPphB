const logUtils = {
  logs: [],

  addLog: (newLog) => {
    logUtils.logs.push(newLog);
  },

  filterLogs: (textCriteria) => {
    return logUtils.logs.filter((log) => log.includes(textCriteria));
  },

  highlightLog: (logIndex, color) => {
    if (logIndex >= 0 && logIndex < logUtils.logs.length) {
      logUtils.logs[logIndex] = `<span style="background-color: ${color}">${logUtils.logs[logIndex]}</span>`;
    }
  },

  exportLogs: (format) => {
    let exportedLogs = "";
    if (format === 'json') {
      exportedLogs = JSON.stringify(logUtils.logs);
    } else if (format === 'csv') {
      exportedLogs = logUtils.logs.join('\n');
    }
    return exportedLogs;
  },

  saveLogConfig: () => {
    localStorage.setItem('logConfig', JSON.stringify(logUtils.logs));
  },

  loadLogConfig: () => {
    const savedLogs = localStorage.getItem('logConfig');
    if (savedLogs) {
      logUtils.logs = JSON.parse(savedLogs);
    }
  },

  clearLogs: () => {
    logUtils.logs = [];
  }
};

export default logUtils;