// INVOICE_STOP_REFNUM.js

window.INVOICE_STOP_REFNUM = {
  "tables": {
    "INVOICE_STOP_REFNUM": {
      "description": "Qualified reference information that relates to the stop itself. Example:PO or SO number.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_STOP",
          "info": "The GID for the invoice."
},
        "STOP_SEQ_NO": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_STOP",
          "info": "Stop sequence number."
},
        "INVOICE_STOP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_STOP_REFNUM_QUAL",
          "info": "The invoice stop reference number qualifier GID."
},
        "REFERENCE_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "info": "Reference number."
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