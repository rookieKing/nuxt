
export async function post(url, data) {
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (data) {
    config.body = JSON.stringify(data);
  }
  var res = await fetch('http://localhost:8080' + url, config);
  return await res.json();
}
