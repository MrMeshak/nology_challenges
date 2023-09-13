export const clearFields = (fields) => {
  fields.forEach((field) => (field.value = ''));
};

export const createElementWithText = (elementType, text, parentNode) => {
  const node = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  parentNode.appendChild(node);
};
