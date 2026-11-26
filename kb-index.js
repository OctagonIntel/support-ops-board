/* Demo knowledge index: internal docs, help center articles and the monitor list. All fictional.
   In real use the agent builds this read-only from the team's docs and help center. */
window.KB_INDEX = {updated:"2026-11-24", sources:{notion:"Internal docs", help:"Help center"}, items:[
{src:"notion", title:"Why a monitor isn't pulling data", path:"Support / Guides", edited:"2026-04-22", summary:"What each integration needs and what stops a monitor pulling data.", url:"https://example.com/docs/monitor-troubleshooting"},
{src:"notion", title:"Integration won't connect: API access", path:"Support / Guides", edited:"2026-01-07", summary:"The client needs an API key; free tiers have no API access.", url:"https://example.com/docs/cant-connect"},
{src:"notion", title:"Website certificate check not updating", path:"Support / Guides", edited:"2025-09-22", summary:"Fill in both the application URL and the website URL, then retry.", url:"https://example.com/docs/ssl-checker"},
{src:"notion", title:"Bitbucket integration spec", path:"Engineering / Integration specs", edited:"2026-10-05", summary:"What the Bitbucket integration collects and which scopes it needs.", url:"https://example.com/docs/bitbucket"},
{src:"notion", title:"Okta integration spec", path:"Engineering / Integration specs", edited:"2026-11-04", summary:"Scopes per resource type and setup steps.", url:"https://example.com/docs/okta"},
{src:"help", title:"GitHub - User Guide", path:"Help center", edited:"2026-11-11", summary:"How to connect GitHub and choose repositories.", url:"https://example.com/help/github"},
{src:"help", title:"Bitbucket - User Guide", path:"Help center", edited:"2026-10-20", summary:"How to connect Bitbucket as a workspace admin.", url:"https://example.com/help/bitbucket"},
{src:"help", title:"Okta - User Guide", path:"Help center", edited:"2026-09-02", summary:"How to create the API app and grant read scopes.", url:"https://example.com/help/okta"},
{src:"help", title:"Building a custom integration", path:"Help center", edited:"2026-08-15", summary:"Authentication, contexts and payload format for custom integrations.", url:"https://example.com/help/custom-integrations"},
{src:"help", title:"Connect AWS", path:"Help center", edited:"2026-03-16", summary:"Connect your AWS accounts with a read-only role.", url:"https://example.com/help/aws"}
],
monitors:[
{id:"MON-12", internal:"VW-CODE-REVIEW", name:"Source control | Code review performed for production pull requests", desc:"Merged pull requests with a review by someone other than the author.", integ:"GitHub, GitLab, Bitbucket, Azure DevOps"},
{id:"MON-14", internal:"VW-PRS", name:"Source control | Production pull requests", desc:"Every merged pull request to a production branch.", integ:"GitHub, GitLab, Bitbucket, Azure DevOps"},
{id:"MON-16", internal:"VW-BRANCH-RULES", name:"Source control | Branch protection rules", desc:"Branch protection settings per repository.", integ:"GitHub, GitLab, Bitbucket"},
{id:"MON-17", internal:"VW-PIPELINE-CHECKS", name:"Source control | Automated checks enforced", desc:"Repositories that require pipelines to pass before merge.", integ:"GitHub, GitLab"},
{id:"MON-22", internal:"VW-IDP-MFA", name:"Identity provider | MFA enforced", desc:"Users covered by an MFA policy.", integ:"Okta, Microsoft Entra ID, Google Workspace"},
{id:"MON-31", internal:"VW-ACCESS-REVIEW", name:"Access review | Users with access to the critical system", desc:"Users and roles in each critical system.", integ:"Microsoft Intune, Microsoft Entra ID, Slack, Jira"},
{id:"MON-40", internal:"VW-THREAT-FINDINGS", name:"Cloud | Threat detection findings", desc:"Findings from the cloud threat detector.", integ:"AWS GuardDuty"},
{id:"MON-50", internal:"VW-CLOSED-TICKETS", name:"Change management | Closed tickets", desc:"Tickets closed in the audit period.", integ:"Jira, Linear, Asana"}
]};
