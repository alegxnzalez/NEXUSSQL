// PREFERENCE_VALUE.js

window.PREFERENCE_VALUE = {
  "tables": {
    "PREFERENCE_VALUE": {
      "columns": {
        "PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PREFERENCE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "PREFERENCE_VALUE_SEQ_NO": {
          "type": "NUMBER(5)",
          "nullable": false,
          "key_value": true
        },
        "PREF_VAL_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "IS_DISPLAY_DEFAULT": {
          "type": "CHAR(1)",
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
