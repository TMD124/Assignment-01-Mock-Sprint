# Overview
It's important to test edge cases across the website because unhandled cases like invalid logins, unauthorised page access, and unexpected content (missing photos or long bios) can break the user experience. This report documents testing of these edge cases and any bugs found.
 
# Testing Methodology
To properly test these edge cases, we manually replicated three scenarios: attempting to log in with invalid credentials, attempting to access the Team page directly via URL without being logged in and viewing team cards with a missing photo or long bio. Each scenario was tested by performing the steps a real user might take and comparing the actual behaviour of the website against the expected behaviour.
 
# Testing Results
 
| # | Scenario | Steps | Expected Result | Actual Result | Pass/Fail |
|---|----------|-------|------------------|----------------|--------|
| 1 | Invalid login | Navigate to the login page, enter an incorrect email/password, and submit | An error message is shown, the user remains on the login page, and no session is created | "Invalid email or password" error message shown, user stays on login page, and no session created | Pass |
| 2 | Direct team-page access without login | Log out (or open an incognito window) and navigate directly to the Team page URL (https://assignment-01-mock-sprint-frontend.vercel.app/dashboard) | The user stays on the login page and never sees the Team page content | User stays on login page and never sees Team page content | Pass |
| 3 | Missing-photo card | View a team card whose photo has not been provided | A placeholder is shown gracefully, with no broken image icon and no layout shift | Placeholder is shown: grey photo with word “Picture”. Layout doesn’t change | Pass |
| 4 | Long-blurb card | View a team card with an unusually long bio | The text wraps correctly and the card layout does not overflow or break | Text wraps correctly inside card and it grows larger with more text. Doesn’t overflow or break the layout | Pass |