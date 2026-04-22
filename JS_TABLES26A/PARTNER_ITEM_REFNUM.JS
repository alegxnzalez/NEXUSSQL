// PARTNER_ITEM_REFNUM.js

window.PARTNER_ITEM_REFNUM = {
  "tables": {
    "PARTNER_ITEM_REFNUM": {
      "description": "This table Contains the reference number for partner item",
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
        "PARTNER_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PARTNER_ITEM",
          "info": "Specifies the unique identifier across all domains for the partner item"
},
        "PARTNER_ITEM_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PARTNER_ITEM_REFNUM_QUAL",
          "info": "The unique trade item reference qualifier id."
},
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The reference number value for trade item"
}
      },
      "fk_tables": []
    }
  }
};