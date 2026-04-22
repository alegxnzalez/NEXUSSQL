// RATE_ATTRIBUTE.js

window.RATE_ATTRIBUTE = {
  "tables": {
    "RATE_ATTRIBUTE": {
      "description": "Contains the valid listing of attributes, or rate characteristics.  Each attribute is associated with a java class.  Each java class will contain one or more fields, which determines the fields the user sees for entering this type of rate information.  One or more attributes are then associated with the offering type within the RATE_ATTRIBUTE_JOIN table.",
      "columns": {
        "RATE_ATTRIBUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_ATTRIBUTE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "RATE_ATTRIBUTE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "IS_COMMON": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_COST_RELATED": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "RATE_ATTRIBUTE_JOIN",
        "RATE_COSTING_SEQUENCE"
]
    }
  }
};