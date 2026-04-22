// GTM_TIP_VALUE_CALCULATION.js

window.GTM_TIP_VALUE_CALCULATION = {
  "tables": {
    "GTM_TIP_VALUE_CALCULATION": {
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
        "GTM_TIP_VALUE_CALCULATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Value Calculation GID "
        },
        "GTM_TIP_VALUE_CALCULATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Value Calculation XID "
        },
        "GTM_TIP_VALUE_CALCULATION_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name"
        }
      },
      "fk_tables": [
        "GTM_TIP_VALUE_CALC_DETAIL",
        "GTM_TRADE_INCENTIVE_PROGRAM"
      ]
    }
  }
};
