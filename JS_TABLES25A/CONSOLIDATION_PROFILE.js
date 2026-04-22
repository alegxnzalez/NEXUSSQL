// CONSOLIDATION_PROFILE.js

window.CONSOLIDATION_PROFILE = {
  "tables": {
    "CONSOLIDATION_PROFILE": {
      "columns": {
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONSOLIDATION_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_WINDOW",
          "info": "Time window determining when to batch messages. "
        },
        "SUMMARY_STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "Stylesheet used to generate summary message "
        },
        "BATCH_SIZE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Another way to determine when to batch messages."
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
        "CONTACT",
        "NOTIFY_REQUEST",
        "NOTIFY_SUBJECT_CONTACT",
        "NOTIFY_SUBJECT_DRIVER",
        "NOTIFY_SUBJECT_INVPARTY",
        "NOTIFY_SUBJECT_SERVPROV",
        "NS_CONTACT_POINT_OVERRIDE"
      ]
    }
  }
};
