// WORKFLOW_ACTION_PARAM.js

window.WORKFLOW_ACTION_PARAM = {
  "tables": {
    "WORKFLOW_ACTION_PARAM": {
      "columns": {
        "ACTION_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WORKFLOW_ACTION_INFO",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "PARAMETER": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false
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
