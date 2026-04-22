// CAPACITY_USAGE_BOV.js

window.CAPACITY_USAGE_BOV = {
  "tables": {
    "CAPACITY_USAGE_BOV": {
      "columns": {
        "SERVICE_PROVIDER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "RATE_OFFERING": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ORIGIN": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "DESTINATION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "EQUIPMENT_TYPE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TIME_PERIOD_TYPE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "CAPACITY_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "ACTUAL_CAPACITY_USAGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_CAPACITY_USAGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNUSED_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
