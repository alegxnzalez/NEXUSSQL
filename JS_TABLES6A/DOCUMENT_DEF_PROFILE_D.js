// DOCUMENT_DEF_PROFILE_D.js

window.DOCUMENT_DEF_PROFILE_D = {
  "tables": {
    "DOCUMENT_DEF_PROFILE_D": {
      "columns": {
        "DOCUMENT_DEF_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF_PROFILE"
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF"
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
