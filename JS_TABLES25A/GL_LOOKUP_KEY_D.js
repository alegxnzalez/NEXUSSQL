// GL_LOOKUP_KEY_D.js

window.GL_LOOKUP_KEY_D = {
  "tables": {
    "GL_LOOKUP_KEY_D": {
      "columns": {
        "GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_LOOKUP_KEY"
        },
        "RANK": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GL_KEY_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_KEY_COMPONENT"
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
