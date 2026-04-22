// Q_INTEGRATION_OUT_OVERFLOW.js

window.Q_INTEGRATION_OUT_OVERFLOW = {
  "tables": {
    "Q_INTEGRATION_OUT_OVERFLOW": {
      "columns": {
        "OVERFLOW_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "Q_EVENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "CHILD_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "EXTENSION": {
          "type": "VARCHAR2(4000)",
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
      "fk_tables": []
    }
  }
};
