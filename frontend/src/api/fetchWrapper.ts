const API_URL = process.env.REACT_APP_API_URL || '';
export const fetchJSON = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error('Network error');
  return res.json();
};
export const postJSON = async (path: string, body: any) => {
  const res = await fetch(`${API_URL}${path}`, {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
  if (!res.ok) throw new Error('Network error');
  return res.json();
};
export const deleteJSON = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {method: 'DELETE'});
  if (!res.ok) throw new Error('Network error');
  return;
};
