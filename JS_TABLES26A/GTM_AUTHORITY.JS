// GTM_AUTHORITY.js

window.GTM_AUTHORITY = {
  "tables": {
    "GTM_AUTHORITY": {
      "columns": {
        "GTM_AUTHORITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_AUTHORITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "AUTHORITY_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true
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
        "GTM_JURISDICTION"
]
    }
  }
};