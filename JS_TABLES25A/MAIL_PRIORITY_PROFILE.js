// MAIL_PRIORITY_PROFILE.js

window.MAIL_PRIORITY_PROFILE = {
  "tables": {
    "MAIL_PRIORITY_PROFILE": {
      "columns": {
        "MAIL_PRIORITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Profile ID "
        },
        "MAIL_PRIORITY_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "THRESHOLD_PERCENT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The percentage of the overall mail threshold to trigger the profile. Either the percentage or the #/duration should be used. "
        },
        "THRESHOLD_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The # of messages per a fixed duration to trigger the profile. Either the percentage or the #/duration should be used. "
        },
        "THRESHOLD_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The duration for #/duration triggering of the profile."
        },
        "THRESHOLD_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "THRESHOLD_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NOTIFICATION_FREQUENCY": {
          "type": "NUMBER()",
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
      "fk_tables": [
        "MAIL_PPROFILE_CONTACT",
        "MAIL_PPROFILE_EMAIL",
        "MAIL_PRIORITY_GROUP"
      ]
    }
  }
};
