// P_LANE_ACCESSORIAL_DURATION.js

window.P_LANE_ACCESSORIAL_DURATION = {
  "tables": {
    "P_LANE_ACCESSORIAL_DURATION": {
      "columns": {
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE"
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE"
        },
        "DURATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
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
