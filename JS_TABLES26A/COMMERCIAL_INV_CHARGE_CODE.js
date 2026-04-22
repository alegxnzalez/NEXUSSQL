// COMMERCIAL_INV_CHARGE_CODE.js

window.COMMERCIAL_INV_CHARGE_CODE = {
  "tables": {
    "COMMERCIAL_INV_CHARGE_CODE": {
      "columns": {
        "COMMERCIAL_INV_CHARGE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Primary Key for this table."
},
        "COMMERCIAL_INV_CHARGE_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the commerical invoice charge code."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "COMMERCIAL_INVOICE_CHARGE"
]
    }
  }
};