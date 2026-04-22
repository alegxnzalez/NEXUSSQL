// BUSINESS_PROCESS.js

window.BUSINESS_PROCESS = {
  "tables": {
    "BUSINESS_PROCESS": {
      "columns": {
        "BUSINESS_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BUSINESS_PROCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PARENT_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PROCESS_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "EXECUTION_PARAMETERS": {
          "type": "VARCHAR2(2000)",
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
        "BUSINESS_PROCESS_LOG"
      ]
    }
  }
};
