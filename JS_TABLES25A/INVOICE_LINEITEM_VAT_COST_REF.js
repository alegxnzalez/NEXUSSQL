// INVOICE_LINEITEM_VAT_COST_REF.js

window.INVOICE_LINEITEM_VAT_COST_REF = {
  "tables": {
    "INVOICE_LINEITEM_VAT_COST_REF": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM_VAT",
          "info": "The GID for the invoice. "
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM_VAT",
          "info": "The Line Item Sequence number specifies the order of items on the invoice or bill. "
        },
        "VAT_SEQNO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM_VAT",
          "info": "The VAT Sequence number is used when more than one VAT is applicable to the line item. This field tells the system what order to charge the taxes in. "
        },
        "COST_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the cost reference. "
        },
        "SHIPMENT_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_COST_QUAL",
          "info": "The GID for the shipment cost reference. "
        },
        "VAT_BASIS_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allocated basis on which VAT is calculated for this cost reference item. "
        },
        "VAT_BASIS_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT basis amount currency. "
        },
        "VAT_BASIS_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The VAT calculated basis amount in the base currency. "
        },
        "VAT_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Monetary value of VAT for this cost reference item. "
        },
        "VAT_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The VAT calculated amount in the base currency. "
        },
        "VAT_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the VAT  amount currency. "
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
