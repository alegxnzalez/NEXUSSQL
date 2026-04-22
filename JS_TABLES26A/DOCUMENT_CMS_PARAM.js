// DOCUMENT_CMS_PARAM.js

window.DOCUMENT_CMS_PARAM = {
  "tables": {
    "DOCUMENT_CMS_PARAM": {
      "description": "Document parameters",
      "columns": {
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT",
          "info": "Document ID"
},
        "PARAM_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name"
},
        "PARAM_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Parameter value"
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