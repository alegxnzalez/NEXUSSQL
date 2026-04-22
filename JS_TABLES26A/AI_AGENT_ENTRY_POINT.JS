// AI_AGENT_ENTRY_POINT.js

window.AI_AGENT_ENTRY_POINT = {
  "tables": {
    "AI_AGENT_ENTRY_POINT": {
      "description": "ACR entry point access required to invoke agent.",
      "columns": {
        "AI_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AI_AGENT",
          "info": "AI Agent ID."
},
        "ACR_ENTRY_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACR_ENTRY_POINT",
          "info": "ACR Entry Point ID."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "H",
                    "R"
          ]
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
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