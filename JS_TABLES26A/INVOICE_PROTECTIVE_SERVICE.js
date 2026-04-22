// INVOICE_PROTECTIVE_SERVICE.js

window.INVOICE_PROTECTIVE_SERVICE = {
  "tables": {
    "INVOICE_PROTECTIVE_SERVICE": {
      "description": "Codes to define temperature and ventilation requirements for cargo.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The unique identifier for the invoice."
},
        "PROT_SRV_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Protective service sequence number."
},
        "PROT_SRV_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Protective service code."
},
        "PROT_SRV_RULE_CODE": {
          "type": "VARCHAR2(9)",
          "nullable": true,
          "info": "Protective service rule code."
},
        "PROT_SRV_TEMP": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Temperature requirement."
},
        "PROT_SRV_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the temperature requirement."
},
        "PROT_SRV_TEMP_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Temperature requirement in base units."
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