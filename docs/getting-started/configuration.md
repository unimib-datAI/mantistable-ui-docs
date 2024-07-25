---
sidebar_position: 2
---

# Configuration

This document describes the configuration file parameters for MantisTable UI. The configuration file is essential for connecting to databases, setting up external services, and customizing application behavior.

## How to Use the Configuration File

1. **Copy the Example File**

   First, make a copy of the `example.env` file. This can be done using the following command in a terminal:

   ```sh
   cp example.env .env
   ```

   The `example.env` is located inside the main folder:

   ```bash
    mantistable-ui
    ├── export
    ├── public
    ├── src
    ├── .gitignore
    ├── README.md
    ├── components.json
    ├── docker-compose.yml
    ├── drizzle.config.ts
    ├── example.env
    .
   ```

2. **Edit the Configuration File**

   Open the newly created `.env` file in a text editor of your choice. Modify the parameters as needed to fit your environment. Below is an example of how the file might look after customization:

   ```env
   DATABASE_URL="postgresql://postgres:yourpassword@yourhost:5432/yourdatabase"
   POSTGRESQL_PASS="your_postgres_password"
   POSTGRES_HOST="your_postgres_host"
   POSTGRES_PORT="your_postgres_port"
   POSTGRES_DB="your_postgres_db"
   POSTGRES_USER="your_postgres_user"

   MONGO_INITDB_ROOT_USERNAME="your_mongo_username"
   MONGO_INITDB_ROOT_PASSWORD="your_mongo_password"
   
   STI_HOST="http://your.sti.host:port"
   
   PLUGINS_PORT="your_plugins_port"
   ```

## Configuration Parameters

### PostgreSQL

- **`POSTGRESQL_URL`**

  ```plaintext
  DATABASE_URL="postgresql://postgres:password@localhost:port/mantistableui"
  ```

  Specifies the URL for connecting to the PostgreSQL database.

- **`POSTGRESQL_PASS`**

  ```plaintext
  POSTGRESQL_PASS="password!"
  ```

  The password for the PostgreSQL database user. This should match the password specified in the `DATABASE_URL`.

- **`POSTGRES_HOST`**

  ```plaintext
  POSTGRES_HOST="localhost"
  ```

  The hostname or IP address of the PostgreSQL server.

- **`POSTGRES_POR`**

  ```plaintext
  POSTGRES_PORT="5432"
  ```

  The port on which the PostgreSQL server is running.

- **`POSTGRES_DB`**

  ```plaintext
  POSTGRES_DB="mantistableui"
  ```

  The name of the PostgreSQL database to connect to.

- **`POSTGRES_USER`**

  ```plaintext
  POSTGRES_USER="user"
  ```

  The username for the PostgreSQL database.

### MongoDB

- **`MONGO_INITDB_ROOT_USERNAME`**

  ```plaintext
  MONGO_INITDB_ROOT_USERNAME="root"
  ```

  The root username for the MongoDB instance.

- **`MONGO_INITDB_ROOT_PASSWORD`**

  ```plaintext
  MONGO_INITDB_ROOT_PASSWORD="password!"
  ```

  The root password for the MongoDB instance.

### External STI Services

- **`STI_HOST`**

  ```plaintext
  STI_HOST="http://local:5042"
  ```

  Specifies the hostname, URL or IP address for an STI service. Replace this with the appropriate URL for your setup.

  :::warning
  The external Semantic Table Interpretation service must expose APIs as indicated in [External STI Services](/docs/external-sti-services) page.
  :::

### Plugins

- **`PLUGINS_PORT`**

  ```plaintext
  PLUGINS_PORT="port"
  ```

  The port on which the plugins service will run.

## Configuration File Example

Below is a complete example of a configuration file with all parameters:

```plaintext
DATABASE_URL="postgresql://postgres:password!@localhost:5432/mantistableui"
POSTGRESQL_PASS="password!"
POSTGRES_HOST="localhost"
POSTGRES_PORT="5432"
POSTGRES_DB="mantistableui"
POSTGRES_USER="postgres"

MONGO_INITDB_ROOT_USERNAME="root"
MONGO_INITDB_ROOT_PASSWORD="password!"

STI_HOST="http://unimib.it:5042"

PLUGINS_PORT="5001"
```

## Conclusion

The configuration file for MantisTable UI is **crucial** for ensuring proper connections to databases and external services. By correctly setting these parameters, you ensure the smooth operation and integration of MantisTable UI within your environment.