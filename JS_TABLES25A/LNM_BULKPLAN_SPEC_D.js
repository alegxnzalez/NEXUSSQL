// LNM_BULKPLAN_SPEC_D.js

window.LNM_BULKPLAN_SPEC_D = {
  "tables": {
    "LNM_BULKPLAN_SPEC_D": {
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
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_BULKPLAN_SPEC"
        },
        "BULKPLAN_SPEC_D_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BULKPLAN_SPEC_D_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "START_TIME_OFFSET": {
          "type": "NUMBER()",
          "nullable": true
        },
        "START_TIME_OFFSET_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "START_TIME_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PERIOD": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PERIOD_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PERIOD_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NUM_PERIODS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ORDER_TIME_SPAN": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ORDER_TIME_SPAN_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ORDER_TIME_SPAN_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
