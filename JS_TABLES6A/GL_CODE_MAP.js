// GL_CODE_MAP.js

window.GL_CODE_MAP = {
  "tables": {
    "GL_CODE_MAP": {
      "columns": {
        "KEY_VALUE": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GENERAL_LEDGER_CODE"
        },
        "GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_LOOKUP_KEY"
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
