// BN_RANGE_NUMBER.js

window.BN_RANGE_NUMBER = {
  "tables": {
    "BN_RANGE_NUMBER": {
      "description": "Keeps track of all the numbers generated from a range instance number if audit is on.",
      "columns": {
        "BN_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RANGE",
          "info": "The range from which this number is generated."
},
        "RANGE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "The number generated."
},
        "BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The business number type to which the  BN number belongs.  This is part of a back reference from a BN number to a range number."
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The primary object for which the range number is used.  For example, the shipment_gid is the object_gid when a shipment_refnum uses range number."
},
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_RULE",
          "info": "The Business Rule used to generate the range number, if any."
},
        "BN_CONTEXT": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Contains the context used for the business number generation."
},
        "STATE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "values": [
                    "POOLED",
                    "GENERATED",
                    "ASSIGNED",
                    "DESTROYED"
          ],
          "info": "The state of the number.  Numbers are pooled, generated, assigned, and destroyed."
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