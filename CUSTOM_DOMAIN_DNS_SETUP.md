# Custom Domain DNS Setup Instructions

Follow these steps to point your custom domain to the application.

1. **Determine your target endpoint** - e.g., the load balancer DNS name or the
   Cloud provider URL (placeholder: `your-app.example.cloud`).
2. **Add a CNAME record** for the sub‑domain you wish to use.
   - **Host/Alias**: `your.custom.domain` (replace with your actual sub‑domain)
   - **Target/Value**: `your-app.example.cloud` (replace with the real endpoint)
   - **TTL**: `3600` seconds (or default)
3. **If using an apex/root domain**, add an ALIAS/ANAME record if your DNS
   provider supports it, or use a URL‑forwarding service.
4. **Verify propagation** - run `dig CNAME your.custom.domain` or use an
   online DNS checker. Expect a 5‑15 minute TTL before changes appear.
5. **Configure the application** (if required) to accept the custom host.
   - Usually this involves adding the domain to an allowed‑hosts list.

**Note**: Replace all placeholder values (`your.custom.domain`,
`your-app.example.cloud`) with the actual domain and target provided by the
infrastructure team once they are approved.
