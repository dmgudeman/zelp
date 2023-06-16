async function csrfFetch(
    url: string,
    options: RequestInit = {}
): Promise<Response> {
    options.method = options.method || "GET";
    options.headers = options.headers || {};

    // Record is a generic of Record<K, T> form
    let headers: Record<string, string> = {};


    // in order to set up typing need to copy all properties 
    // into headers, if options.headers exists
    if (options.headers) {
        if (options.headers instanceof Headers) {
            headers = Object.fromEntries(options.headers.entries());
        } else if (Array.isArray(options.headers)) {
            headers = Object.fromEntries(options.headers);
        } else {
            headers = { ...options.headers };
        }
    }
    

    // this is to take care of FormData which needs multipart/form-data headers
    // something that cannot be done manually
    if (options.method.toUpperCase() !== "GET") {
        if (!(options.body instanceof FormData)) {
            headers["Content-Type"] =
                headers["Content-Type"] || "application/json";
        }

        let csrfToken = sessionStorage.getItem("X-CSRF-Token");
        headers["X-CSRF-Token"] = csrfToken !== null ? csrfToken : "";
    }
    options.headers = headers;
    const res = await fetch(url, options);
    // if (res.status >= 400) throw res;
    return res;
}


export default csrfFetch;
