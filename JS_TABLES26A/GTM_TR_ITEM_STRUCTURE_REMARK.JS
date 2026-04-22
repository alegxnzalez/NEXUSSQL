// GTM_TR_ITEM_STRUCTURE_REMARK.js

window.GTM_TR_ITEM_STRUCTURE_REMARK = {
  "tables": {
    "GTM_TR_ITEM_STRUCTURE_REMARK": {
      "columns": {
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
},
        "GTM_TR_ITEM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TR_ITEM_STRUCTURE",
          "info": "Unique ID to represent a transaction Line Item Struture."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "A pointer to the remark type. For example: Lot Number, Change Request Number etc"
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "User entered remark on the trade item structure."
}
      },
      "fk_tables": []
    }
  }
};