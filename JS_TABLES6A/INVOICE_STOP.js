// INVOICE_STOP.js

window.INVOICE_STOP = {
  "tables": {
    "INVOICE_STOP": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice. "
        },
        "STOP_SEQ_NO": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Stop sequence number. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location on the invoice. "
        },
        "LOCATION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_REFNUM_QUAL",
          "info": "The location reference number qualifier GID. "
        },
        "LOCATION_REFNUM": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "A reference number for the location on the invoice. "
        },
        "INVOICE_STOP_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_STOP_REASON",
          "info": "The invoice stop reason GID. "
        },
        "EQUIPMENT_PREFIX": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Equipment prefix. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The equipment number on the invoice. "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Start date. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "End date. "
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
      "fk_tables": [
        "INVOICE_STOP_REFNUM",
        "INVOICE_STOP_SEAL"
      ]
    }
  }
};
