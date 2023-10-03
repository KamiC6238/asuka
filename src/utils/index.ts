type Action = "create" | "update" | "delete" | 'run';

export const makeUrl = (action: Action) => {
  return `http://localhost:3000/file/${action}`;
};
