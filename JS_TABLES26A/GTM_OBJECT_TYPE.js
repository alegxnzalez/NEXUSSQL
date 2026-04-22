// GTM_OBJECT_TYPE.js

window.GTM_OBJECT_TYPE = {
  "tables": {
    "GTM_OBJECT_TYPE": {
      "description": "To maintain all the objects used in condition utility and formula calculation.",
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
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid"
},
        "GTM_OBJECT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique Object Type (Ex: Transaction, Transaction Cost Component, Transaction Party)"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the Object Type."
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This java class represents object_type using which the attributes will be retrieved or set as necessary."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": [
        "GTM_FORMULA_EXPRESSION",
        "GTM_FORMULA_EXP_IDENTIFIER",
        "GTM_OBJECT_CONDITION",
        "GTM_OBJECT_CONDITION_DETAIL",
        "GTM_OBJECT_TYPE_ATTRIBUTE",
        "GTM_OBJECT_TYPE_HIERARCHY"
]
    }
  }
};