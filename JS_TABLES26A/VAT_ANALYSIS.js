// VAT_ANALYSIS.js

window.VAT_ANALYSIS = {
  "tables": {
    "VAT_ANALYSIS": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CODE",
          "info": "The GID for the vat code."
},
        "TAX_AMOUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Amount of tax."
},
        "TAX_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the tax amount currency."
},
        "TAX_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Amount of tax in base currency."
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
        "VAT_BASIS_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The portion of the invoice amount that will be taxed at the rate for the given VAT code"
},
        "VAT_BASIS_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the VAT_BASIS_AMOUNT."
},
        "VAT_BASIS_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The base amount for the VAT_BASIS_AMOUNT."
},
        "VAT_RATE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The tax rate that the basis amount will be taxed."
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
          "info": "The GID for the tax amount function currency."
},
        "VAT_BASIS_AMT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the VAT basis amount."
},
        "VAT_BASIS_AMT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT basis function currency."
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