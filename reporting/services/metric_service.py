# Service that returns static example data for the closure report
from typing import List, Dict

def get_deployment_metrics() -> Dict[str, object]:
    return {"build_time_seconds": 125.4, "release_version": "v1.4.2", "page_load_ms": 842.1}

def get_compliance_audit() -> Dict[str, object]:
    return {"security_scan_passed": True, "sandbox_classified": True, "audit_comments": "All checks passed."}

def get_performance_testing() -> List[Dict[str, object]]:
    return [{"metric": "Lighthouse Score", "value": 92}, {"metric": "CDN Latency (ms)", "value": 45}]

def get_lessons_learned() -> List[Dict[str, object]]:
    return [
        {"lesson_id": 1, "description": "Need tighter CI/CD gating.", "governance_gap": True},
        {"lesson_id": 2, "description": "Improved monitoring reduces MTTR.", "governance_gap": False}
    ]
