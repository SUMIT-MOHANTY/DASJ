import os

def get_parent_dir(path):
    """Return the directory name of *path* using correct os.path API."""
    return os.path.dirname(path)
