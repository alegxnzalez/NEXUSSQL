// GTM_REGISTRATION_TYPE.js

window.GTM_REGISTRATION_TYPE = {
  "tables": {
    "GTM_REGISTRATION_TYPE": {
      "columns": {
        "GTM_REGISTRATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_REGISTRATION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "REGISTRATION_TYPE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
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
        "GTM_REGISTRATION"
]
    }
  }
};