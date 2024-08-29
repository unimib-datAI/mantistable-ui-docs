---
sidebar_position: 2
---

# Configuration

This document describes the configuration file parameters for MantisTable UI. The configuration file is essential for connecting to databases, setting up external services, and customizing application behavior.

## How to Use the Configuration File

1. **Copy the Example File**

   First, make a copy of the `.env.example.prod` file. This can be done using the following command in a terminal:

   ```sh
   cp .env.example.prod .env
   ```

   The `.env.example.prod` is located inside the main folder:

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
    ├── .env.example.dev
    ├── .env.example.prod
    .
   ```

2. **Edit the Configuration File**

   Open the newly created `.env` file in a text editor of your choice. Modify the parameters as needed to fit your environment. Below is an example of how the file might look after customization:

   ```env
   # PostgreSQL
   POSTGRESQL_PASS="..."
   POSTGRES_HOST="..."
   POSTGRES_PORT="..."
   POSTGRES_DB="..."
   POSTGRES_USER="..."

   # MongoDB
   MONGO_INITDB_ROOT_USERNAME="..."
   MONGO_INITDB_ROOT_PASSWORD="..."

   # STI
   STI_HOST_UPLOAD_AND_PROCESS="..."
   STI_HOST_DOWNLOAD_ANNOTATIONS="..."

   # Plugins
   PLUGINS_HOST="..."
   NEXT_PUBLIC_PLUGINS_HOST="..."
   PLUGINS_PORT="..."

   # Mantis
   MANTIS_OUTSIDEPORT="..."

   # Mantistablex Variables
   GPT_KEY="..."
   GPT_ENDPOINT="..."
   ```

## Configuration Parameters

### PostgreSQL

- **`POSTGRESQL_PASS`**

  ```plaintext
  POSTGRESQL_PASS="password!"
  ```

  The password for the PostgreSQL database.

- **`POSTGRES_HOST`**

  ```plaintext
  POSTGRES_HOST="localhost"
  ```

  The hostname or IP address of the PostgreSQL server. The service is available also inside the Docker Network, so it's possible to specify `postgres`, which is the name of the service.

- **`POSTGRES_PORT`**

  ```plaintext
  POSTGRES_PORT="5432"
  ```

  The port on which the PostgreSQL server is running. `5432` is the default one.

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

- **`STI_HOST_UPLOAD_AND_PROCESS`**

  ```plaintext
  STI_HOST_UPLOAD_AND_PROCESS="http://sti_upload_and_process:5000"
  ```

  The address of the STI endpoint available to upload and process a single table. Replace this with the appropriate URL for your setup.

  - **`STI_HOST_DOWNLOAD_ANNOTATIONS`**

  ```plaintext
  STI_HOST_DOWNLOAD_ANNOTATIONS="http://sti_download:5000"
  ```

  The address of the STI endpoint available to download the annotated table. Replace this with the appropriate URL for your setup.

  :::warning
  The external Semantic Table Interpretation service must expose APIs as indicated in [External STI Approach](/docs/sti/external-sti-approach) page.
  :::

### Plugins

- **`PLUGINS_HOST`**

  ```plaintext
  PLUGINS_HOST="http://api:5000"
  ```

  The address of the plugin service. The address specified here is internal in the docker network, such as `http://api:5000`, which specify the container name.

- **`NEXT_PUBLIC_PLUGINS_HOST`**

  ```plaintext
  NEXT_PUBLIC_PLUGINS_HOST="http://localhost:5001"
  ```

  The address of the plugin service. The address specified here is external to the docker network, such as `http://localhost:5001`, because it is used in the frontend module.

- **`PLUGINS_PORT`**

  ```plaintext
  PLUGINS_PORT="5001"
  ```

  The port on which the plugins service (Doker container) will run.

### MantisTable

- **`MANTIS_OUTSIDEPORT`**

  ```plaintext
  MANTIS_OUTSIDEPORT="3000"
  ```

  The port on which the frontend platform service (Doker container) will run.

### Mantistablex

- **`GPT_KEY`**

  ```plaintext
  GPT_KEY="..."
  ```

  The private key from GPT APIs used to execute the mantistablex plugin.

- **`GPT_ENDPOINT`**

  ```plaintext
  GPT_ENDPOINT="..."
  ```

  The endpoint from GPT APIs used to execute the mantistablex plugin.

## Configuration File Example

Below is a complete example of a configuration file with all parameters:

```plaintext
   # PostgreSQL
   POSTGRESQL_PASS="table_ui2024!"
   POSTGRES_HOST="postgres"
   POSTGRES_PORT="5432"
   POSTGRES_DB="postgrestableui"
   POSTGRES_USER="postgres"

   # MongoDB
   MONGO_INITDB_ROOT_USERNAME="root"
   MONGO_INITDB_ROOT_PASSWORD="export2024!"

   # STI
   STI_HOST_UPLOAD_AND_PROCESS="https://selbat.datai.disco.unimib.it/dataset/createWithArray?token=selBat_demo_2023"
   STI_HOST_DOWNLOAD_ANNOTATIONS="http://vm.chronos.disco.unimib.it/dataset/${datasetName}/table/${table_id}?token=alligator_demo_2023"

   # Plugins
   PLUGINS_HOST="http://api:5000"
   NEXT_PUBLIC_PLUGINS_HOST="http://localhost:5001"
   PLUGINS_PORT="5001"

   # Mantis
   MANTIS_OUTSIDEPORT="3000"

   # Mantistablex Variables
   GPT_KEY="..."
   GPT_ENDPOINT="..."
```

## Conclusion

The configuration file for MantisTable UI is **crucial** for ensuring proper connections to databases and external services. By correctly setting these parameters, you ensure the smooth operation and integration of MantisTable UI within your environment.

:::warning
Check if the `/plugins` folder under `/app` directory in plguns API is present, otherwise, create it empty.
:::
