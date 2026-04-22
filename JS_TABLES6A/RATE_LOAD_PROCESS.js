// RATE_LOAD_PROCESS.js

window.RATE_LOAD_PROCESS = {
  "tables": {
    "RATE_LOAD_PROCESS": {
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
        "RATE_LOAD_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_PROCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Process ID used for this rate load."
        }
      },
      "fk_tables": [
        "CRT_LOAD_PROCESS",
        "RATE_LOAD_DATA",
        "RATE_LOAD_PROCESS_STATUS"
      ]
    }
  }
};
