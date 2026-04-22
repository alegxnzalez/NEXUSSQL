// INVOICE_LINEITEM_VAT.js

window.INVOICE_LINEITEM_VAT = {
  "tables": {
    "INVOICE_LINEITEM_VAT": {
      "description": "The CUMULATIVE and PROVINCE_CODE fields are included for future Canadian tax, and are *not* implemented as of VAT50",
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
          "info": "The Line Item Sequence number specifies the order of items on the invoice or bill."
},
        "VAT_SEQNO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "The VAT Sequence number is used when more than one VAT is applicable to the line item. This field tells the system what order to charge the taxes in."
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "The GID for the VAT tax that is being applied to the line item."
},
        "VAT_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country for which this VAT item applies"
},
        "VAT_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "Province for which this VAT item applies (used for Canada)."
},
        "VAT_RATE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The VAT charge rate."
},
        "VAT_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is the actual VAT amount."
},
        "VAT_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT amount currency."
},
        "VAT_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The VAT amount in the base currency."
},
        "VAT_CALC_AMT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is the VAT amount calculated from the rate and base value."
},
        "VAT_CALC_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT calculated amount currency."
},
        "VAT_CALC_AMT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The VAT calculated amount in the base currency."
},
        "VAT_OVERRIDE_AMT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is a manually entered amount to set the VAT regardless of rate."
},
        "VAT_OVERRIDE_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT override amount currency."
},
        "VAT_OVERRIDE_AMT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The VAT override amount in the base currency."
},
        "IS_CUMULATIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If 'Y', the amount of this tax is based on the base cost plus the previously-calculated taxes."
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
        "VAT_AMOUNT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the VAT amount."
},
        "VAT_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the  functional currency for the VAT amount."
},
        "VAT_CALC_AMT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the vat_calc_amt."
},
        "VAT_CALC_AMT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the functional currency for the VAT calculated amount."
},
        "VAT_OVERRIDE_A_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the VAT override amount."
},
        "VAT_OVERRIDE_A_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the functional currency for the VAT override currency amount."
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
      "fk_tables": [
        "INVOICE_LINEITEM_VAT_COST_REF"
]
    }
  }
};