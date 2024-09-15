# Giphy App

## Getting started

App is built using Node v20.17.0. It's recommended to use [NVM](https://github.com/nvm-sh/nvm) to ensure app works correctly.

```
nvm use
```

Install dependencies:
```
npm install
```

To run in development:
```
npm run dev
```

**To work locally you'll need to create a [Giphy API key](https://developers.giphy.com/dashboard/) and put this key into a `.env` file.**

```
touch .env && echo 'API_KEY=<GIPHY-API-KEY>' >> .env
```

## Deployment

App will deploy to Vercel when changes occur to `main` branch.

You can view the app here: [https://giphy-vite-app.vercel.app/](https://giphy-vite-app.vercel.app/)


## Goals

The goal of the app is to do the following:

- Show trending gifs from Giphy
- Search for gifs
- Infinite scroll of content
- Speed > High quality

## Next steps

Primary functionalities are feature complete. The next steps before implementing more features would be to add tests to ensure confidence in future deployments.

Tests to add:
- Unit tests (Jest + React testing library)
    - Ensure transformers behave as expected
    - Handling of errors and fallbacks
    - Components render expected data for users to see
- Automation testing (Cypress / Playwright)
    - Ensure page renders
    - Ensure search behaves correctly
    - Infinite scroll works
- (Optional) Visual tests
    - Check for unexpected visual changes to _dumb_ components

## Developer notes
Notes taken whilst developing the app.

### Tech stack choices
- Vite ([create-vite-extra](https://github.com/bluwy/create-vite-extra/tree/master) - React SSR template)
- Tailwind + DaisyUI
- React
- TypeScript

### Steps:
1. Setup stack and configs
2. Testing Giphy API in [Insomnia](https://insomnia.rest/) to see response models
3. Create endpoints to communicate with Giphy API and avoid leaking API token
4. Add fetching/transformers/hooks
5. Build trending layout - Create Navbar and Card components
6. Create and add searching as well as creating a provider to share state
7. Add debounce hook to prevent too many network requests when searching
8. Add skeletons to loading state
9. Update provider to have offset state used for pagination
10. Implement infinite scroll
11. Update loading/skeletons for infinite scroll to not affect existing cards
12. Deploy to Vercel
13. Learn how Vite works in Vercel and adjust API for serverless functions
14. Successful deployment
15. Add readme