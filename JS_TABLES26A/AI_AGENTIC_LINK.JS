// AI_AGENTIC_LINK.js

window.AI_AGENTIC_LINK = {
  "tables": {
    "AI_AGENTIC_LINK": {
      "description": "URL prefix for an Agentic AI receiver of REST requests.",
      "columns": {
        "AI_AGENTIC_LINK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Agentic AI Link GID."
},
        "AI_AGENTIC_LINK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Agentic AI Link XID."
},
        "AI_AGENTIC_TRUST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AI_AGENTIC_TRUST",
          "info": "The trust relationship for this link."
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
},
        "AI_AGENTIC_URL": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Agentic URL for agent invocation."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the agentic link is staged and cannot be removed."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AI_AGENT"
]
    }
  }
};