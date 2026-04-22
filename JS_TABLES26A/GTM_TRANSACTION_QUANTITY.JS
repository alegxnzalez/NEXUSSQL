// GTM_TRANSACTION_QUANTITY.js

window.GTM_TRANSACTION_QUANTITY = {
  "tables": {
    "GTM_TRANSACTION_QUANTITY": {
      "columns": {
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
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION",
          "info": "The GID for the GTM trade transaction."
},
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID for the GTM quantity qualifier."
},
        "QUANTITY_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The value of the quantity."
},
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure of the quantity."
}
      },
      "fk_tables": []
    }
  }
};