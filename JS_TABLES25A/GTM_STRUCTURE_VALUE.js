// GTM_STRUCTURE_VALUE.js

window.GTM_STRUCTURE_VALUE = {
  "tables": {
    "GTM_STRUCTURE_VALUE": {
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
          "foreign_key": "GTM_STRUCTURE",
          "info": "The GID for the item structure. "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the value qualifier on the item structure. "
        },
        "CURRENCY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value of the item structure. "
        },
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value in base units. "
        },
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency on the item structure. "
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
