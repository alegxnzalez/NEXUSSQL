// OBJECT_LIST.js

window.OBJECT_LIST = {
  "tables": {
    "OBJECT_LIST": {
      "columns": {
        "OBJECT_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OBJECT_TYPE"
},
        "OBJECT_LIST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
      "fk_tables": [
        "COMPAT_RULE_D",
        "OBJECT_LIST_D"
]
    }
  }
};