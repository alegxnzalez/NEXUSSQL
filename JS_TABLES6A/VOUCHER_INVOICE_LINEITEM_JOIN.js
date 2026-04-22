// VOUCHER_INVOICE_LINEITEM_JOIN.js

window.VOUCHER_INVOICE_LINEITEM_JOIN = {
  "tables": {
    "VOUCHER_INVOICE_LINEITEM_JOIN": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM",
          "info": "The GID for the invoice. "
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM",
          "info": "Line item sequence number for cost line item. "
        },
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOUCHER",
          "info": "The GID for the voucher. "
        },
        "AMOUNT_PAID": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Amount paid. "
        },
        "AMOUNT_PAID_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Amount paid in the base currency. "
        },
        "AMOUNT_PAID_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the amount paid currency. "
        },
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "The GID for the adjustment reason. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used. "
        },
        "AMOUNT_PAID_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the amount paid. "
        },
        "AMOUNT_PAID_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the amount paid. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
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
