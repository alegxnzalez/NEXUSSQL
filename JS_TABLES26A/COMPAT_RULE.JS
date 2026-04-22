// COMPAT_RULE.js

window.COMPAT_RULE = {
  "tables": {
    "COMPAT_RULE": {
      "description": "Rules to determine whether an object is compatible with other objects",
      "columns": {
        "COMPAT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "COMPAT_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "COMPAT_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COMPAT_RULE_TYPE"
},
        "MAIN_OBJECT_GID": {
          "type": "VARCHAR2(101)",
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
        "COMPAT_RULE_D"
]
    }
  }
};