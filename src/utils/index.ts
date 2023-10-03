type Action = "create" | "update" | "delete" | 'run';

export function makeUrl(action: Action) {
  return `http://localhost:3000/file/${action}`;
};

export async function createFile(filename: string) {
  const url = makeUrl("create");

  await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filename }),
  });
};

export async function run(filename: string) {
  const url = makeUrl("run");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filename }),
  });

  const data = await res.json();

  console.log(data);
}