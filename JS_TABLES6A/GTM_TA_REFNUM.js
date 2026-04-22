// GTM_TA_REFNUM.js

window.GTM_TA_REFNUM = {
  "tables": {
    "GTM_TA_REFNUM": {
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
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_AGREEMENT",
          "info": "Specifies the unique identifier across all domains for GTM Trade Agreement. "
        },
        "GTM_TA_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TA_REFNUM_QUAL",
          "info": "Qualifier ID for Trade Agreement Reference. "
        },
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Value for Trade Agreement Reference number."
        }
      },
      "fk_tables": []
    }
  }
};
