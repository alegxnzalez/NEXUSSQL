// GL_KEY_COMPONENT_TYPE.js

window.GL_KEY_COMPONENT_TYPE = {
  "tables": {
    "GL_KEY_COMPONENT_TYPE": {
      "description": "Defines possible types of components for hierarchy used to define general ledger lookup keys",
      "columns": {
        "GL_KEY_COMPONENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global identifier for the component type of the key."
},
        "GL_KEY_COMPONENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the component type of the key."
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": false,
          "info": "Java class to obtain the information."
},
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "GL_CODE_ASSIGN_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "O",
                    "S",
                    "I",
                    "B"
          ],
          "info": "This will indicate whether the component type is to be part of an Order lookup key or a shipment lookup key or a invoice or a bill."
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "GL_KEY_COMPONENT",
        "GL_KEY_COMPONENT_TYPE_PARAM"
]
    }
  }
};