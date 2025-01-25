export const CLEAR = "CLEAR";
export const POST = "POST";
export const post = (data) => ({
  type: POST,
  payload: data,
});

export const clear = () => ({
  type: CLEAR,
});
