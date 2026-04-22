// MAIL_AUDIT_PROF_PERSIST.js

window.MAIL_AUDIT_PROF_PERSIST = {
  "tables": {
    "MAIL_AUDIT_PROF_PERSIST": {
      "columns": {
        "MAIL_AUDIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_AUDIT_PROFILE",
          "info": "Audit Profile ID. "
        },
        "PERSIST_STATE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "QUOTA",
            "SENDER",
            "SUPPRESSION",
            "FAILURE",
            "SENT"
          ],
          "key_value": true,
          "info": "State for audit persistence of email content."
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
