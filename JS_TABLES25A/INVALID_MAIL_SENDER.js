// INVALID_MAIL_SENDER.js

window.INVALID_MAIL_SENDER = {
  "tables": {
    "INVALID_MAIL_SENDER": {
      "columns": {
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(320)",
          "nullable": false,
          "key_value": true,
          "info": "Email address that failed delivery. "
        },
        "NUM_FAILURES": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of times this address has failed delivery. "
        },
        "LAST_FAILURE": {
          "type": "DATE",
          "nullable": true,
          "info": "The time of the last delivery failure. "
        },
        "LAST_USE_CASE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The use case of the last delivery failure."
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
