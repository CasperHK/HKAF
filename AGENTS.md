# HKAF Agents

This repository is the Hong Kong Academic Forum (HKAF), a Traditional Chinese-first academic discussion platform. Use the root README as the source of truth for high-level product direction and stack intent.

## Repo layout

- `src/frontend`: Nuxt 4 + TypeScript application. Use `pnpm`.
- `src/backend`: Goravel backend. Go module path: `oroblanco/hkaf-backend`.
- `start.bat`: root helper script that starts frontend and backend dev servers.

## Working guidance

### Frontend

- Work inside `src/frontend`.
- Preserve Nuxt SSR assumptions. Do not introduce SPA-only patterns unless the change is intentional and justified.
- Use existing Nuxt and TypeScript conventions. Do not add npm or yarn workflow files.
- Prefer Traditional Chinese for user-facing copy.

### Backend

- Work inside `src/backend`.
- Follow Goravel conventions and the current folder layout under `app`, `bootstrap`, `config`, `routes`, and `tests`.
- Run the backend from `src/backend` with `go run .`.
- Do not reintroduce outdated entry paths such as `cmd/server/main.go` unless you are intentionally restructuring the backend.
- Treat entgo and PostgreSQL as planned follow-up integrations, not fully wired baseline dependencies.

### Docs

- Keep README aligned with any change to product description, stack, paths, or commands.
- Prefer concise, project-specific documentation over generic framework notes.
- Keep user-facing examples consistent with the Traditional Chinese-first product position.

### Startup scripts

- `start.bat` should remain a thin helper that starts:
	- frontend from `src/frontend` with `pnpm run dev`
	- backend from `src/backend` with `go run .`
- If startup flow changes, update the script and matching docs together.

## Validation expectations

- Frontend changes: verify `pnpm run dev` from `src/frontend`.
- Backend changes: verify `go run .` and `go test ./...` from `src/backend`.
- Docs or script changes: verify referenced paths and commands still match the repo layout, README, and `start.bat`.
