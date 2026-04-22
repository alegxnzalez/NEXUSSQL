// GTM_REGIME_DOCUMENT_DEF.js

window.GTM_REGIME_DOCUMENT_DEF = {
  "tables": {
    "GTM_REGIME_DOCUMENT_DEF": {
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
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "key_value": true,
          "foreign_key": "GTM_REGIME"
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};