// INVOICE_PORT.js

window.INVOICE_PORT = {
  "tables": {
    "INVOICE_PORT": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice. "
        },
        "PORT_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the port on the invoice. "
        },
        "PORT_FUNCTION_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "The port function code. "
        },
        "LOCATION_IDENTIFIER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The location identifier. "
        },
        "LOCATION_IDENTIFIER_QUALIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The qualifier associated with the location identifier. "
        },
        "PORT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the port on the invoice. "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The province code on the invoice. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country code GID. "
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
