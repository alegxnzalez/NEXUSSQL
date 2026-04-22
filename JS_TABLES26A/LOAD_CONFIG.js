// LOAD_CONFIG.js

window.LOAD_CONFIG = {
  "tables": {
    "LOAD_CONFIG": {
      "description": "Defines various valid load configurations, OSR, orientation, stacktability and row restriction.",
      "columns": {
        "LOAD_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Load configuration id."
},
        "LOAD_CONFIG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOADING_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOADING_PATTERN"
},
        "NUM_STACKING_LAYERS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Number of stacking layers. Null implies no restriction."
},
        "NUM_LOADING_ROWS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Number of loading rows. Null implies no restriction."
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
        "LOAD_CONFIG_PROFILE_D"
]
    }
  }
};