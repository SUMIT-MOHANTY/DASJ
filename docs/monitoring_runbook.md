# Monitoring Runbook

## Overview
This runbook documents the Application Insights configuration and alert rules for the Azure Static Web App.

## Alerts
1. **Availability Alert** - Fires when availability drops below **99%**.
2. **Response Time Alert** - Fires when the average response time exceeds **2000 ms** over a 5‑minute window.

Both alerts are defined in `scripts/monitoring/create_alerts.sh` and target the Application Insights component named `<STATIC_WEB_APP_NAME>-ai`.

## Accessing Alerts in Azure Portal
1. Navigate to **Azure Portal** -> **Resource groups** -> `<resource‑group>` -> **Application Insights** -> `<STATIC_WEB_APP_NAME>-ai`.
2. Select **Alerts** -> **Alert rules** to view the two rules.

## Modifying Thresholds
Edit `scripts/monitoring/create_alerts.sh` and adjust the `--condition` values:
- Availability: change `availability < 99` to the desired percentage.
- Response time: change `requests/responseTime avg > 2000` to a different ms value.
After committing changes, the GitHub workflow will redeploy the updated rules.
