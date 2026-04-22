// GL_KEY_COMPONENT.js

window.GL_KEY_COMPONENT = {
  "tables": {
    "GL_KEY_COMPONENT": {
      "columns": {
        "GL_KEY_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GL_KEY_COMPONENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GL_KEY_COMPONENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GL_KEY_COMPONENT_TYPE"
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
        "GL_KEY_COMPONENT_PARAM",
        "GL_LOOKUP_KEY_D"
]
    }
  }
};