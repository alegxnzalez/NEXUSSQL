// GTM_AUTHORIZATION_TYPE.js

window.GTM_AUTHORIZATION_TYPE = {
  "tables": {
    "GTM_AUTHORIZATION_TYPE": {
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
        "GTM_AUTHORIZATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the authorization type. "
        },
        "GTM_AUTHORIZATION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the authorization type. "
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_REGIME",
          "info": "The regime of the authorization type. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The description of the authorization type. "
        },
        "SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The short name of the authorization type "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "External reference code of authorization type."
        }
      },
      "fk_tables": [
        "GTM_TR_CONTROL_SCREEN"
      ]
    }
  }
};
