// DIAG_PROCESS.js

window.DIAG_PROCESS = {
  "tables": {
    "DIAG_PROCESS": {
      "columns": {
        "DIAG_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Diagnostic process GID "
        },
        "DIAG_PROCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Diagnostic process xID"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": false
        },
        "IS_ACTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        "DIAG_LOG_FILE",
        "DIAG_PROCESS_CONFIG_DETAIL"
      ]
    }
  }
};
