// GTM_TIP_AUTHORIZATION.js

window.GTM_TIP_AUTHORIZATION = {
  "tables": {
    "GTM_TIP_AUTHORIZATION": {
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
        "GTM_TIP_AUTHORIZATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Authorization GID"
},
        "GTM_TIP_AUTHORIZATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Authorization XID"
},
        "GTM_TIP_AUTH_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Trade Incentive Program Authorization Name"
},
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program GID"
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
          "info": "Indicates if the Trade Incentive Program Authorization is active or not. Default is inactive"
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
        "ACCOUNTING_METHOD": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "FI",
                    "LI"
          ],
          "info": "Accounting Method - FIFO/LIFO"
},
        "AUTHORIZED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Authorized Date"
},
        "GTM_REGULATION_REF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE",
          "info": "Regulation Reference GID"
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
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type"
}
      },
      "fk_tables": [
        "GTM_TIP_AUTH_ALLOWED_GOOD",
        "GTM_TIP_AUTH_INV_PARTY",
        "GTM_TIP_AUTH_PROCEDURE",
        "GTM_TIP_AUTH_PROC_GOOD",
        "GTM_TIP_AUTH_REFNUM",
        "GTM_TIP_AUTH_REGISTRATION",
        "GTM_TIP_AUTH_REMARK",
        "GTM_TIP_AUTH_TEXT"
]
    }
  }
};