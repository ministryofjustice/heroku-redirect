# heroku-redirect

Runs a Heroku dyno redirecting request to a new host, easing migration from Heroku to other platforms.

## Configuration

- Create a Config Var (environment variable) called `HOST` with your new hostname. This should not include the trailing slash (e.g. `https://your-app.apps.live-1.cloud-platform.service.justice.gov.uk`)
- Connect your Heroku dyno to the `ministryofjustice/heroku-redirect` repository on GitHub.
- Enable automatic deploys from the `main` branch
