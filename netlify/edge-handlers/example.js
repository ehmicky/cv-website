export function onRequest(event) {
  if (event.requestMeta.url.pathname === "/secret") {
    event.replaceResponse(
      new Response("<h1>Access denied</h1>", {
        headers: {
          "content-type": "text/html",
        },
        status: 404,
      })
    );
  }
}
