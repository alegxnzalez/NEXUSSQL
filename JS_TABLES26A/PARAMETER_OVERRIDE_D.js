// PARAMETER_OVERRIDE_D.js

window.PARAMETER_OVERRIDE_D = {
  "tables": {
    "PARAMETER_OVERRIDE_D": {
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
        "PARAMETER_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PARAMETER_OVERRIDE"
},
        "QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "OVERRIDEN_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "LOGIC_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOGIC_CONFIG_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PARAMETER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};