Script Nova — Frontend
======================

This repository contains the static frontend for Script Nova (HTML/CSS/images).

Development notes — connecting to a separate backend
---------------------------------------------------

This frontend is static (plain HTML files). Your backend lives in a different workspace and will run on a separate port (for example `http://localhost:5000`). Below are recommended steps and a tiny helper to make development easier.

1) Serve the frontend locally

You can use Python's simple HTTP server or a small Node static server to preview the site:

```bash
# from the frontend workspace root (where index.html lives)
python3 -m http.server 8080
# or, if you prefer Node:
npx http-server -p 8080
```

Open http://localhost:8080 in your browser.

2) Centralize API calls

Add the small helper `js/api.js` (provided) and include it in your pages before other scripts:

```html
<script src="js/api.js"></script>
```

The helper exposes `window.API_BASE` (default `http://localhost:5000`) and `window.apiFetch(path, options)` which prefixes `path` with the API base.

To override the backend URL in development, set `window.API_BASE` in a script before including `js/api.js`, for example in your `index.html`:

```html
<script>
	window.API_BASE = 'http://localhost:5000';
</script>
<script src="js/api.js"></script>
```

Example usage (in any page script):

```js
// GET /health on backend
window.apiFetch('/health')
	.then(r => r.json())
	.then(data => console.log('backend health', data))
	.catch(err => console.error('api error', err));
```

3) CORS / proxy

If the backend is running on a different origin (different port), enable CORS on the backend for development.

Node/Express example (dev only):

```js
// install: npm install cors
const cors = require('cors');
app.use(cors()); // allow all origins in development
```

FastAPI (Python) example:

```py
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
		CORSMiddleware,
		allow_origins=["http://localhost:8080"],
		allow_credentials=True,
		allow_methods=["*"],
		allow_headers=["*"],
)
```

4) If you later move to a SPA dev server (CRA/Vite)

- Create React App: add `"proxy": "http://localhost:5000"` to `package.json`.
- Vite: configure `server.proxy` in `vite.config.js`.

That's it — if you want, I can also add the script tag into each HTML file automatically or create a small health-check script that pings the backend.

---
Updated: Nov 23, 2025

# Script-Nova