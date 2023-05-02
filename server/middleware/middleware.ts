export default defineEventHandler((event) => {
  setResponseHeader(event, "Content-Type", "application/json; charset=utf-8");
});
