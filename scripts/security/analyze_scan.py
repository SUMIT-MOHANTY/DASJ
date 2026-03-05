import sys
from utils import load_config

def main():
    config = load_config("/workspace/scripts/security/scan_config.json")
    # Placeholder for OWASP ZAP or other security scan invocation
    print("[SCAN] Running placeholder security scan with config:")
    print(config)

if __name__ == "__main__":
    main()
