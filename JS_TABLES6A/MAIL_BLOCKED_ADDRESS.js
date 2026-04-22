// MAIL_BLOCKED_ADDRESS.js

window.MAIL_BLOCKED_ADDRESS = {
  "tables": {
    "MAIL_BLOCKED_ADDRESS": {
      "columns": {
        "MAIL_BLOCKED_ADDRESS_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence for PK "
        },
        "FIRST_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "First name "
        },
        "LAST_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Last name "
        },
        "COMPANY": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Company name "
        },
        "EMAIL": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Full e-mail address"
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
        "MAIL_BLOCKED_MSG",
        "MAIL_BLOCKED_MSG_TO"
      ]
    }
  }
};
