# Load Test Guide

## Prerequisites

- Node.js installed (for the `npm` command).
- `STATIC_SITE_URL` environment variable pointing to the deployed static site (e.g., `https://my-site.com`).

## Running the Test Locally

```bash
export STATIC_SITE_URL=https://example.com
./load_test/run_load_test.sh
```

The script will install `k6` if it is missing and then execute a 10‑minute load test with 20 constant virtual users.

## Interpreting Results

After the run, k6 prints a summary. The important metric is `http_req_duration{type:page}` - the request latency for page loads.

- **Pass**: All values are below **200 ms** (the threshold defined in the script).
- **Fail**: k6 exits with a non‑zero status and the CI job will be marked failed.

## CI Integration

The GitHub Actions workflow (`.github/workflows/load_test.yml`) runs this test on every push to `main` using the same threshold.
