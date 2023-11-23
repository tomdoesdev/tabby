# tabby

## Project Plan
![Design doc](https://github.com/tomdoesdev/tabby/blob/master/design.png?raw=true)

- Get it working client side in vue (local storage), abstract remote behaviour using strategy pattern
- Build express API
- build api strategy for frontend (hopefully plug and play)

### General flow
Client requests matches, gets json containing match data.
Client renders first match. Swiping either matches or passes a cat, then moves onto next match. (Probably should use state man here)
Matching/passing sends request to server, server persists. 
If passed, don't show cat again (until totally out of cats)
If matched, no-op (no chance to implement in 4 hours)

### Components
Expander Card
PassMatch Buttons
AsyncImage

MatchCard (Composite)
ProfileCard (Composite)



See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
