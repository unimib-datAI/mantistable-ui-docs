# Troubleshooting

This section lists common issues that may occur when using **MantistableX** and provides possible solutions.

---

## 1. GPT API does not respond

**Problem:** The system does not return any lexicalization or text generation from GPT.

**Solution:**

- Check that your GPT API key is correctly set in the environment variables (`OPENAI_API_KEY`).
- Ensure that your internet connection is stable.
- Verify that the API endpoint is reachable and not blocked by a firewall or proxy.

---

## 2. Plugin is not activated

**Problem:** MantistableX plugins are not working or not available in the interface.

**Solution:**

- Open the configuration file and check that the desired plugin is enabled.
- Restart the application after modifying the configuration.
- Verify that all required dependencies are installed.

---

## 3. Table import fails

**Problem:** The system cannot import a table.

**Solution:**

- Ensure that the file format is supported (e.g., CSV, JSON).
- Check that the file is not corrupted or empty.
- Confirm that the file path is correct and accessible.

---

## 4. Annotation not displayed

**Problem:** Annotations do not appear after processing a table.

**Solution:**

- Refresh the interface.
- Verify that the annotation step was successfully completed in the logs.
- Check that the output directory is correctly configured.

---

## 5. Unexpected error during annotation

**Problem:** An error message appears while generating or editing annotations.

**Solution:**

- Check the logs for more detailed error messages.
- Verify that the annotation format is correct.
- If using GPT-based annotation, ensure that the API rate limit has not been exceeded.

---

If issues persist, please open a ticket in the issue tracker with detailed logs and steps to reproduce the error.
