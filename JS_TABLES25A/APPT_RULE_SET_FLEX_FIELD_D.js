// APPT_RULE_SET_FLEX_FIELD_D.js

window.APPT_RULE_SET_FLEX_FIELD_D = {
  "tables": {
    "APPT_RULE_SET_FLEX_FIELD_D": {
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
          "info": "The appointment rule set GID. "
        },
        "FLEX_FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Flex field name "
        },
        "FLEX_FIELD_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Flex field value. "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the flex field details on the shipment contain all the flex field details defined on the appointment rule set, when the Compatible check box is selected for each appointment rule set, then the shipment is compatible.\nIf you do not specify any shipment flex fields on your appointment rule set, the shipment is considered as compatible."
        }
      },
      "fk_tables": []
    }
  }
};
