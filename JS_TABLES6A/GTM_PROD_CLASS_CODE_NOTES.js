// GTM_PROD_CLASS_CODE_NOTES.js

window.GTM_PROD_CLASS_CODE_NOTES = {
  "tables": {
    "GTM_PROD_CLASS_CODE_NOTES": {
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
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
        },
        "NOTE_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "NOTE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "NOTE_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        },
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_LANGUAGE",
          "info": "This column is used to specify language of the notes."
        }
      },
      "fk_tables": []
    }
  }
};
