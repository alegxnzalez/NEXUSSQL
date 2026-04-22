// ACCOUNT_NUMBER.js

window.ACCOUNT_NUMBER = {
  "tables": {
    "ACCOUNT_NUMBER": {
      "columns": {
        "ACCOUNT_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "ACCOUNT_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "USER_COUNT": {
          "type": "NUMBER()",
          "nullable": false
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
