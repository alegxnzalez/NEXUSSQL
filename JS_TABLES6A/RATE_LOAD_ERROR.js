// RATE_LOAD_ERROR.js

window.RATE_LOAD_ERROR = {
  "tables": {
    "RATE_LOAD_ERROR": {
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
        "RATE_LOAD_ERROR_EXCEL": {
          "type": "BLOB",
          "nullable": true,
          "info": "Contains failed rates sheet in BLOB form. "
        },
        "RATE_LOAD_HISTORY_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "RATE_LOAD_HISTORY",
          "info": "Reference to rate load history sequence."
        },
        "RATE_LOAD_ERROR_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};
