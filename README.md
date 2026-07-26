# Narayan Nexus — Counter Ledger (UPI + Recharge)

One app, two tabs:
- **UPI / Cash Ledger** — your original cash-taken/cash-given + slab fee system, unchanged.
- **Mobile Recharge Ledger** — new: Name, Number, Amount, Carrier (Jio/Airtel/Vi/BSNL/Other), with its own filters, search, and CSV export.

Data is stored separately per tab (`nn_ledger_data` and `nn_recharge_data` in local storage), so nothing overlaps.

## What was fixed from the last build
The previous `package.json` pointed to a `build/icon.ico` that didn't exist — `electron-builder` fails the build if a referenced icon file is missing. That reference is removed now. The app builds fine without a custom icon; add one later if you want (see below).

## 1. Prerequisites (one-time)
Install Node.js LTS: https://nodejs.org (tick "Add to PATH" during install)

## 2. Setup
Unzip this folder, open a terminal **inside it**, then run:
```
npm install
```
Wait for it to finish (downloads Electron, ~1-2 min first time).

## 3. Test it live (do this before building the installer)
```
npm start
```
A window should open with both tabs. Click around, add a test entry in each tab, confirm it saves. Close the window when done.

If this step fails, copy the exact error text — that tells us what's wrong, rather than guessing.

## 4. App icon
A logo is already included at `build/icon.ico` (multi-size, used for the taskbar, window title bar, desktop shortcut, and installer). Nothing to do here — it's already wired into `package.json`. Replace that file with your own `.ico` any time if you want a different design; the filename just needs to stay the same.

## 5. Build the Windows installer
```
npm run dist
```
Output appears in `dist/`:
- `Narayan Nexus Setup 1.1.0.exe` — installer with desktop + Start Menu shortcuts, custom install path option.

Portable single-file version (no install step needed):
```
npm run dist:portable
```

## Important
- **Build this on a real Windows machine.** NSIS `.exe` installers are Windows-specific — building on Mac/Linux needs `wine` and gets flaky. Simplest: copy this folder to your Windows PC and run the commands there.
- Run `npm start` and confirm it works **before** running `npm run dist` — that isolates "my app is broken" from "my installer is broken," which are different problems.
- If `npm run dist` fails, the error will usually name the exact missing file/module — paste it back and I'll fix it directly rather than rebuilding blind.
