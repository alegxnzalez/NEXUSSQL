// GTM_OBJECT_CONDITION_DETAIL.js

window.GTM_OBJECT_CONDITION_DETAIL = {
  "tables": {
    "GTM_OBJECT_CONDITION_DETAIL": {
      "description": "To capture condition details like whether it is single/combination/sub-selection condition type and on which object with attribute and parameter details. Example : Simple Condition like 'transcation transport mode in air or ocean'. Here transaction is the object.Transport mode is attribute ands air, ocean are parameter values.",
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
        "GTM_OBJECT_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_OBJECT_CONDITION",
          "info": "Gid."
},
        "GTM_OBJECT_CONDITION_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Condition Sequence."
},
        "GTM_OBJECT_CONDITION_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "S",
                    "C",
                    "SS"
          ],
          "info": "Condition Type (Simple / Combination / Sub-Select)"
},
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Object Type Gid."
},
        "GTM_OBJECT_TYPE_ATTRIBUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_OBJECT_TYPE_ATTRIBUTE",
          "info": "Attribute of Object Type Selected like Transport mode"
},
        "GTM_OBJ_CONDITION_PARAMETERS": {
          "type": "CLOB",
          "nullable": true,
          "info": "Condition Parameters ( 'Air', 'OCEAN' are parameters for condition on Transport Mode)"
}
      },
      "fk_tables": []
    }
  }
};