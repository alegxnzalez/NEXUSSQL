// GTM_VALUATION_METHOD.js

window.GTM_VALUATION_METHOD = {
  "tables": {
    "GTM_VALUATION_METHOD": {
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
        "GTM_VALUATION_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This field represents unique valuation method ID accross all domains. "
        },
        "GTM_VALUATION_METHOD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This field represents unique  valuation method ID in a particular domain. "
        },
        "GTM_VALUATION_METHOD_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name for a valuation method. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This field describes the valuation method. "
        },
        "GTM_VALUATION_METHOD_CODE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This field describes the valuation method code. which will vary between 1 to 6 based on taxation and custom guidelines i.e., \"SAD Guidelines - C43\"."
        }
      },
      "fk_tables": [
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE"
      ]
    }
  }
};
