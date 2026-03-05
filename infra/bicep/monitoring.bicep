// Bicep template for Application Insights and alert rules
param staticWebAppName string
param location string = resourceGroup().location

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${staticWebAppName}-ai'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

resource availabilityAlert 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: '${staticWebAppName}-availability-alert'
  location: location
  scope: appInsights
  criteria: {
    allOf: [
      {
        metricName: 'availability'
        operator: 'LessThan'
        threshold: 99
        timeAggregation: 'Average'
      }
    ]
  }
  severity: 2
  description: 'Availability fell below 99%'
}

resource responseTimeAlert 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: '${staticWebAppName}-response-time-alert'
  location: location
  scope: appInsights
  criteria: {
    allOf: [
      {
        metricName: 'requests/responseTime'
        operator: 'GreaterThan'
        threshold: 2000
        timeAggregation: 'Average'
        dimensions: []
      }
    ]
  }
  windowSize: 'PT5M'
  severity: 3
  description: 'Average response time > 2000 ms'
}
