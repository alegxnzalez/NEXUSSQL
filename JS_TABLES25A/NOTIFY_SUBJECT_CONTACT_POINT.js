// NOTIFY_SUBJECT_CONTACT_POINT.js

window.NOTIFY_SUBJECT_CONTACT_POINT = {
  "tables": {
    "NOTIFY_SUBJECT_CONTACT_POINT": {
      "columns": {
        "NS_CONTACT_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "NS_CONTACT_POINT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "GC3 notify subject "
        },
        "PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false
        },
        "CONTACT_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT_POINT",
          "info": "GC3 contact point "
        },
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Whether messages should be consolidated using the provided profile."
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
