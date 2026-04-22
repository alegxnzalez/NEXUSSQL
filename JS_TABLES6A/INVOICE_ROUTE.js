// INVOICE_ROUTE.js

window.INVOICE_ROUTE = {
  "tables": {
    "INVOICE_ROUTE": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice. "
        },
        "ROUTE_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the route on an invoice. "
        },
        "TRANSPORT_MODE_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The transport mode identifier. "
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "The service provider alias qualifier GID. "
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Service provider associated with the route. "
        },
        "INTERMODAL_SERVICE_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Intermodal service code. "
        },
        "JCT_CITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Junction city code. "
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
