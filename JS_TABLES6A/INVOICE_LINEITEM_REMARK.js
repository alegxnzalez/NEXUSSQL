// INVOICE_LINEITEM_REMARK.js

window.INVOICE_LINEITEM_REMARK = {
  "tables": {
    "INVOICE_LINEITEM_REMARK": {
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
          "info": "The sequence number for the line item on the invoice. "
        },
        "REMARK_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the line item remark on the invoice. "
        },
        "REMARK_QUAL_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Remark qualifier. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Remarks about the line item on the invoice. "
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
