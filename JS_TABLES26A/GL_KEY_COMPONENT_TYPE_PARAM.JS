// GL_KEY_COMPONENT_TYPE_PARAM.js

window.GL_KEY_COMPONENT_TYPE_PARAM = {
  "tables": {
    "GL_KEY_COMPONENT_TYPE_PARAM": {
      "description": "Defines parameters passed to GL_KEY_COMPONENT_TYPE java classes that enable users to create a customized component of a general ledger key based on a component type",
      "columns": {
        "GL_KEY_COMPONENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_KEY_COMPONENT_TYPE",
          "info": "GID for the component type of the key."
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Order of parameters for the component type."
},
        "FIELD_LABEL": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Label for the field."
},
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "(S)tring, (B)oolean, (I)nteger, (N)umber, (D)ouble, (G)id, (U)om, (C)har, (P)ercent"
},
        "UOM_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If the data_type is (U)om, the type of uom: DISTANCE, CURRENCY, WEIGHT, etc."
},
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the data_type is a (G)id, then the saved query to get the value for the gid."
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
        "GL_KEY_COMPONENT_PARAM"
]
    }
  }
};