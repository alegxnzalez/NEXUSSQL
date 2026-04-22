// LNM_WORK_ASSIGNMENT_D.js

window.LNM_WORK_ASSIGNMENT_D = {
  "tables": {
    "LNM_WORK_ASSIGNMENT_D": {
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
        "WORK_ASSIGNMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SLACK_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SLACK_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SLACK_DURATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "REST_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REST_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REST_DURATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TRANSIT_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSIT_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSIT_DURATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TRANSIT_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSIT_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSIT_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
