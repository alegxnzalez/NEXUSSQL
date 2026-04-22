// AUTO_ASSIGN_RULE_EVENT.js

window.AUTO_ASSIGN_RULE_EVENT = {
  "tables": {
    "AUTO_ASSIGN_RULE_EVENT": {
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE"
},
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_EVENT"
},
        "AGENT_EVENT_PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true
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