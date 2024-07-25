---
sidebar_position: 1
---

# Export

MantisTable UI is designed with extensibility in mind, allowing users to enhance its capabilities through the use of plugins. There are three main types of plugins that can be integrated into MantisTable UI:

1. **Export Plugins**
2. **Add-on Plugins**
3. **Transformation Plugins**

## Plugin Types

### 1. Export Plugins

**Description:**  
Export plugins enable MantisTable UI to export data and annotation in user-defined formats.

**Use Cases:**
- Exporting tables to custom file formats (e.g., JSON, XML, CSV)
- Generating reports in PDF or other document formats
- Custom serialization of table data for integration with other systems

### 2. Add-on Plugins

**Description:**  
Add-on plugins use semantic annotations to process table data, providing additional functionalities such as lexicalization and visualization. These plugins enhance the interpretability and presentation of the data.

**Use Cases:**
- Visualizing table data in charts or graphs
- Generating natural language descriptions of table content
- Integrating with external semantic services for enriched data processing

### 3. Transformation Plugins

**Description:**  
Transformation plugins perform various transformations on table data, such as data cleaning and data transformation. These plugins help in improving data quality and reshaping data to meet specific analysis needs.

**Use Cases:**
- Cleaning and normalizing data entries
- Transforming table structures
- Applying complex data transformations and computations

## Plugin Configuration

Plugins are configured through the MantisTable UI configuration file (`.env`). The relevant parameters for configuring plugins include the base URL for the plugins service and the specific settings for each type of plugin.

### Example Configuration

```env
PLUGINS_PORT="5001"
EXPORT_PLUGINS_DIR="/path/to/export/plugins"
ADDON_PLUGINS_DIR="/path/to/addon/plugins"
TRANSFORMATION_PLUGINS_DIR="/path/to/transformation/plugins"
```

## Developing Plugins

### General Guidelines

1. **Isolation:** Each plugin should operate independently and not interfere with other plugins or the core functionality of MantisTable UI.
2. **Configuration:** Plugins should allow configuration through environment variables or configuration files.
3. **Documentation:** Provide clear documentation for each plugin, including usage instructions, dependencies, and configuration options.

### Export Plugin Example

**Structure:**

```
/export-plugin-example
  /src
    index.js
  /config
    config.json
  /docs
    README.md
```

**index.js:**

```javascript
module.exports = {
  export: (tableData) => {
    // Implement custom export functionality here
    return customFormattedData;
  }
};
```

**config.json:**

```json
{
  "format": "custom-format",
  "description": "Export plugin for custom format"
}
```

### Add-on Plugin Example

**Structure:**

```
/addon-plugin-example
  /src
    index.js
  /config
    config.json
  /docs
    README.md
```

**index.js:**

```javascript
module.exports = {
  process: (annotatedTable) => {
    // Implement custom processing functionality here
    return processedData;
  }
};
```

**config.json:**

```json
{
  "name": "semantic-visualizer",
  "description": "Add-on plugin for visualizing annotated tables"
}
```

### Transformation Plugin Example

**Structure:**

```
/transformation-plugin-example
  /src
    index.js
  /config
    config.json
  /docs
    README.md
```

**index.js:**

```javascript
module.exports = {
  transform: (tableData) => {
    // Implement custom transformation functionality here
    return transformedData;
  }
};
```

**config.json:**

```json
{
  "name": "data-cleaner",
  "description": "Transformation plugin for cleaning and normalizing data"
}
```

## Using Plugins in MantisTable UI

1. **Install the Plugin:**
   - Place the plugin files in the appropriate directory as specified in the configuration file.
   - Ensure all dependencies are installed and properly configured.

2. **Configure the Plugin:**
   - Update the `.env` file with the necessary configuration parameters.
   - Restart MantisTable UI to load the new plugins.

3. **Access Plugin Functionality:**
   - Export plugins can be accessed through the export menu in the UI.
   - Add-on plugins are typically accessed through semantic processing options.
   - Transformation plugins can be applied through the data transformation tools in the UI.

## Conclusion

The plugin system in MantisTable UI provides a flexible and powerful way to extend the functionality of the application. By developing custom export, add-on, and transformation plugins, users can tailor MantisTable UI to meet their specific needs and enhance their data management workflows.