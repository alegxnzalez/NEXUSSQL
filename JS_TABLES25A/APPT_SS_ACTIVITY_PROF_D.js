// APPT_SS_ACTIVITY_PROF_D.js

window.APPT_SS_ACTIVITY_PROF_D = {
  "tables": {
    "APPT_SS_ACTIVITY_PROF_D": {
      "columns": {
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
        },
        "APPT_SS_ACTIVITY_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APPT_SS_ACTIVITY_PROF",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTIVITY",
          "info": "The Activity ID that associates to the rule set. (Like Pickup)"
        }
      },
      "fk_tables": []
    }
  }
};
