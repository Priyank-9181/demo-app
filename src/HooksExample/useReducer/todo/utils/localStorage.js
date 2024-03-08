export function setTaskInLocalStorage(tasklist) {
  const string = JSON.stringify(tasklist);
  localStorage.setItem("key", string);
}

export function getTaskInLocalStorage() {
  const string = localStorage.getItem("key");
  const data = JSON.parse(string);
  console.log(data);
  return data;
}
