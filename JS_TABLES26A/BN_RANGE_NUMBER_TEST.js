// BN_RANGE_NUMBER_TEST.js

window.BN_RANGE_NUMBER_TEST = {
  "tables": {
    "BN_RANGE_NUMBER_TEST": {
      "description": "This table is a copy of the BN_RANGE_NUMBER table to be used by the tool for testing the BNG.  It allows testing to be completely decoupled from the live BNG data so as not to cause conflicts.",
      "columns": {
        "BN_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RANGE"
},
        "RANGE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true
},
        "BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE"
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_RULE"
},
        "BN_CONTEXT": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "STATE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "values": [
                    "POOLED",
                    "GENERATED",
                    "ASSIGNED",
                    "DESTROYED"
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
}
      },
      "fk_tables": []
    }
  }
};