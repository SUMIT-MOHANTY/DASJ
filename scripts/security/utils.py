import json

def load_config(path):
    """Load a JSON configuration file.
    Returns an empty dict if the file does not exist or is invalid.
    """
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}
