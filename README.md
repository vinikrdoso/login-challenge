## Wiser Login Challenge

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production environment

Open [https://wiser-login-challenge.vercel.app/](https://wiser-login-challenge.vercel.app/) to navigate.

This app is a login screen, you need to put your e-mail and password credentials to get logged in.

There are two responses for this request, a success response and an error response,
the success response is set when both credentials are correct, the correct credentials are listed below:

```
  {
    username: "wiser@mail.com",
    password: "123456",
  },
  {
    username: "vini@mail.com",
    password: "654321",
  }
```

Anything different from that will return invalid credentials message. Both success and failure will be displayed as an alert.

## Structure

This project is set with the following structure:

```
src
└── components
    ├── component
    │   ├── index.tsx
    │   └── styles.tsx
    │
    ├── pages
    │   ├── page
    │   │   └── index.tsx
    │   │
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   └── index.tsx
    │
    ├── services
    │   └── service.ts
    │
    ├── store
    │   ├── actions
    │   │   ├── action.ts
    │   │   └── index.ts
    │   │
    │   ├── reducers
    │   │   ├── index.ts
    │   │   └── reducer.ts
    │   │
    │   ├── sagas
    │   │   ├── index.ts
    │   │   ├── saga.ts
    │   │   └── watcher.ts
    │   │
    │   └── configureStore.ts
    │
    ├── styles
    │   ├── global.scss
    │   └── index.tsx
    │
    └── templates
        └── template
            ├── index.tsx
            └── styles.tsx
```

## Contact

👤 **Vinícius Cardoso Junqueira**

- Github: [@gabrielgrs](https://github.com/vinikrdoso)
- LinkedIn: [@gabrielgrs](https://www.linkedin.com/in/viniciuscardosojunqueira/)
