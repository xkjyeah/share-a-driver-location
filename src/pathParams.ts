
export type PathParams = {
  zoom: string,
  center: string,
  sharingKey: string,
}

function randomString() {
  return [1,2,3].map(() =>
    Math.floor(Math.random() * (2<<16)).toString(16).padStart(4, '0')
  ).join('')
}

export function syncPath(params: PathParams) {
  const url = new URL(window.location.href);
  url.searchParams.set("zoom", params.zoom);
  url.searchParams.set("center", params.center);
  url.searchParams.set("sharingKey", params.sharingKey);

  window.history.replaceState(
    null,
    '',
    url.toString()
  )
}

export function pathParams(): PathParams {
  const urlParsed = new URL(window.location.href);
  const center = urlParsed.searchParams.get("center") || "1.38,103.8";
  const zoom = urlParsed.searchParams.get("zoom") || "3";
  const sharingKey = urlParsed.searchParams.get("sharingKey") || randomString();

  return {center, zoom, sharingKey}
}

