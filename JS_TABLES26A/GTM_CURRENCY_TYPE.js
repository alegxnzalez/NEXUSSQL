// GTM_CURRENCY_TYPE.js

window.GTM_CURRENCY_TYPE = {
  "tables": {
    "GTM_CURRENCY_TYPE": {
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
        "GTM_CURRENCY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_CURRENCY_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_CURRENCY_TYPE_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};