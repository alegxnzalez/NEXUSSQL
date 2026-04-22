// PACKAGED_ITEM_TYPE.js

window.PACKAGED_ITEM_TYPE = {
  "tables": {
    "PACKAGED_ITEM_TYPE": {
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
        "PACKAGED_ITEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PACKAGED_ITEM_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true
}
      },
      "fk_tables": [
        "PACKAGED_ITEM"
]
    }
  }
};