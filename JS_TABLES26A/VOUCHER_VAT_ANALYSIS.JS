// VOUCHER_VAT_ANALYSIS.js

window.VOUCHER_VAT_ANALYSIS = {
  "tables": {
    "VOUCHER_VAT_ANALYSIS": {
      "columns": {
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOUCHER",
          "info": "The GID for the Voucher."
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CODE",
          "info": "The GID for the Value Added Tax Code."
},
        "TAX_AMOUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The tax amount."
},
        "TAX_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the tax amount."
},
        "TAX_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The base amount for the tax amount."
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
        "VAT_RATE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Tax Rate that was a applied."
},
        "TAX_AMOUNT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the tax amount."
},
        "TAX_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the tax amount."
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