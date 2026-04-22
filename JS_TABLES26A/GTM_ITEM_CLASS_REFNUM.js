// GTM_ITEM_CLASS_REFNUM.js

window.GTM_ITEM_CLASS_REFNUM = {
  "tables": {
    "GTM_ITEM_CLASS_REFNUM": {
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
        "GTM_ITEM_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ITEM_CLASSIFICATION",
          "info": "The GID for the item classification"
},
        "GTM_ITEM_CLASS_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ITEM_CLASS_REFNUM_QUAL",
          "info": "The GID for the item classification reference number qualifier."
},
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The value of the reference number."
}
      },
      "fk_tables": []
    }
  }
};