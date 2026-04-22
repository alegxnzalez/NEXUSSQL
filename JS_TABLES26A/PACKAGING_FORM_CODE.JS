// PACKAGING_FORM_CODE.js

window.PACKAGING_FORM_CODE = {
  "tables": {
    "PACKAGING_FORM_CODE": {
      "description": "THIS TABLE STORES THE EDI 211 PACKAGING FORM CODES.   THE FORM CODE DESCRIBES THE PACKAGING FORM BUT NOT THE TYPE OF PACKAGING FORM.  FOR EXAMPLE CTN WOULD MEAN CARTON AND THIS WOULD COVER ALL TYPES AND SIZES OF CARTON.    LINKS TO THIS TABLE ARE CURRENTLY INCLUDED IN THE ITEM TABLE AS WELL AS THE SHIP_UNIT_SPEC TABLE.",
      "columns": {
        "PACKAGING_FORM_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "PACKAGING_FORM_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "PACKAGING_FORM_CODE_REFNUM",
        "SHIP_UNIT_SPEC"
]
    }
  }
};