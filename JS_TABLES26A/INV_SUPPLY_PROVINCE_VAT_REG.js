// INV_SUPPLY_PROVINCE_VAT_REG.js

window.INV_SUPPLY_PROVINCE_VAT_REG = {
  "tables": {
    "INV_SUPPLY_PROVINCE_VAT_REG": {
      "description": "Stores all provincial VAT registration ids",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "Invoice for the supply province registration."
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country for the provincial registration."
},
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": false,
          "key_value": true,
          "info": "Province of registration."
},
        "VAT_PROVINCIAL_REG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VAT_PROVINCIAL_REGISTRATION",
          "info": "The registration ID."
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