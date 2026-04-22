// LOG_COMPONENT_TYPE.js

window.LOG_COMPONENT_TYPE = {
  "tables": {
    "LOG_COMPONENT_TYPE": {
      "description": "Log Code Component. This allows logging to be active only when a corresponding code section is active. E.g., Rating logging is active only during MULTISTOP planning.",
      "columns": {
        "LOG_COMPONENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOG_COMPONENT_TYPE_XID": {
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
        "LOG_COMPONENT"
]
    }
  }
};