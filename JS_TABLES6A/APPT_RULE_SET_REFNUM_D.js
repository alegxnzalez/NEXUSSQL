// APPT_RULE_SET_REFNUM_D.js

window.APPT_RULE_SET_REFNUM_D = {
  "tables": {
    "APPT_RULE_SET_REFNUM_D": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "APPT_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APPT_RULE_SET",
          "info": "A GID to define the appointment rule set in the system. "
        },
        "APPT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "The appointment reference number qualifier. The qualifier related to shipment is used. "
        },
        "APPT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "info": "The appointment reference number value. "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the reference number details on the shipment contain all the reference number details defined on the appointment rule set, when the Compatible check box is selected for each appointment rule set, then the shipment is compatible.\nIf you do not specify any shipment reference numbers on your appointment rule set, the shipment is considered as compatible.\nFor example, the following table contains reference number details on the shipment and appointment rule sets along with the status of compatible check box of individual rule sets.\nShipment Reference Number Qualifier and Value\nAppointment Rule Set Reference Number Qualifier and Value\nQ1 V1 Q1 V1, selected\nQ2 V2 Q2 V2, selected\nQ3 V3  \nQ4 V4  \nIn this example, the shipment is compatible as the reference numbers on the shipment contain reference numbers (Q1 V1), (Q2 V2) that are defined in the appointment rule set with the compatible check box as selected.  \nTo define shipment reference numbers constraints, enter or select the following fields, which are optional:\nReference Number Qualifier ID.\nReference Number."
        }
      },
      "fk_tables": []
    }
  }
};
