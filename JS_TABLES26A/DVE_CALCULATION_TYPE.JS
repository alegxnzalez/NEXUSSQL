// DVE_CALCULATION_TYPE.js

window.DVE_CALCULATION_TYPE = {
  "tables": {
    "DVE_CALCULATION_TYPE": {
      "columns": {
        "DVE_CALCULATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DVE_CALCULATION_LINE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ITEM_ID": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DVE_CALCULATION_LINE",
          "info": "The GC3 Sship Unit Line Item GID which is the basis for this duty calculation line item service request."
},
        "TAX_ID": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "info": "The name of the duty, tax or fee contained in this line item result."
},
        "TAX_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of the duty, tax of fee calculated for this line item."
},
        "TAX_FORMULA": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The formula for the duty, tax of fee calculated for this line item."
},
        "TAX_MESSAGE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Not used"
},
        "TAX_DISCLAIMER": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Not used"
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
      "fk_tables": []
    }
  }
};