/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WalfarepsImport } from './routes/walfareps'
import { Route as WalfarefiImport } from './routes/walfarefi'
import { Route as WalfarefaImport } from './routes/walfarefa'
import { Route as WalfareecImport } from './routes/walfareec'
import { Route as SignupImport } from './routes/signup'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as EditorwelfareImport } from './routes/editorwelfare'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WalfarepsRoute = WalfarepsImport.update({
  path: '/walfareps',
  getParentRoute: () => rootRoute,
} as any)

const WalfarefiRoute = WalfarefiImport.update({
  path: '/walfarefi',
  getParentRoute: () => rootRoute,
} as any)

const WalfarefaRoute = WalfarefaImport.update({
  path: '/walfarefa',
  getParentRoute: () => rootRoute,
} as any)

const WalfareecRoute = WalfareecImport.update({
  path: '/walfareec',
  getParentRoute: () => rootRoute,
} as any)

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const EditorwelfareRoute = EditorwelfareImport.update({
  path: '/editorwelfare',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/editorwelfare': {
      id: '/editorwelfare'
      path: '/editorwelfare'
      fullPath: '/editorwelfare'
      preLoaderRoute: typeof EditorwelfareImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/walfareec': {
      id: '/walfareec'
      path: '/walfareec'
      fullPath: '/walfareec'
      preLoaderRoute: typeof WalfareecImport
      parentRoute: typeof rootRoute
    }
    '/walfarefa': {
      id: '/walfarefa'
      path: '/walfarefa'
      fullPath: '/walfarefa'
      preLoaderRoute: typeof WalfarefaImport
      parentRoute: typeof rootRoute
    }
    '/walfarefi': {
      id: '/walfarefi'
      path: '/walfarefi'
      fullPath: '/walfarefi'
      preLoaderRoute: typeof WalfarefiImport
      parentRoute: typeof rootRoute
    }
    '/walfareps': {
      id: '/walfareps'
      path: '/walfareps'
      fullPath: '/walfareps'
      preLoaderRoute: typeof WalfarepsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  EditorwelfareRoute,
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  SignupRoute,
  WalfareecRoute,
  WalfarefaRoute,
  WalfarefiRoute,
  WalfarepsRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/editorwelfare",
        "/login",
        "/profile",
        "/search",
        "/signup",
        "/walfareec",
        "/walfarefa",
        "/walfarefi",
        "/walfareps"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/editorwelfare": {
      "filePath": "editorwelfare.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/walfareec": {
      "filePath": "walfareec.tsx"
    },
    "/walfarefa": {
      "filePath": "walfarefa.tsx"
    },
    "/walfarefi": {
      "filePath": "walfarefi.tsx"
    },
    "/walfareps": {
      "filePath": "walfareps.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
