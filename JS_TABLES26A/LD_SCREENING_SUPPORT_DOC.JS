// LD_SCREENING_SUPPORT_DOC.js

window.LD_SCREENING_SUPPORT_DOC = {
  "tables": {
    "LD_SCREENING_SUPPORT_DOC": {
      "columns": {
        "LDSCREENING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING_LICENSE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ITEM_ID": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING_LICENSE",
          "info": "Not used"
},
        "LICENSE_ID": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING_LICENSE",
          "info": "Not used"
},
        "SUPPORT_DOC": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "info": "Not used"
},
        "SUPPORT_DOC_DESC": {
          "type": "VARCHAR2(50)",
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