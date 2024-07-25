---
sidebar_position: 1
---

# External STI Approach

MantisTable UI can interacts with an API to integrate an external STI approach. This document describes the API endpoints, their methods, and how to configure MantisTable UI to use these endpoints. 

:::warning
In order to use your own STI approach you need to implement an API by following the instructions on this page.
:::

## API Endpoints

The API must consists of two main endpoints:

1. **Semantic Table Interpretation**: This endpoint processes a given table and performs semantic interpretation.
2. **Get Table Annotations**: This endpoint returns the table along with its annotations.

## Configuration

The URL of the API endpoint and the names of the methods are configurable through the MantisTable UI configuration file (`.env`). The relevant configuration parameters are:

- `API_BASE_URL`: the base URL of the API.
- `SEMANTIC_INTERPRETATION_METHOD`: the method name for performing semantic table interpretation.
- `GET_ANNOTATIONS_METHOD`: the method name for retrieving table annotations.

### Example Configuration

```js
API_BASE_URL="http://api.mantistable.com"
SEMANTIC_INTERPRETATION_METHOD="/semantic-interpretation"
GET_ANNOTATIONS_METHOD="/get-annotations"
```

:::warning
To modify the configuration file, refer to the page [Configuration](/docs/getting-started/configuration.md) page.
:::

## Endpoints

### 1. Perform Semantic Table Interpretation

**HTTP Method:** `POST`

**Description:** This endpoint must accpets a table in JSON format and performs semantic interpretation on it.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```js
{
  "table": [
    ["Column1", "Column2", "Column3"],
    ["Value1", "Value2", "Value3"],
    ...
  ]
}
```

**Response:**

```js
{
  "status": "success",
  "message": "Table interpreted successfully",
  "data": {
    "table_id": "unique_table_identifier"
  }
}
```

**Example Request:**

```sh
curl -X POST http://api.mantistable.com/semantic-interpretation \
-H "Content-Type: application/json" \
-d '{
  "table": [
    ["Name", "Age", "Occupation"],
    ["John Doe", "29", "Engineer"],
    ["Jane Smith", "34", "Artist"]
  ]
}'
```

**Example Response:**

```js
{
  "status": "success",
  "message": "Table interpreted successfully",
  "data": {
    "table_id": "1234567890abcdef"
  }
}
```

### 2. Get Table Annotations

**HTTP Method:** `GET`

**Description:** This endpoint must returns the table along with its semantic annotations.

**Request Headers:**

- `Content-Type: application/json`

**Request Parameters:**

- `table_id`: The unique identifier of the table.

**Response:**

```js
{
  "status": "success",
  "data": {
    "table": [
      ["Column1", "Column2", "Column3"],
      ["Value1", "Value2", "Value3"],
      ...
    ],
    "annotations": [
      {"column": "Column1", "type": "Name", "confidence": 0.95},
      {"column": "Column2", "type": "Age", "confidence": 0.98},
      ...
    ]
  }
}
```

**Example Request:**

```sh
curl -X GET "http://api.mantistable.com/get-annotations?table_id=1234567890abcdef" \
-H "Content-Type: application/json"
```

**Example Response:**

```js
{
  "status": "success",
  "data": {
    "table": [
      ["Name", "Age", "Occupation"],
      ["John Doe", "29", "Engineer"],
      ["Jane Smith", "34", "Artist"]
    ],
    "annotations": [
      {"column": "Name", "type": "Person Name", "confidence": 0.95},
      {"column": "Age", "type": "Age", "confidence": 0.98},
      {"column": "Occupation", "type": "Job Title", "confidence": 0.92}
    ]
  }
}
```

## Conclusion

The API provides essential functionalities for semantic table interpretation and retrieval of annotations, which are crucial for the MantisTable UI. Proper configuration of the API endpoints ensures seamless interaction between the MantisTable UI and the external API.