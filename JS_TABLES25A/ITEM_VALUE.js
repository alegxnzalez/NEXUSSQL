// ITEM_VALUE.js

window.ITEM_VALUE = {
  "tables": {
    "ITEM_VALUE": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the user who inserted the data. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insertion. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the user who updated the data. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of data update. "
        },
        "SEQ_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_VALUE_SET",
          "info": "Sequence number reference of the sequence number corresponding to the item value set. "
        },
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_VALUE_SET",
          "info": "The GID of the item corresponding to the item value. "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID of the value qualifier corresponding to the item value. "
        },
        "VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value corresponding to the item value. "
        },
        "VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value in base units. "
        },
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID of the value currency corresponding to the item value. "
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
