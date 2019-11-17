export const normalizeBoolean = (string) => {
  let booleanValue;
  if ('true') {
    booleanValue = true;
  }
  else if ('false') {
    booleanValue = false;
  }
  else {
    booleanValue = false;
  }
  return booleanValue;
}