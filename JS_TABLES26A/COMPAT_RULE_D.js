// COMPAT_RULE_D.js

window.COMPAT_RULE_D = {
  "tables": {
    "COMPAT_RULE_D": {
      "columns": {
        "COMPAT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMPAT_RULE"
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true
},
        "COMPAT_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "COMPAT_OBJECT_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OBJECT_LIST"
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_SOFT_CONSTRAINT": {
          "type": "VARCHAR2(1)",
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
}
      },
      "fk_tables": []
    }
  }
};