// GTM_TIP_RULE.js

window.GTM_TIP_RULE = {
  "tables": {
    "GTM_TIP_RULE": {
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
        "GTM_TIP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Rule GID"
},
        "GTM_TIP_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Rule XID"
},
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program"
},
        "GTM_TIP_RULE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Trade Incentive Program Rule Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the Trade Incentive Program Rule is active or not."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective Date"
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiraton Date"
},
        "PERIOD_OF_DISCHARGE_YEARS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Period of Discharge in Years"
},
        "PERIOD_OF_DISCHARGE_MONTHS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Period of Discharge in Months"
},
        "ACCOUNTING_METHOD": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
                    "FI",
                    "LI"
          ],
          "info": "Accounting Method - FIFO/LIFO"
},
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Matching Constraint Set"
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type"
},
        "GTM_TIP_SUB_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_SUB_TYPE",
          "info": "Trade Incentive Program Sub Type GID"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Saved Query GID"
},
        "PRIORITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Signifies the relative priority of the Rule within the Trade Incentive Program"
},
        "PERIOD_OF_DISCHARGE_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Period of Discharge in Days"
},
        "EXIT_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "Saved Condition GID - condition to be applied on the Exit Line to check if the Rule is applicable."
}
      },
      "fk_tables": [
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TIP_RATE",
        "GTM_TIP_RULE_PSR",
        "GTM_TIP_RULE_REFNUM",
        "GTM_TIP_RULE_REMARK",
        "GTM_TIP_RULE_TEXT"
]
    }
  }
};