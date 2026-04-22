// CYCLE_DEFINITION.js

window.CYCLE_DEFINITION = {
  "tables": {
    "CYCLE_DEFINITION": {
      "columns": {
        "CYCLE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CYCLE_DEFINITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DAYS_PER_CYCLE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Number of days in the periodic cycle. "
        },
        "SHIFTS_PER_DAY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Number of shifts per day."
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
        "CR_PROJECT"
      ]
    }
  }
};
