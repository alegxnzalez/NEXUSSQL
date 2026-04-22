// INVOICE_EQUIPMENT_SEAL.js

window.INVOICE_EQUIPMENT_SEAL = {
  "tables": {
    "INVOICE_EQUIPMENT_SEAL": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_EQUIPMENT_DETAIL",
          "info": "The GID for the invoice. "
        },
        "SEQ_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_EQUIPMENT_DETAIL",
          "info": "Internal database sequence number related to each equipment seal. "
        },
        "SEAL_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Seal sequence number. "
        },
        "SEAL_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The identification number for equipment that has been sealed. "
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
