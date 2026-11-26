/* Demo data. Every company, person, ticket and link here is fictional.
   In real use this file is written by the agent and the daily check-up from local case files. */
window.BOARD_DATA = {
updated: "2026-11-26",
notes_seen: "",

cases: [
  {case:"Northwind <> GitHub", file:"2026-11-24-northwind-github-code-review.md", company_id:"6f1a2b3c4d5e6f708192a3b4", monitor:"MON-12, MON-14", kb:["github.md"], status:"waiting-on-engineering", verdict:"new-bug", tickets:["SUP-412"], opened:"2026-11-24", region:"US", contact:"Dana Whitfield", source:"https://example.com/chat/northwind"},
  {case:"Contoso <> Microsoft Entra ID", file:"2026-11-20-contoso-entra-guests.md", company_id:"6f1a2b3c4d5e6f708192a3b5", monitor:"MON-31", kb:["microsoft-365-entra.md"], status:"waiting-on-client", verdict:"expected-behaviour", tickets:[], opened:"2026-11-20", region:"EU", contact:"Jonas Becker", source:"https://example.com/chat/contoso"},
  {case:"Fabrikam <> AWS GuardDuty", file:"2026-11-18-fabrikam-guardduty.md", company_id:"6f1a2b3c4d5e6f708192a3b6", monitor:"MON-40", kb:["aws.md"], status:"open", verdict:"client-action", tickets:[], opened:"2026-11-18", region:"EU", contact:"Priya Nair", source:"https://example.com/chat/fabrikam"},
  {case:"Globex <> Google Drive", file:"2026-11-21-globex-google-drive.md", company_id:"6f1a2b3c4d5e6f708192a3b7", monitor:"", kb:["google-workspace.md"], status:"waiting-on-client", verdict:"client-action", tickets:[], opened:"2026-11-21", region:"US", contact:"Marcus Hale", source:"https://example.com/chat/globex"},
  {case:"Initech <> GitLab", file:"2026-11-17-initech-gitlab-pipelines.md", company_id:"6f1a2b3c4d5e6f708192a3b8", monitor:"MON-17", kb:["gitlab.md"], status:"waiting-on-engineering", verdict:"needs-engineer", tickets:["SUP-398"], opened:"2026-11-17", region:"US", contact:"Rita Okafor", source:"https://example.com/chat/initech"},
  {case:"Tailspin <> Okta", file:"2026-11-25-tailspin-okta-mfa.md", company_id:"6f1a2b3c4d5e6f708192a3b9", monitor:"MON-22", kb:["okta.md"], status:"open", verdict:"", tickets:[], opened:"2026-11-25", region:"EU", contact:"Sven Lindqvist", source:"https://example.com/chat/tailspin"},
  {case:"Woodgrove <> Jira", file:"2026-11-13-woodgrove-jira-401.md", company_id:"6f1a2b3c4d5e6f708192a3c0", monitor:"MON-50", kb:["jira.md"], status:"open", verdict:"client-action", tickets:[], opened:"2026-11-13", region:"US", contact:"Ellen Park", source:"https://example.com/chat/woodgrove"},
  {case:"Adatum <> Intune", file:"2026-11-10-adatum-intune-roles.md", company_id:"6f1a2b3c4d5e6f708192a3c1", monitor:"MON-31", kb:["microsoft-365-entra.md"], status:"closed", verdict:"client-action", tickets:[], opened:"2026-11-10", closed:"2026-11-19", resolved_by:"client", region:"EU", contact:"Tomás Ruiz", source:"https://example.com/chat/adatum"}
],

tasks: [
  {case:"Proseware <> Onboarding: AWS and custom integrations", status:"open", opened:"2026-11-23", region:"US", source:"https://example.com/chat/proseware", tickets:[], contact:"Hannah Cole", note:"New client wants AWS connected and a custom integration for their HR exports before their audit window."},
  {case:"Lucerne <> Bitbucket", status:"waiting-on-client", opened:"2026-11-22", region:"EU", source:"https://example.com/chat/lucerne", tickets:[], contact:"Noah Fischer", note:"Reconnected Bitbucket as a non-admin, so pipelines return 403 and monitors stay on old data."},
  {case:"Halcyon Labs <> Bitbucket Data Center", status:"closed", opened:"2026-06-10", closed:"2026-10-01", resolved_by:"engineering", region:"EU", source:"https://example.com/chat/halcyon", tickets:["SUP-188"], contact:"Ruben de Vries", monitor:"MON-12, MON-14, MON-16", note:"Custom integration pushing Bitbucket Data Center data; four months of validation, size-limit and field-format problems.", backfill:true},
  {case:"Blue Yonder Air <> Slack", status:"closed", opened:"2026-10-14", closed:"2026-10-21", resolved_by:"explained", region:"US", source:"https://example.com/chat/blueyonder", tickets:[], contact:"Ivy Chen", note:"User list showed deactivated accounts; explained the sync window and the client confirmed after the next run.", backfill:true},
  {case:"Litware <> AWS IAM Identity Center", status:"closed", opened:"2026-10-02", closed:"2026-10-09", resolved_by:"support", region:"US", source:"https://example.com/chat/litware", tickets:[], contact:"Omar Haddad", note:"Access review empty because Identity Center was never connected on the management account.", backfill:true}
],

details: {
  "Northwind <> GitHub": {summary:"Code review monitor shows 80 rows against about 2,700 merged pull requests in the audit period.", cause:"New bug: the audit copy froze before the period ended; live data has the full set.", next:"Engineering regenerates the audit copy (SUP-412); keep the client's account manager updated.", links:[{label:"Client chat", url:"https://example.com/chat/northwind"},{label:"SUP-412", url:"https://example.atlassian.net/browse/SUP-412"}]},
  "Contoso <> Microsoft Entra ID": {summary:"Guest users invited through Teams show up in the device-management user list but not in the identity access review.", cause:"Expected: one integration keeps enabled guests by design, the other drops them.", next:"Client excludes guests in the review; product decides whether guests belong in the list.", links:[{label:"Client chat", url:"https://example.com/chat/contoso"}]},
  "Fabrikam <> AWS GuardDuty": {summary:"Client says GuardDuty is enabled, but no findings arrive and the threat-detection monitor stays empty.", cause:"Client action, medium confidence: the region may not be selected on the connection, or the screenshot is from another account.", next:"Check the connected account ID and regions, then ask for a fresh sync.", links:[{label:"Client chat", url:"https://example.com/chat/fabrikam"}]},
  "Globex <> Google Drive": {summary:"Clicking Connect on Google Drive shows Google's 'This app is blocked' page.", cause:"Client action: their Workspace admin hasn't trusted the Drive app's OAuth client ID.", next:"Admin trusts the app with the steps sent on 21 Nov.", links:[{label:"Client chat", url:"https://example.com/chat/globex"}]},
  "Initech <> GitLab": {summary:"Pipelines-must-succeed monitor fails on two repos even though the setting is ticked with a padlock.", cause:"Needs an engineer: a parent group likely enforces it and the API reports it off on the project.", next:"Client confirms which group enforces it; engineering checks the API response (SUP-398).", links:[{label:"Client chat", url:"https://example.com/chat/initech"},{label:"SUP-398", url:"https://example.atlassian.net/browse/SUP-398"}]},
  "Tailspin <> Okta": {summary:"MFA monitor non-compliant although the client enforces MFA through an Okta policy.", cause:"", next:"Investigate: start with the log query, then the policy scopes.", links:[{label:"Client chat", url:"https://example.com/chat/tailspin"}]},
  "Woodgrove <> Jira": {summary:"Every Jira call returns 401 Unauthorized since the client rotated their admin account.", cause:"Client action: the API token belongs to a deactivated user.", next:"Client creates a new token from an active admin and reconnects.", links:[{label:"Client chat", url:"https://example.com/chat/woodgrove"}]},
  "Adatum <> Intune": {summary:"Roles column empty in the device-management access review.", cause:"Client action: the app registration was missing directory read permission.", next:"Closed 19 Nov: client added the permission with admin consent and the roles appeared.", links:[{label:"Client chat", url:"https://example.com/chat/adatum"}]},
  "Proseware <> Onboarding: AWS and custom integrations": {summary:"New client wants AWS connected and a custom integration for HR exports.", cause:"", next:"Book the setup call; send the payload format for the HR context.", links:[{label:"Client chat", url:"https://example.com/chat/proseware"}]},
  "Lucerne <> Bitbucket": {summary:"After reconnecting Bitbucket, pipelines return 403 and monitors stay on old data.", cause:"Client action: the account that reconnected isn't a workspace admin.", next:"Client reconnects as a workspace admin; raise only if monitors stay stale after.", links:[{label:"Client chat", url:"https://example.com/chat/lucerne"}]},
  "Halcyon Labs <> Bitbucket Data Center": {
    summary:"Halcyon built a Bitbucket Data Center exporter into a custom integration; monitors stayed empty for months.",
    cause:"Stacked problems: a request size limit with a generic 500, the wrong test_type value, pr_id not unique across repos, +00:00 timestamps instead of Z, and branch protection sent per pattern.",
    next:"Closed 1 Oct: PRs backfilled in 9 watched batches, branch protection sent one record per repo, the size limit raised.",
    links:[{label:"Client chat", url:"https://example.com/chat/halcyon"},{label:"SUP-188", url:"https://example.atlassian.net/browse/SUP-188"}],
    timeline:[
      {date:"2026-06-10", text:"Client reports the PR payload fails with a generic 'Validation failed'; repos and branch protection validate.", link:"", source:"Chat"},
      {date:"2026-06-10", text:"Escalated to engineering with the sample payload; it validates for them, so a call is offered.", link:"", source:"Slack"},
      {date:"2026-07-14", text:"Engineering: send merged PRs only, one record per PR, reviewers as arrays.", link:"", source:"Slack"},
      {date:"2026-08-03", text:"Full PR upload (about 15 MB) fails twice with HTTP 500 in under half a second.", link:"", source:"Email"},
      {date:"2026-08-05", text:"Data team: request bodies are capped before they're read; the 500 should have been a 413.", link:"", source:"Slack"},
      {date:"2026-08-11", text:"pr_id is the key on its own, so PR numbers repeated across repos overwrite each other. Use repo-number.", link:"", source:"Slack"},
      {date:"2026-08-19", text:"Bug filed (SUP-188): uploads accepted but no evidence appears.", link:"", source:"Jira"},
      {date:"2026-08-23", text:"Root cause: test_type sent as 'bitbucket_pr' instead of 'list_prs', and merged_at empty on test records.", link:"", source:"Jira"},
      {date:"2026-08-25", text:"Timestamps switched from +00:00 to Z; the test PR appears in the monitor the next day.", link:"", source:"Email"},
      {date:"2026-08-28", text:"Engineering explains batching: one upload at a time, each must finish before the next.", link:"", source:"Slack"},
      {date:"2026-09-04", text:"Backfill session: 9 batches, about 22,000 records, each run watched before the next is sent.", link:"", source:"Slack"},
      {date:"2026-09-10", text:"Branch protection sent as one record per repo; all repos now visible.", link:"", source:"Email"},
      {date:"2026-09-11", text:"Request size limit raised.", link:"", source:"Email"},
      {date:"2026-10-01", text:"Final answers on which uploads replace and which add up; case closed.", link:"", source:"Slack"}
    ],
    learned:[
      {rule:"Size batches by bytes including the {\"data\":[...]} wrapper, not by record count. Aim for 1 to 1.5 MB per request.", detail:"There is no record-count cap; non-ASCII characters cost more bytes.", who:"Engineer", date:"2026-08-28", link:"", confirmed:true},
      {rule:"Never overlap uploads to the same context: each upload replaces the pending file, so an unread batch is lost silently.", detail:"Wait for the processing run to finish before the next POST.", who:"Engineer", date:"2026-08-27", link:"", confirmed:true},
      {rule:"Make pr_id unique across repos (repo-number) and keep the PR number in its own field.", detail:"Repeated PR numbers overwrote each other in the monitor.", who:"Data team", date:"2026-08-11", link:"", confirmed:true},
      {rule:"Timestamps must end in Z, not +00:00, on every date field.", detail:"Records with +00:00 never showed.", who:"Engineer", date:"2026-08-24", link:"", confirmed:true},
      {rule:"Send one branch-protection record per repo; extra records for the same repo are dropped, first one wins.", detail:"Pre-aggregate the strictest settings per repo.", who:"Engineer", date:"2026-09-07", link:"", confirmed:true}
    ]
  },
  "Blue Yonder Air <> Slack": {summary:"User list showed deactivated accounts.", cause:"Explained: the list refreshes on the next daily sync.", next:"Closed 21 Oct after the client confirmed.", links:[]},
  "Litware <> AWS IAM Identity Center": {summary:"Access review empty for Identity Center.", cause:"Identity Center was never connected on the management account.", next:"Closed 9 Oct: support added the service on the existing connection.", links:[]}
},

memory: {
  "Northwind <> GitHub": [{text:"Client's audit ends 15 Dec; they need the regenerated copy before then.", at:"2026-11-25"}]
},

recs: {
  "Globex <> Google Drive": [{id:"gx-clientid", text:"If their admin says the app is already trusted, ask which client ID they trusted before escalating.", why:"Seen 5 times (google-workspace.md)", source:{label:"Wiki", url:"https://example.com/wiki/google-workspace"}}],
  "Lucerne <> Bitbucket": [{id:"lu-admin", text:"Check the reconnect was done by a workspace admin before raising it.", why:"Seen 4 times (bitbucket.md)", source:{label:"Wiki", url:"https://example.com/wiki/bitbucket"}}]
},

knowledge: {
  "github.md": {updated:"2026-11-24", items:[
    {type:"fix", title:"Code review rows missing after the audit period", text:"Check the live view first. If it has the rows, the audit copy is stale: ask engineering to regenerate it.", seen:3, last:"2026-11-24", link:"https://example.com/wiki/github"},
    {type:"expected", title:"Bot-authored PRs excluded", text:"PRs opened by bots are filtered out of the review count by design.", seen:2, last:"2026-10-12", link:"https://example.com/wiki/github"}
  ]},
  "microsoft-365-entra.md": {updated:"2026-11-20", items:[
    {type:"fix", title:"403 Missing required permissions", text:"Client adds the directory read permissions, grants admin consent, then tests the connection again.", seen:7, last:"2026-10-23", link:"https://example.com/wiki/entra"},
    {type:"expected", title:"Guests in one list but not the other", text:"Device management keeps enabled guests; the identity review drops them. Exclude them in the review.", seen:2, last:"2026-11-20", link:"https://example.com/wiki/entra"}
  ]},
  "aws.md": {updated:"2026-11-18", items:[
    {type:"fix", title:"GuardDuty enabled but no data", text:"Ask for a console screenshot with region and account ID, check that region is selected, then run a fresh sync.", seen:1, last:"2026-11-18", link:"https://example.com/wiki/aws"}
  ]},
  "google-workspace.md": {updated:"2026-11-21", items:[
    {type:"fix", title:"Drive: This app is blocked", text:"The Workspace admin trusts the Drive app's own OAuth client ID under API controls.", seen:5, last:"2026-10-28", link:"https://example.com/wiki/google-workspace"}
  ]}
},

coverage: {date:"2026-11-26", cases:8, counts:{platform:7, screenshot:3, "monitor-code":3, logs:2, admin:1}},

cache: {},

checkup: {date:"2026-11-26", signals:{
  "Northwind <> GitHub": {on:"engineering", signal:"waiting", note:"SUP-412 in progress, regenerate expected this week"},
  "Contoso <> Microsoft Entra ID": {on:"client", signal:"waiting", note:"exclude steps sent 21 Nov"},
  "Fabrikam <> AWS GuardDuty": {on:"us", signal:"waiting", note:"client sent account ID 25 Nov, check regions"},
  "Globex <> Google Drive": {on:"client", signal:"quiet", note:"last message 21 Nov from us"},
  "Initech <> GitLab": {on:"engineering", signal:"waiting", note:"SUP-398 To Do"},
  "Tailspin <> Okta": {on:"us", signal:"waiting", note:"new, not investigated yet"},
  "Woodgrove <> Jira": {on:"client", signal:"solved", note:"client confirmed the new token works 25 Nov"},
  "Proseware <> Onboarding: AWS and custom integrations": {on:"us", signal:"waiting", note:"setup call to book"},
  "Lucerne <> Bitbucket": {on:"client", signal:"waiting", note:"reconnect as admin asked 22 Nov"}
}}
};
