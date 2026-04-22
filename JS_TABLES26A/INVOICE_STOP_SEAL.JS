// INVOICE_STOP_SEAL.js

window.INVOICE_STOP_SEAL = {
  "tables": {
    "INVOICE_STOP_SEAL": {
      "description": "INVOICE_STOP_SEAL contains the serial number of the security device that relates to the stop.",
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
          "info": "The stop number for which the seal was applied."
},
        "SEAL_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A one-up number to allow several seals being placed on a piece of equipment at the same stop."
},
        "SEAL_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The number of the seal that was placed on the piece of equipment."
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