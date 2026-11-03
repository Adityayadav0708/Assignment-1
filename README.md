# Photo Gallery

A responsive photo gallery built with **React (Vite)** and **Tailwind CSS**. It fetches photos from the [Picsum Photos API](https://picsum.photos/), lets you search by author name, and lets you mark photos as favourites that stay saved after a page refresh.

Built as a pre-screening assignment for a Frontend React Internship.

**Live demo:** <your-live-link>
**Screen recording:** <your-video-link>

---

## Features

- Fetches 30 photos from the Picsum API when the page loads
- Loading spinner while fetching
- Error message if the request fails
- Responsive grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Each card shows the photo, the author name and a heart button
- Real-time search by author name (filters the already-fetched data, no extra API call)
- Favourites toggle with a heart icon
- Favourites are saved in `localStorage` and persist across refreshes

---

## Tech Stack

- React (functional components and hooks only)
- Vite
- Tailwind CSS (no component libraries)

---

## React Concepts Used

| Concept | Where | Why |
|---|---|---|
| Custom hook `useFetchPhotos` | `src/hooks/useFetchPhotos.js` | Keeps data fetching separate from the UI. Returns `photos`, `loading` and `error` |
| `useReducer` | `src/reducers/favouritesReducer.js` | Manages the favourites list through a single `TOGGLE_FAVOURITE` action |
| `useEffect` | `useFetchPhotos`, `Gallery` | Fetches data once on load, and saves favourites to `localStorage` when they change |
| `useMemo` | `Gallery` | Recalculates the filtered photo list only when `photos` or the search text changes |
| `useCallback` | `Gallery` | Keeps handler functions stable between renders |
| `React.memo` | `SearchBar`, `PhotoCard` | Skips re-rendering when props have not changed |

---

## Key Decisions

**Why `useReducer` for favourites?**
Toggling a favourite has logic: if the id is already in the list, remove it, otherwise add it. A reducer keeps that logic in one place, outside the UI. The component only dispatches an action.

**Why store only photo ids in favourites?**
It is lighter and avoids duplicate data. The full photo is always available from the fetched `photos` list.

**Why `useMemo` for the filtered list?**
Clicking a heart re-renders the Gallery. `useMemo` stops the filter from running again unless `photos` or the search text changed.

**Why `useCallback` for the handlers?**
A function created inside a component is new on every render. `useCallback` keeps it the same, so `React.memo` on `SearchBar` and `PhotoCard` can skip needless re-renders.

**Why check `res.ok` in the hook?**
`fetch` does not throw an error for HTTP errors like 404 or 500, so the status is checked manually and an error is thrown.

**How is bad `localStorage` data handled?**
Reading favourites is wrapped in `try/catch` and checked with `Array.isArray`. If the saved data is missing or corrupted, the app starts with an empty list instead of crashing.

---

## Folder Structure

```
src/
├── components/
│   ├── Gallery.jsx        # Connects the hook, reducer, search and grid
│   ├── PhotoCard.jsx      # Photo, author name and heart button
│   ├── SearchBar.jsx      # Controlled search input
│   └── Spinner.jsx        # Loading indicator
├── hooks/
│   └── useFetchPhotos.js  # Fetch logic: returns photos, loading, error
├── reducers/
│   └── favouritesReducer.js  # Reducer and localStorage loader
├── App.jsx
├── index.css
└── main.jsx
```

---

## Getting Started

**Prerequisites:** Node.js (a recent LTS version) and npm.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd photo-gallery

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

---

## How It Works

1. `useFetchPhotos` requests 30 photos from `https://picsum.photos/v2/list?limit=30` when the page loads.
2. `Gallery` shows a spinner while loading, an error message if the request fails, or the photo grid on success.
3. Typing in the search box updates the search text. `useMemo` filters the photos by author name.
4. Clicking a heart dispatches `TOGGLE_FAVOURITE` to the reducer, which adds or removes the photo id.
5. A `useEffect` saves the favourites list to `localStorage`, and `initFavourites` reads it back on the next visit.

---

## Scope

This project follows the assignment scope exactly. No extra features were added.

---

## Author

**Aditya Pratap Singh**
GitHub: <your-github-profile-link>
