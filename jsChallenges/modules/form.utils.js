export const collectFormData = (form) => {
  const data = new FormData(form);
  const output = [];
  for (const value of data.values()) {
    output.push(value);
  }
  return output;
};
