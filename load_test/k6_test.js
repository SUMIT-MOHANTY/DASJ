import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [{ duration: "10m", target: 20 }],
    thresholds: {
        "http_req_duration{type:page}": ["<200"]
    }
};

export default function () {
    const url = __ENV.STATIC_SITE_URL;
    const res = http.get(url, { tags: { type: "page" } });
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
}
