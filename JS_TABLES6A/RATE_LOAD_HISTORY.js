// RATE_LOAD_HISTORY.js

window.RATE_LOAD_HISTORY = {
  "tables": {
    "RATE_LOAD_HISTORY": {
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
        "RATE_LOAD_HISTORY_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_SUMMARY_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "RATE_LOAD_SUMMARY",
          "info": "Reference to rate load summary . "
        },
        "RATE_LOAD_SPREADSHEET": {
          "type": "BLOB",
          "nullable": true,
          "info": "Uploaded spreadsheet in the BLOB form."
        }
      },
      "fk_tables": [
        "RATE_LOAD_ERROR",
        "RATE_LOAD_HISTORY_STATUS"
      ]
    }
  }
};
