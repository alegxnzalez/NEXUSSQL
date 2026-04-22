// INVOICE_LI_COMMERCIAL_DATA.js

window.INVOICE_LI_COMMERCIAL_DATA = {
  "tables": {
    "INVOICE_LI_COMMERCIAL_DATA": {
      "description": "Commercial value of this invoice line item.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM",
          "info": "The GID for the invoice."
},
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM",
          "info": "Sequence number that relates back to the number on INVOICE_LINEITEM."
},
        "COMMERCIAL_DATA_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for the commercial data line."
},
        "UNIT_PRICE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The price for the units being shipped."
},
        "UNIT_PRICE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit price currency GID."
},
        "UNIT_PRICE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Unit price in base units."
},
        "UNIT_PRICE_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Qualifier for the unit price."
},
        "LI_TOTAL_COMMERCIAL_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Line item total commercial value."
},
        "LI_TOTAL_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The line item total currency GID."
},
        "LI_TOTAL_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Line total in base units."
},
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Unit count."
},
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the packaging unit."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used"
},
        "UNIT_PRICE_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the unit price."
},
        "UNIT_PRICE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the currency for the line item unit price functional currency amount."
},
        "LI_TOTAL_COMM_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the line item total commercial value."
},
        "LI_TOTAL_COMM_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the currency for the line item total commercial value functional currency amount."
},
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
}
      },
      "fk_tables": []
    }
  }
};