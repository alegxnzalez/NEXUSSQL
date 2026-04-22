// GTM_CATEGORY.js

window.GTM_CATEGORY = {
  "tables": {
    "GTM_CATEGORY": {
      "columns": {
        "GTM_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
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
        "GTM_TYPE"
]
    }
  }
};