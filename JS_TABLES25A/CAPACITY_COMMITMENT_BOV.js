// CAPACITY_COMMITMENT_BOV.js

window.CAPACITY_COMMITMENT_BOV = {
  "tables": {
    "CAPACITY_COMMITMENT_BOV": {
      "columns": {
        "SERVICE_PROVIDER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EQUIPMENT_TYPE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "TARGET_COMMITMENT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_COMMITMENT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "QUALIFIER": {
          "type": "VARCHAR2(19)",
          "nullable": true
        },
        "UNITS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
