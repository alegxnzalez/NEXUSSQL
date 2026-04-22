// MAIL_AUDIT.js

window.MAIL_AUDIT = {
  "tables": {
    "MAIL_AUDIT": {
      "description": "Summary audit of email request.",
      "columns": {
        "MAIL_AUDIT_MSG_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence for PK."
},
        "FROM_EMAIL": {
          "type": "VARCHAR2(320)",
          "nullable": false,
          "info": "From party email address."
},
        "TO_EMAIL": {
          "type": "VARCHAR2(320)",
          "nullable": false,
          "info": "To party email address."
},
        "REPLY_TO_EMAIL": {
          "type": "VARCHAR2(320)",
          "nullable": true,
          "info": "Reply to email address."
},
        "STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "QUOTA",
                    "SENDER",
                    "SUPPRESSION",
                    "FAILURE",
                    "SENT",
                    "UNSENT"
          ],
          "info": "Status of the email."
},
        "SENT_AT": {
          "type": "DATE",
          "nullable": false,
          "info": "Time the email was initially generated."
},
        "RESENT_AT": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the email was resent."
},
        "SUBJECT": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "info": "Subject of the email."
},
        "USE_CASE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Use case for the email."
},
        "MAIL_CONTEXT": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Context of the email."
},
        "BLOCKED_MSG_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A full copy of the blocked email message, if persisted for resend and content is still available."
},
        "MAIL_AUDIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MAIL_AUDIT_PROFILE",
          "info": "Top-ranked mail audit profile that triggered the audit."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};