// INVOICE_SUMMARY.js

window.INVOICE_SUMMARY = {
  "tables": {
    "INVOICE_SUMMARY": {
      "description": "INVOICE_SUMMARY contains the summary of the INVOICE_LINEITEM and  INVOICE_SUMMARY_DETAIL tables.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "FREIGHT_CHARGE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total freight charge for the invoice."
},
        "FREIGHT_CHARGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The freight charge GID."
},
        "FREIGHT_CHARGE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total freight charge for the invoice in the base currency."
},
        "PREPAID_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The dollar amount already paid on the invoice."
},
        "PREPAID_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The prepaid amount GID."
},
        "PREPAID_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Prepaid amount in base units."
},
        "COMMERCIAL_UNIT_PRICE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Commercial unit price."
},
        "COMMERCIAL_UNIT_PRICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The commercial unit price GID."
},
        "COMMERCIAL_UNIT_PRICE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Commercial unit price in base units."
},
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of units on the invoice."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the transport handling unit."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total weight of all items shipped on this invoice."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total volume of items shipped for this invoice."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Weight unit of measure."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Volume unit of measure."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight in base units."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume in base units."
},
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Weight qualifier."
},
        "INVOICE_TOTAL": {
          "type": "NUMBER(6)",
          "nullable": true,
          "info": "The count of the invoice's line items."
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
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used."
},
        "FREIGHT_CHARGE_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the freight charge."
},
        "FREIGHT_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The freight charge functional currency GID."
},
        "PREPAID_AMOUNT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the prepaid amount."
},
        "PREPAID_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The prepaid amount functional currency GID."
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
},
        "INVOICE_SERVICE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_SERVICE_CODE",
          "info": "The type of service that was performed. Foreign key to INVOICE_SERVICE_CODE. Summary level charges on invoice for service level. This is generally for air and ground."
},
        "INVOICE_SUMMARY_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for the invoice summary."
}
      },
      "fk_tables": [
        "INVOICE_SUMMARY_REMARK"
]
    }
  }
};