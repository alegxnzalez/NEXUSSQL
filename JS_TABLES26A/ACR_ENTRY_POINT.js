// ACR_ENTRY_POINT.js

window.ACR_ENTRY_POINT = {
  "tables": {
    "ACR_ENTRY_POINT": {
      "description": "List of code entry points controllable by access control roles. These entry points are determined by OTM components and include servlets, actions, queries, topics, mbeans and topics.",
      "columns": {
        "ACR_ENTRY_POINT_GID": {
          "type": "VARCHAR2(451)",
          "nullable": false,
          "key_value": true,
          "info": "OTM Entry Point GID"
},
        "ACR_ENTRY_POINT_XID": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "info": "OTM Entry Point XID"
},
        "ACR_ENTRY_POINT_TAG": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "info": "A mapping into OTM, defining the component access - generally a Java class name with an optional parameter"
},
        "ACR_ENTRY_POINT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "Servlet",
                    "Action",
                    "Query",
                    "Topic",
                    "Bean",
                    "Method",
                    "MBean",
                    "MMethod",
                    "Log",
                    "Metric",
                    "Other"
          ],
          "info": "Type of OTM component"
},
        "ACR_ENTRY_POINT_PARENT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "foreign_key": "ACR_ENTRY_POINT",
          "info": "For beans and managed beans, entry point to inherit access from"
},
        "ACR_ENTRY_POINT_VERSION": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "Version information to identify old, invalid records."
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
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
}
      },
      "fk_tables": [
        "ACR_ENTRY_POINT",
        "ACR_ROLE_ENTRY_POINT",
        "AI_AGENT_ENTRY_POINT"
]
    }
  }
};