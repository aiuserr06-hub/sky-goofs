# Sky Goofs ✈
An original goofy, low-poly co-op flying playground. Up to four friends pilot their own toy planes in a shared sky, collect donuts and drop silly cargo at three islands. No account, download, or paid asset required.

## Controls
W/S climb/dive; A/D turn; Shift boost; X brake; Space drop cargo; H honk; R respawn. Touch controls are included. Create a flight then use **Invite +** to copy a room link.

## Run
Node 22+ recommended.
```
npm ci
npm start
```
Open http://localhost:3000. `npm test` runs authoritative simulation tests.

## Architecture
- `public/`: Three.js 0.170 WebGL renderer, original procedural models, responsive UI and native WebSocket client. Three.js is vendored under its MIT license in THREE-LICENSE.txt.
- `server/`: Node HTTP + ws server, server-authoritative movement, bounded 4-player rooms, delivery distance checks, shared scoring, input limits, 20 Hz snapshots, reconnect and stale room cleanup.
- Frontend: Vercel, output directory `public`, no build step. `public/config.js` sets the backend origin.
- Backend: Render free Node web service, `npm ci --omit=dev`, `npm start`, `/health`. `render.yaml` provides a blueprint.

Rooms and scores are live-session data stored in server memory. Free Render services sleep when idle; the first connection may take about a minute. Restarting/redeploying the backend clears rooms. Guest identity tokens are short-lived within those rooms; do not share them. Room links allow anyone with the link to join, up to four pilots. No database or persistent account system is claimed.

The game uses an original cartoon art style and models, inspired by slapstick co-op games; it does not include SOS OPS assets or source code.
