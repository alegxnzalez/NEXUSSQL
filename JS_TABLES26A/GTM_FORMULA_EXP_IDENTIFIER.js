// GTM_FORMULA_EXP_IDENTIFIER.js

window.GTM_FORMULA_EXP_IDENTIFIER = {
  "tables": {
    "GTM_FORMULA_EXP_IDENTIFIER": {
      "description": "To capture details of the formula/expression like attributes and reference qualifiers of the formula.",
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
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Gid"
},
        "GTM_IDENTIFIER": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Identifiers for the Expression."
},
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Object type."
},
        "GTM_OBJECT_TYPE_ATTRIBUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_OBJECT_TYPE_ATTRIBUTE",
          "info": "Object type attribute."
},
        "GTM_OBJ_TYPE_ATTR_REF_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Object type attribute reference qualifier like  BUYING COMMISSION etc."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "GTM_OBJ_TYPE_ATTRIBUTE_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure of the object attribute."
}
      },
      "fk_tables": []
    }
  }
};