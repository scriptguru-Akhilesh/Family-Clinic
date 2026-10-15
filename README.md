# Rosemount Family Doctors

A responsive, static redesign using the public content from http://familydoctors.ie/.

## Preview

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000/. No build or dependencies are needed.

## Content

- Homepage and all 10 main destination pages, including appointments.
- All 10 staff profiles and corresponding photographs.
- Complete fee and service lists, nurse services, maternity schedule, clinic and out-of-hours details, prescriptions, contact information, and privacy statement.
- Local prescription request PDF, shared styles, and responsive navigation.
- Source page text and URLs are retained in `source-content.json` for review.

The current homepage lists 4 Ballyroan Road, Templeogue, Dublin 16. The original privacy statement still lists the former Rosemount Shopping Centre address; the migrated statement preserves it and explains the discrepancy. Clinic hours use the published Monday–Friday 9am–1pm and 2pm–5pm schedule. Fees, clinical-service descriptions, eligibility wording, and out-of-hours details are copied from the existing site and have not been independently updated.

Appointment and prescription requests use the practice email and telephone links. No patient data is collected or stored by this static website. Social links and Google Maps require an internet connection. This project has not been deployed to the clinic domain.
