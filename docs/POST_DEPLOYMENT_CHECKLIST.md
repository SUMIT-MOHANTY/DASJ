# Post‑Deployment Verification Checklist

## Verification Steps
- ✅ HTTPS response returns **200 OK**
- ✅ TLS version **≥ 1.2** enforced
- ✅ Expected page content is present
- ✅ CDN caching headers (`Cache-Control`, `ETag`) are correct
- ✅ Monitoring alerts are active (health endpoint, error rate)

## Performance Validation
- ✅ Run **Lighthouse CLI** against the deployed URL
  `scripts/validate_lighthouse.sh` must report **page load < 200 ms**.

## Rollback Verification
- ✅ Verify previous version tag exists in Git (`git tag -l "v*"`).
- ✅ Confirm the tag can be redeployed via pipeline.

## Stakeholder Sign‑off
| Stakeholder | Sign‑off Date | Comments |
|------------|---------------|----------|
| Product Owner | YYYY‑MM‑DD | |
| QA Lead       | YYYY‑MM‑DD | |
| Ops Lead      | YYYY‑MM‑DD | |

## Pipeline Integration
- This checklist must be approved as a required step in the CI/CD pipeline (see `.github/workflows/post_deploy_check.yml`).
