// INVOICE_NOTE.js

window.INVOICE_NOTE = {
  "tables": {
    "INVOICE_NOTE": {
      "description": "Unlimited notes per invoice. Freeform, timestamped notes that can be used to indicate explanations/information throughout the lifetime of the invoice.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "INVOICE_NOTE_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The Invoice Note Sequence number specifies the order of notes on the invoice or bill."
},
        "TIMESTAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "The day, month, and year of the note on the invoice."
},
        "SUMMARY": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Summary."
},
        "NOTE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The note(s) about the invoice."
},
        "IS_SYSTEM_GENERATED": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether this is system generated or not."
},
        "ENTERED_BY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The name and domain of the person who entered notes about the invoice."
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