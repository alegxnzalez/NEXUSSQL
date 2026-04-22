// ACTION_ARG.js

window.ACTION_ARG = {
  "tables": {
    "ACTION_ARG": {
      "columns": {
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTION"
        },
        "ARG_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "ARG_VALUE": {
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
