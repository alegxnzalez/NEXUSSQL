// GTM_TARIFF_CODE.js

window.GTM_TARIFF_CODE = {
  "tables": {
    "GTM_TARIFF_CODE": {
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
        "GTM_TARIFF_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the unique identifier for the Tariff Code. "
        },
        "GTM_TARIFF_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the unique external identifier for the tariff code. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Contains the product classification type "
        },
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATA_VERSION",
          "info": "Contains the data version of the tariff code. "
        },
        "TARIFF_CODE_SHORT_NAME": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Contains the text for the short name of the tariff  code. "
        },
        "TARIFF_CODE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Contains the text for the name of the tariff  code. "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Contains the reference code for the tariff code in external system. "
        },
        "GTM_TARIFF_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TARIFF_TYPE",
          "info": "Contains the tariff type the code is related to. "
        },
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the tariff code is the default code. "
        },
        "IS_INCLUDE_COUNTRY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the countries mentioned in the table TARIFF_COUNTRY are included in the rate calculation. "
        },
        "GTM_TRADE_AGREEMENT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Contains the trade agreement "
        },
        "GTM_TRADE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRADE_PREFERENCE",
          "info": "Gtm trade preference id."
        }
      },
      "fk_tables": [
        "GTM_TARIFF_COUNTRY",
        "GTM_TARIFF_RATE"
      ]
    }
  }
};
