// GL_KEY_COMPONENT_PARAM.js

window.GL_KEY_COMPONENT_PARAM = {
  "tables": {
    "GL_KEY_COMPONENT_PARAM": {
      "columns": {
        "GL_KEY_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_KEY_COMPONENT"
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_KEY_COMPONENT_TYPE_PARAM"
},
        "PARAM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PARAM_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "GL_KEY_COMPONENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_KEY_COMPONENT_TYPE_PARAM"
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