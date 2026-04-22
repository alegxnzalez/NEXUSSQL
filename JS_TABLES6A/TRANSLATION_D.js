// TRANSLATION_D.js

window.TRANSLATION_D = {
  "tables": {
    "TRANSLATION_D": {
      "columns": {
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSLATION"
        },
        "LANG": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "COUNTRY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "VARIANT": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "TEXT": {
          "type": "VARCHAR2(4000)",
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
