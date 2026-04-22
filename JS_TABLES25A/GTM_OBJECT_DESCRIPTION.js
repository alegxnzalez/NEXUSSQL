// GTM_OBJECT_DESCRIPTION.js

window.GTM_OBJECT_DESCRIPTION = {
  "tables": {
    "GTM_OBJECT_DESCRIPTION": {
      "columns": {
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "info": "Object Type "
        },
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Object GID "
        },
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_LANGUAGE",
          "info": "Description Language "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
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
