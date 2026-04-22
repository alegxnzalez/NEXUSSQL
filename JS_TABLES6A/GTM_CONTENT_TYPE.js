// GTM_CONTENT_TYPE.js

window.GTM_CONTENT_TYPE = {
  "tables": {
    "GTM_CONTENT_TYPE": {
      "columns": {
        "GTM_CONTENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONTENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CONTENT_CATEGORY": {
          "type": "VARCHAR2(32)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
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
      "fk_tables": [
        "GTM_CONTENT_SET_D",
        "GTM_CONTENT_SOURCE_DATA_TYPE",
        "GTM_DATA_LOAD_TYPE",
        "GTM_DATA_VERSION",
        "GTM_PROD_CLASS_TYPE"
      ]
    }
  }
};
