// GTM_TIP_RATE.js

window.GTM_TIP_RATE = {
  "tables": {
    "GTM_TIP_RATE": {
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
        "GTM_TIP_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Rate GID "
        },
        "GTM_TIP_RATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Rate XID "
        },
        "GTM_TIP_RATE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TIP_RATE_TYPE",
          "info": "Rate Type GID "
        },
        "RATE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Rate Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of Rate "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Checkbox indicating if the Rate is active or not "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective Date of the Rate "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration Date of the Rate "
        },
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "GID of GTM Trade Incentive Program "
        },
        "GTM_TIP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_RULE",
          "info": "GID of GTM Trade Incentive Program Rule "
        },
        "START_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Start Classification Code "
        },
        "END_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "End Classification Code "
        },
        "PRIORITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Priority"
        }
      },
      "fk_tables": [
        "GTM_TIP_RATE_D"
      ]
    }
  }
};
