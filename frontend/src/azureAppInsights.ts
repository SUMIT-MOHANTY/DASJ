import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export function initAppInsights() {
  const key = import.meta.env.REACT_APP_APPINSIGHTS_KEY;
  if (!key) { console.warn('AppInsights key missing'); return; }
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: key,
      enableAutoRouteTracking: true,
    },
  });
  appInsights.loadAppInsights();
  (window as any).appInsights = appInsights;
}
