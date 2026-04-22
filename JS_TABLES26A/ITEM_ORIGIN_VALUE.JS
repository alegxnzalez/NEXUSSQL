// ITEM_ORIGIN_VALUE.js

window.ITEM_ORIGIN_VALUE = {
  "tables": {
    "ITEM_ORIGIN_VALUE": {
      "description": "Contains item origin value data.",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "ITEM_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_ORIGIN",
          "info": "The GID for the item origin."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the value qualifier on the item origin."
},
        "CURRENCY_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value of the item origin."
},
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value in base units."
},
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency on the item origin."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used."
}
      },
      "fk_tables": []
    }
  }
};