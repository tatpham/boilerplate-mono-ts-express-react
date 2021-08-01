# boilerplate-mono-ts-express-react
Boilerplate mono-repo project with Express and React in Typescript

## Setup development

### IDE
If developing with VS code, copy the .vscode directory in /misc/ide to the root directory.
The files within contain settings for debugging as well as general settings to work with VS Code (e.g. end of line, etc.).

### Start up
To launch the whole stack in containers during development, the docker compose file `docker-compose.dev.yml` can be used with the following commands:
- `docker-compose -f docker-compose.dev.yml build <service name>`
- `docker-compose -f docker-compose.dev.yml up <service name>`

