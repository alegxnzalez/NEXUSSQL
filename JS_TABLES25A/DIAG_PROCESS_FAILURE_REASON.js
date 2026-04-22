// DIAG_PROCESS_FAILURE_REASON.js

window.DIAG_PROCESS_FAILURE_REASON = {
  "tables": {
    "DIAG_PROCESS_FAILURE_REASON": {
      "columns": {
        "REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Failure Reason XID "
        },
        "REASON_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Failure Reason GID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "info": "Reason's Description"
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
        "DIAG_PROCESS_POSSIBLE_SOLUTION",
        "INVOICE_LINEITEM",
        "I_LOG",
        "I_MESSAGE",
        "MIGRATION_OBJECT_GROUP_D",
        "SS_EVENT"
      ]
    }
  }
};
