// COMMERCIAL_INVOICE.js

window.COMMERCIAL_INVOICE = {
  "tables": {
    "COMMERCIAL_INVOICE": {
      "columns": {
        "COMMERCIAL_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "COMMERCIAL_INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COMMERCIAL_INVOICE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
            "JOB",
            "ORDER"
          ]
        },
        "INVOICE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXCHANGE_RATE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EXCHANGE_TO_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "PRODUCT_AMOUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "PRODUCT_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "PRODUCT_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "OTHER_CHARGE_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OTHER_CHARGE_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "OTHER_CHARGE_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_CALCULATE_PRODUCT_AMOUNT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_CALCULATE_TOTAL_INVOICE_AMT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "TOTAL_INVOICE_AMOUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_INVOICE_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "TOTAL_INVOICE_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM"
        },
        "TERM_LOCATION_TEXT": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "FINAL_INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM"
        },
        "FINAL_TEXT_LOCATION": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "COMMERCIAL_PAYMENT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE"
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
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used; this only applies if IS_OVERRIDE_EXCHANGE_RATE is 'N' (false) "
        },
        "EXCHANGE_FROM_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "When a conversion rate specific to this commercial invoice is specified (EXCHANGE_RATE field), this field should be populated with the FROM currency gid for that exchange rate "
        },
        "IS_OVERRIDE_EXCHANGE_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, indicates a specific conversion rate for this commercial invoice is entered in the EXCHANGE_RATE field and should be used "
        },
        "COMMERCIAL_INVOICE_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This column will be set by BN Generator. "
        },
        "PRODUCT_AMOUNT_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for product_amount "
        },
        "PRODUCT_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "OTHER_CHARGE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for other_charge_amount "
        },
        "OTHER_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_INVOICE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for total_invoice_amount"
        },
        "TOTAL_INVOICE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
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
        }
      },
      "fk_tables": [
        "COMMERCIAL_INVOICE_CHARGE",
        "ORDER_RELEASE_LINE"
      ]
    }
  }
};
