// DOCUMENT_CONTEXT.js

window.DOCUMENT_CONTEXT = {
  "tables": {
    "DOCUMENT_CONTEXT": {
      "description": "This table holds context value for a document context qualifier for a document.",
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
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT",
          "info": "Represents the document"
},
        "DOCUMENT_CONTEXT_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_CONTEXT_QUALIFIER",
          "info": "Represents the document context qualifier."
},
        "DOCUMENT_CONTEXT_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "info": "Represents the value of a document context qualifier."
}
      },
      "fk_tables": []
    }
  }
};