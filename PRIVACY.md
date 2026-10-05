# Privacy Policy

YaaS is a small open source project. This policy describes how the project handles personal data.

## Summary

YaaS does not collect, store, sell, or share personal data.

We do not use accounts, analytics, advertising trackers, or cookies for tracking
end users.

## What YaaS does

When you run YaaS locally or deploy it yourself, the service responds to requests with plain text output. Request content is handled in memory to produce that response and is not persisted by the application.

## What we do not do

YaaS does not and will not:

- require user accounts
- collect names, email addresses, or contact details
- collect user analytics or behavioral telemetry in the application
- set tracking cookies
- sell or share personal data with third parties

## Third-party services

This repository is hosted on GitHub. GitHub may process data according to its own policies when you browse the repository, open issues, or submit pull requests. That processing is governed by GitHub, not by YaaS.

If you deploy YaaS to your own infrastructure, your hosting provider's policies apply to that deployment.

## Operational metrics

YaaS does not track users. Self-hosted operators may scrape `GET /metrics` for
operational monitoring (CPU, memory, HTTP request counts, and similar runtime
signals). That telemetry describes the service process, not individual users or
request content persisted by the application.

## Changes

If this policy changes, the update will be committed to this repository.

## Contact

Questions about privacy can be raised in [GitHub issues](https://github.com/ravidorr/yes-as-a-service/issues).
