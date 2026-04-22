// INVOICE_REFNUM.js

window.INVOICE_REFNUM = {
  "tables": {
    "INVOICE_REFNUM": {
      "description": "Can be used to store qualified reference information about an invoice.  The qualifier/description of the information is stored in the table INVOICE_REFNUM_QUAL. Example of a reference qualifier would be BILL OF LADING.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_REFNUM_QUAL",
          "info": "The GID for the reference number (PONUMBER, VATNUMBER, CUSTPONUMBER)."
},
        "INVOICE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Value of entered for the Reference Number Qualifier."
},
        "ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the invoice was issued."
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