---
sidebar_position: 1
---

# Export Plugins

Export plugins enable MantisTable UI to export data and annotation in user-defined formats.

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