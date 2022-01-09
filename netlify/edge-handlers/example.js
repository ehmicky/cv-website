export const onRequest = function (event) {
  if (event.requestMeta.url.pathname === '/secret') {
    event.replaceResponse(
      // eslint-disable-next-line no-undef
      new Response('<h1>Access denied</h1>', {
        headers: { 'content-type': 'text/html' },
        status: 404,
      }),
    )
  }
}
