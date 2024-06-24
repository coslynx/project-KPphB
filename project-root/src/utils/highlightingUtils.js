const highlightText = (text, color) => {
  const highlightedText = `<span style="background-color: ${color}">${text}</span>`;
  return highlightedText;
};

const removeHighlight = (text) => {
  return text.replace(/<span style="background-color:.*?">(.*?)<\/span>/g, '$1');
};

export { highlightText, removeHighlight };