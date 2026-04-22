// GTM_PROD_CLASS_CODE_DESC.js

window.GTM_PROD_CLASS_CODE_DESC = {
  "tables": {
    "GTM_PROD_CLASS_CODE_DESC": {
      "description": "Description of production classification code.",
      "columns": {
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
},
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LANGUAGE"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": false
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