// INVOICE_LINEITEM_REFNUM.js

window.INVOICE_LINEITEM_REFNUM = {
  "tables": {
    "INVOICE_LINEITEM_REFNUM": {
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
          "info": "A sequence number for the line item on the invoice. "
        },
        "INVOICE_LI_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_LINEITEM_REFNUM_QUAL",
          "info": "The invoice line item reference number qualifier GID. "
        },
        "REFERENCE_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "info": "Line item reference number. "
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
