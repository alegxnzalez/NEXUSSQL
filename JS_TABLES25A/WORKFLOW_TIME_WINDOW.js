// WORKFLOW_TIME_WINDOW.js

window.WORKFLOW_TIME_WINDOW = {
  "tables": {
    "WORKFLOW_TIME_WINDOW": {
      "columns": {
        "WORKFLOW_TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "WORKFLOW_TIME_WINDOW_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "START_TIME_IN_PARENT": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "DURATION": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "GRANULARITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "WORKFLOW_GRANULARITY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "NUMBER_OF_CYCLES": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "PARENT_TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WORKFLOW_TIME_WINDOW",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "STATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WORKFLOW_STATE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "SUPPORT_SCHEDULING": {
          "type": "VARCHAR2(1)",
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
      "fk_tables": [
        "PROCESS_CONTROL_REQUEST",
        "WORKFLOW_TIME_WINDOW"
      ]
    }
  }
};
