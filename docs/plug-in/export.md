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
  export.py
  config.json
  input.json
  output/
    kg.json
  README.md
```

**export.py:**

```python
file_path = f"{os.path.dirname(os.path.realpath(__file__))}/input.json"
file_open = open(file_path, encoding="utf-8")
data = json.load(file_open)
# EXPORT CODE
export_file_path = f"{os.path.dirname(os.path.realpath(__file__))}/output/kg.json"
```

**config.json:**

```json
{
  "type": "export",
  "output": "kg.json",
  "entry_file": "export.py",
  "name": "json",
  "description": "The 'json' Export Plugin allows users to export annotated tables from Wikidata into JSON triples. This plugin processes tables annotated with Wikidata properties and values, converting them into a structured JSON format that represents each cell's data as subject-predicate-object triples. It simplifies data extraction and integration for developers and researchers working with linked data and semantic web applications"
}
```

The entry file is specified by the `entry_file` field in the `config.json` file and it represents the entry point of the plugin, because it is the file that is executed to apply the plugin. Once the plugin is selected, the annotated table (defined in the output of the STI sytem ~ [External STI Approach](/docs/sti/external-sti-approach)) is injected in the `input.json` file. Then, the `entry_file` is applied using the `subprocess` module in python and, finally, the output is read in the file defined by the `config.json` using the `output` field in the `output` directory. For this reason it is very important to use the following structure to identify the correct file path in the plugin:

```python
file_path = f"{os.path.dirname(os.path.realpath(__file__))}/input.json" # input
export_file_path = f"{os.path.dirname(os.path.realpath(__file__))}/output/kg.json" # output
```

The plugin is executed on an isolated environment, so you can't install your own libraries but some are already installed:

```
tqdm
rdflib
pandas
numpy
requests
psycopg2
pymongo
python-multipart
```

## Using Plugins in MantisTable UI

1. **Install the Plugin:**

   - Place the plugin files in the appropriate directory as specified in the configuration file.
   - Ensure all dependencies are installed and properly configured.

2. **Configure the Plugin:**

   - Update the `config.json` file with the necessary configuration parameters.

3. **Access Plugin Functionality:**
   - Export plugins can be accessed through the export menu in the UI.
   - Add-on plugins are typically accessed through semantic processing options.
   - Transformation plugins can be applied through the data transformation tools in the UI.
