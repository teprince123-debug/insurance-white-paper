/* ==========================================================================
   Pravven — site configuration
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to switch on the forms.
   Until a value is filled in, the matching page falls back to a plain
   email link, so nothing on the site is ever a dead end.
   ========================================================================== */

window.PRAVVEN_CONFIG = {

  /* ---- Subscribe (Mailchimp) -------------------------------------------
     In Mailchimp: Audience → Signup forms → Embedded forms → Condensed.
     From the generated HTML, copy:
       1. the <form action="..."> URL          -> mailchimpAction
       2. the hidden anti-bot input's NAME     -> mailchimpBotField
          (it looks like: b_1a2b3c4d5e6f7_a1b2c3d4e5)
     ---------------------------------------------------------------------- */
  mailchimpAction:   "https://carrd.us11.list-manage.com/subscribe/post?u=5e2a16e99d30d34a948166280&id=fc57c3ec39&f_id=00958fe0f0",
  mailchimpBotField: "b_5e2a16e99d30d34a948166280_fc57c3ec39",

  /* ---- Contact form ------------------------------------------------------
     Any no-backend form endpoint works (Formspree, Basin, Formsubmit...).
     Leave blank to show the email link instead of the form.
     ---------------------------------------------------------------------- */
  contactFormAction: "",

  /* ---- Contact address ---------------------------------------------------
     Used for the fallback links and the "or just email us" line.
     ---------------------------------------------------------------------- */
  contactEmail: "pravvenhq@gmail.com"

};
