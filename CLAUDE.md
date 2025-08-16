# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Vite with HMR)
- **Build for production**: `npm run build` (TypeScript compilation + Vite build)
- **Lint code**: `npm run lint` (ESLint with TypeScript rules)
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React + TypeScript + Vite application with a standard modern frontend setup:

- **Entry point**: `src/main.tsx` - React app initialization with StrictMode
- **Main component**: `src/App.tsx` - Root application component
- **Build tool**: Vite with React plugin for fast development and optimized builds
- **TypeScript configuration**: Split configuration with `tsconfig.app.json` for app code and `tsconfig.node.json` for build tools

## Code Quality Setup

- **ESLint**: Configured with TypeScript, React Hooks, and React Refresh rules
- **TypeScript**: Strict type checking enabled
- **React**: Version 19.1.1 with latest patterns (functional components, hooks)

## Key Files

- `vite.config.ts`: Vite configuration with React plugin
- `eslint.config.js`: ESLint configuration with TypeScript and React rules
- `package.json`: Dependencies and build scripts
- `src/`: Main application source code
- `public/`: Static assets served by Vite

## Development Notes

The project uses modern React patterns with functional components and hooks. The ESLint configuration includes recommended TypeScript rules and React-specific linting for hooks and refresh patterns.