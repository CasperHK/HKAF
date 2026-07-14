# HKAF Copilot Instructions

Use the root README as the source of truth for high-level product intent and stack direction. This repository is the Hong Kong Academic Forum, a Traditional Chinese-first academic discussion platform.

## Repo layout

- `src/frontend`: Nuxt 4 + TypeScript app, managed with `pnpm`
- `src/backend`: Goravel backend, Go module path `oroblanco/hkaf-backend`
- `start.bat`: helper script to launch both dev servers from the repo root

## Command conventions

- Frontend dev: run `pnpm run dev` from `src/frontend`
- Backend dev: run `go run .` from `src/backend`
- Backend tests: run `go test ./...` from `src/backend`
- Root helper: `start.bat` starts frontend and backend in separate windows

## Implementation guardrails

- Preserve Nuxt SSR assumptions. Avoid browser-only access outside the proper client-side lifecycle or client-only boundaries.
- For frontend UI work, follow the frontend-scoped instruction file in `.github/instructions/frontend-ui.instructions.md`.
- Follow current Goravel conventions and folder structure under `src/backend`.
- Do not reintroduce outdated backend paths like `cmd/server/main.go` unless you are intentionally adding that structure as part of a larger refactor.
- Treat entgo and PostgreSQL as planned follow-up integrations. Do not assume full schema generation, migrations, or database wiring already exist.
- Prefer Traditional Chinese for user-facing copy. English is fine for code, identifiers, and developer documentation where appropriate.
- Keep docs, commands, and helper scripts aligned when changing paths or startup behavior.

## Change strategy

- Make minimal, repo-consistent changes.
- Prefer edits near the owning implementation instead of adding parallel structure.
- When changing frontend behavior, preserve the existing Nuxt app shape unless the task explicitly requires broader restructuring.
- When changing backend behavior, stay within Goravel patterns for bootstrap, config, routes, controllers, and tests.
