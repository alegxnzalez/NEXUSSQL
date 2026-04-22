// OPT_FEATURE_URL.js

window.OPT_FEATURE_URL = {
  "tables": {
    "OPT_FEATURE_URL": {
      "columns": {
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Optional Feature ID "
        },
        "URL_SEQUENCE_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence per feature for the "
        },
        "URL": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "URL prefix to restrict"
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
