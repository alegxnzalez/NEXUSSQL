// GTM_TIP_TYPE.js

window.GTM_TIP_TYPE = {
  "tables": {
    "GTM_TIP_TYPE": {
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
        "GTM_TIP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Type GID "
        },
        "GTM_TIP_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Type XID "
        },
        "GTM_TIP_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Trade Incentive Program Type Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "External Reference Code"
        }
      },
      "fk_tables": [
        "GTM_TIP_SUB_TYPE",
        "GTM_TRADE_INCENTIVE_PROGRAM"
      ]
    }
  }
};
