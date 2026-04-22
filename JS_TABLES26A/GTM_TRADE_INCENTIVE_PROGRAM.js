// GTM_TRADE_INCENTIVE_PROGRAM.js

window.GTM_TRADE_INCENTIVE_PROGRAM = {
  "tables": {
    "GTM_TRADE_INCENTIVE_PROGRAM": {
      "description": "Trade Incentive Programs",
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
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program GID"
},
        "GTM_TRADE_INCENTIVE_PGM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program XID"
},
        "GTM_TIP_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Trade Incentive Program Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
},
        "GTM_TIP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TIP_TYPE",
          "info": "Trade Incentive Program Type GID"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective Date"
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration Date"
},
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME",
          "info": "Regime GID"
},
        "GTM_JURISDICTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_JURISDICTION",
          "info": "Jurisdiction GID"
},
        "GTM_REGULATION_REF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE",
          "info": "Regulation Reference GID"
},
        "ACCOUNTING_METHOD": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "FI",
                    "LI"
          ],
          "info": "Accounting Method - FIFO/LIFO"
},
        "MAINTAIN_SM_LEDGER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Maintain Stock and Movement Ledger"
},
        "AUTHORIZATION_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Authorization Required"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the Trade Incentive Program is active or not. Default is inactive."
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type"
},
        "TRANSACTION_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "GTM Data Configuration ID for Transaction to Inventory"
},
        "DECLARATION_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "GTM Data Configuration ID for Declaration to Inventory"
},
        "GTM_TIP_VALUE_CALCULATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_VALUE_CALCULATION",
          "info": "Trade Incentive Program Value Calculation GID"
},
        "ENTRY_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "Used to model conditions where the Trade Incentive Program applies only to specific items, or other similar conditions, during entry recording/capturing."
},
        "EXIT_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "Used to model conditions where the Trade Incentive Program applies only to specific items, or other similar conditions, during exit recording/capturing."
},
        "PRIORITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Priority"
},
        "GTM_TIP_OPERATION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_OPERATION_SET",
          "info": "Trade Incentive Program Operation Set GID"
},
        "IS_PARTIAL_RECONCILE_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to check if partial reconciliation is allowed or not."
},
        "APPLY_FIRST_FILING_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Apply First Filing rule for Exit Recording"
},
        "EXIT_TRANS_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "GTM Data Configuration ID for Inventory to Exit Transaction"
},
        "EXIT_DECL_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "GTM Data Configuration ID for Inventory to Exit Declaration"
}
      },
      "fk_tables": [
        "GTM_TIP_ALLOWED_PROCEDURES",
        "GTM_TIP_APPL_PROFILE",
        "GTM_TIP_AUTHORIZATION",
        "GTM_TIP_ENTRY_EXIT_CONFIG",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_INVOLVED_PARTIES",
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TIP_RATE",
        "GTM_TIP_REFNUM",
        "GTM_TIP_REGISTRATIONS",
        "GTM_TIP_REMARK",
        "GTM_TIP_RULE",
        "GTM_TIP_TEXT",
        "ITEM_APPLICABLE_TIP"
]
    }
  }
};