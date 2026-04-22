// GTM_STR_COMPONENT_CURRENCY.js

window.GTM_STR_COMPONENT_CURRENCY = {
  "tables": {
    "GTM_STR_COMPONENT_CURRENCY": {
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
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT",
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure. "
        },
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT",
          "info": "Trade Item Structure Component Sequence Number "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "A pointer to the currency type. For example: declared value, invoice value etc "
        },
        "VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Value for the specified currency type. "
        },
        "VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any exchange rate currency conversions; if null, the latest conversion should be used."
        }
      },
      "fk_tables": []
    }
  }
};
