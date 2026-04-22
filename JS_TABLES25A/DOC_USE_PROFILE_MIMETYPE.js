// DOC_USE_PROFILE_MIMETYPE.js

window.DOC_USE_PROFILE_MIMETYPE = {
  "tables": {
    "DOC_USE_PROFILE_MIMETYPE": {
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
        "DOCUMENT_USE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_USE_PROFILE",
          "info": "Contains unique identifier for document use profile. "
        },
        "MIME_TYPE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies allowed mime type for the document use profile."
        }
      },
      "fk_tables": []
    }
  }
};
