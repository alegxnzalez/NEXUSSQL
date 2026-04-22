// INVOICE_SUMMARY_DETAIL.js

window.INVOICE_SUMMARY_DETAIL = {
  "tables": {
    "INVOICE_SUMMARY_DETAIL": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice. "
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the line item on the invoice. "
        },
        "BILLED_AS_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Billed as qualifier. "
        },
        "BILLED_AS_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Billed as quantity. "
        },
        "BILLED_AS_QUANTITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The billed as quantity GID. "
        },
        "BILLED_AS_QUANTITY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Billed as quantity in base units. "
        },
        "FREIGHT_RATE_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "info": "The freight rate qualifier. "
        },
        "FREIGHT_RATE_QUANTITY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Freight rate quantity. "
        },
        "FREIGHT_RATE_QUANTITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The freight rate quantity GID. "
        },
        "FREIGHT_RATE_QUANTITY_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Freight rate quantity in base units. "
        },
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Unit count. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "N/A "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight of all items shipped on the invoice. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume of the items shipped on the invoice. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the WEIGHT. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the VOLUME. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight of all items shipped on the invoice in the base unit of measure. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume of the items shipped on the invoice in the base unit of measure. "
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Weight qualifier. "
        },
        "FREIGHT_CHARGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total freight charge for shipping all items on the invoice. "
        },
        "FREIGHT_CHARGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The freight charge GID. "
        },
        "FREIGHT_CHARGE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Freight charge in base currency. "
        },
        "PREPAID_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dollar amount already paid on the invoice. "
        },
        "PREPAID_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The prepaid amount GID. "
        },
        "PREPAID_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Prepaid amount in base currency. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The GID for the payment method code. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for the accessorial code on the invoice. "
        },
        "ACCESSORIAL_DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The text describing the accessorial on the invoice. "
        },
        "DECLARED_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DECLARED_VALUE_QUAL",
          "info": "The declared value qualifier GID. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The declared value of all items on the invoice. "
        },
        "DECLARED_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The declared value GID. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The declared value of all items on the invoice in the base unit of measure. "
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
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used "
        },
        "BILLED_AS_QTY_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the billed as quantity. "
        },
        "BILLED_AS_QTY_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the billed as quantity functional currency. "
        },
        "DECLARED_VALUE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the declared value. "
        },
        "DECLARED_VALUE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the declared value functional currency. "
        },
        "FREIGHT_RATE_Q_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the freight rate quantity. "
        },
        "FREIGHT_RATE_Q_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the freight rate quantity functional currency. "
        },
        "FREIGHT_CHARGE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the freight charge. "
        },
        "FREIGHT_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the freight charge functional currency. "
        },
        "PREPAID_AMOUNT_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the prepaid amount. "
        },
        "PREPAID_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the prepaid amount functional currency. "
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
