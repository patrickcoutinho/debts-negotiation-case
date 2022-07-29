# **Debts Negotiation Case**

Proposed case for **Debt Renegotiation solution**. Created by [Patrick Coutinho](https://www.linkedin.com/in/patrickcoutinho/).

*This is a demo project with work in progress.*

---

Description of the concepts, tools and technologies used:

- **Frontend:** `React`, `React Router`, `Chakra UI`, `Zustand`.
- **Micro Front-end:** Composition with `Module Federation`.
- **Backend:** `Nestjs` and `MongoDB`.
- **Repository:** Monorepo using `yarn workspaces`, hosted on `Github`.
- **Docker:** Projects containing their `Dockerfile`. Used `docker-compose` for local development.
### to-do

- Enhance **Backend**.
- Enhance **Frontend**.
- Some **Refactor**.
- **Message Broker:** `RabbitMQ`.
- **Cluster:** `Kubernetes` to be hosted on `EKS` for example. Created with `eksctl`. To be deployed using `kubectl`.
- **CI/CD:** `CircleCI`. Proposed pipeline steps see in docs folder.
- **Deployment:** Blue/green type.

---

## Prerequisites

- Docker (if you want to run with Docker)
- Docker Compose v
- NodeJS / Yarn
- Make

---

## Local Development

With Docker:

```shell
make start-docker # or docker-compose up
```

Without Docker:

```shell
make start # or yarn start
```

After the project is started, go to <http://localhost:3000>

---

MFE projects are exposed at the following addresses:

Offer: <http://localhost:8080/remoteEntry.js>

Design System: <http://localhost:8081/remoteEntry.js>

Home: <http://localhost:8082/remoteEntry.js>

Shared: <http://localhost:8083/remoteEntry.js>

---

To see the Design System **Storybook**:


```shell
 # if you have node_modules folder created through Docker
 make cleanup

cd frontend/design-system

yarn storybook
```

Go to <http://localhost:6006>