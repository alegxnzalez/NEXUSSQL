// VOUCHER_INV_LINE_VAT.js

window.VOUCHER_INV_LINE_VAT = {
  "tables": {
    "VOUCHER_INV_LINE_VAT": {
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
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOUCHER_INVOICE_LINEITEM_JOIN",
          "info": "The GID for the voucher "
        },
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOUCHER_INVOICE_LINEITEM_JOIN",
          "info": "The GID for the invoice "
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOUCHER_INVOICE_LINEITEM_JOIN",
          "info": "The Line Item Sequence number specifies the order of items on the invoice. "
        },
        "VAT_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The VAT Sequence number is used when more than one VAT is applicable to the line item. This field tells the system what order to charge the taxes in. "
        },
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "The GID for the VAT tax that is being applied to the line item. "
        },
        "VAT_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This is the actual VAT amount. "
        },
        "VAT_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT amount currency. "
        },
        "VAT_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The VAT amount in the base currency. "
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
        "VAT_AMOUNT_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the VAT amount. "
        },
        "VAT_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the functional currency for the VAT amount."
        }
      },
      "fk_tables": []
    }
  }
};
