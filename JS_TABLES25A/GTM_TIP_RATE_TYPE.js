// GTM_TIP_RATE_TYPE.js

window.GTM_TIP_RATE_TYPE = {
  "tables": {
    "GTM_TIP_RATE_TYPE": {
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
        "GTM_TIP_RATE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Rate Type GID "
        },
        "GTM_TIP_RATE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Rate Type XID "
        },
        "RATE_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Rate Type Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
        }
      },
      "fk_tables": [
        "GTM_TIP_RATE",
        "GTM_TIP_VALUE_CALC_DETAIL"
      ]
    }
  }
};
