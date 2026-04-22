// APPT_SS_ACTIVITY_PROF.js

window.APPT_SS_ACTIVITY_PROF = {
  "tables": {
    "APPT_SS_ACTIVITY_PROF": {
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
          "info": "The unique identifier. "
        },
        "APPT_SS_ACTIVITY_PROF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The ID of the Appointment Shipment Stop Activity Profile. "
        },
        "APPT_SS_ACTIVITY_PROF_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "name of appointment shipment stop activity profile."
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "APPT_RULE_SET",
        "APPT_SS_ACTIVITY_PROF_D"
      ]
    }
  }
};
