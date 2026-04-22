// INVOICE_SUMMARY_REMARK.js

window.INVOICE_SUMMARY_REMARK = {
  "tables": {
    "INVOICE_SUMMARY_REMARK": {
      "description": "Remarks to summarize an invoice.  One record per remark per invoice.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_SUMMARY",
          "info": "The GID for the invoice."
},
        "REMARK_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A sequence number for a remark on an invoice."
},
        "REMARK_QUAL_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The qualifier for the remark."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The text of the remarks on the invoice."
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
},
        "INVOICE_SUMMARY_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_SUMMARY",
          "info": "Invoice summary sequence number."
}
      },
      "fk_tables": []
    }
  }
};