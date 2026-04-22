// DOCUMENT_DEF_TEMPLATE_MAP.js

window.DOCUMENT_DEF_TEMPLATE_MAP = {
  "tables": {
    "DOCUMENT_DEF_TEMPLATE_MAP": {
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
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF"
},
        "DOCUMENT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT"
},
        "COMMENTS": {
          "type": "VARCHAR2(240)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};