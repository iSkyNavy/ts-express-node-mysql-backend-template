# TS Express Node Mysql Backend Template

## Requirements

- node >= 16

## Start (Developer)
- npm install
- cp .env.example .env
- npm run dev

## Enviroments variables

| Variable           | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| HOST               | host on which your application will be exposed                                          |
| PORT               | port on which your application will be exposed                                          |
| DATA_BASE_CLIENT   | type of database client, like mysql, oracle, postgres. etc (currently only allows mysql | mysql2) |
| DATA_BASE_NAME     | database name                                                                           |
| DATA_BASE_HOST     | database host                                                                           |
| DATA_BASE_PORT     | database port                                                                           |
| DATA_BASE_USER     | database user                                                                           |
| DATA_BASE_PASSWORD | database password                                                                       |

## Endpoints

***Note: remember that before using these endpoints you need to fill in your [environment variables](#enviroments-variables)***

- Healthy endpoint

```bash
METHOD: GET
http://<host>:<port>/
```

- Get all users

```bash
METHOD: GET
http://<host>:<port>/user

```
