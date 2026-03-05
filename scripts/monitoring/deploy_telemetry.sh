#!/usr/bin/env bash
set -euo pipefail

TARGET_FILE="frontend/src/telemetry.ts"
cat > "$TARGET_FILE" <<'EOF'
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const instrumentationKey = process.env.APPINSIGHTS_INSTRUMENTATIONKEY;
if (!instrumentationKey) {
  console.warn('App Insights instrumentation key not set');
}

export const appInsights = new ApplicationInsights({
  config: {
    connectionString: instrumentationKey,
    enableAutoRouteTracking: true,
    enableCorsCorrelation: true,
  },
});
appInsights.loadAppInsights();
EOF
echo "Telemetry file created at $TARGET_FILE"
