1. 
- PRETTIER
```bash
npm install --save-dev prettier # Installiert prettier
npm install --save-dev prettier-plugin-svelte
```

- ESLINT
```bash
npx eslint --init
npm install --save-dev eslint eslint-plugin-svelte svelte
```

- JEST
```bash
npm install --save-dev jest # Fügt Jest als development dependency dem Projekt hinzu
npm install --save-dev @types/jest ts-jest # Fügt TypeScript dependencies für Jest hinzu
```

- Wenn: Validation Error: Preset ts-jest not found: `npm i ts-jest`
- Wenn: Cannot find name 'expect' / 'it': `npm i --save-dev @types/jest`

2. Docker

Um Website lokal zu runnen

>Dockerfile:
```bash
FROM node:alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

Start: `docker run --rm --name=klausur-website -p 5000:80 klausur:latest`


5. # Erkläre in eigenen Worten:
>Welche Vorteile hat ein Kubernetes Deployment gegenüber einem Kubernetes Pod: 

Deployments automatisieren das Lebenszyklusmanagement von Pods in Kubernetes. Sie ermöglichen:
- Automatische Skalierung und Aktualisierung
- Hochverfügbarkeit durch Überwachung und Ersetzen fehlgeschlagener Pods
- Rolling Updates ohne Ausfallzeiten
- Rollbacks im Fehlerfall

>Wofür ist ein Kubernetes Service gut:

Services in Kubernetes:
- Abstrahieren Pods und ermöglichen nahtlose Skalierung und Replikation.
- Verteilen Traffic automatisch auf mehrere Pods für optimale Leistung.
- Ermöglichen einfache Identifizierung und Verbindung von abhängigen Pods.
- Stellen stabile Verbindungen auch bei Pod-Ausfällen oder Neustarts sicher.

>Mehrere Wege wie man eine Kubernetes Anwendung von außen erreichen kann:

Möglichkeiten eine Kubernetes Anwendung von außen zu erreichen:
- NodePort: Leitet Traffic auf einem bestimmten Port (30000-32767) jedes Knotens an einen Dienst im Cluster weiter.
- LoadBalancer: Erstellt einen NodePort und einen ClusterIP und nutzt einen Cloud-Loadbalancer, um externen Traffic an den NodePort weiterzuleiten.
- Ingress: Ermöglicht externen Zugriff auf Dienste im Cluster, bietet LoadBalancing, SSL und benutzerdefiniertes Routing.

6. # Definiere einen Kubernetes Job

Ein Kubernetes Job ist:

- Einmalig: Führt Aufgaben aus, die nicht permanent laufen müssen.
- Batch-orientiert: Verarbeitet Daten in Stapeln, z.B. Analysen.
- Pod-basiert: Verwendet Pods für die Ausführung der Aufgaben.
- Terminiert: Endet automatisch nach Abschluss der Aufgabe.
