// ROUTING_CONSTRAINT.js

window.ROUTING_CONSTRAINT = {
  "tables": {
    "ROUTING_CONSTRAINT": {
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
        "ROUTING_CONSTRAINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ROUTING_CONSTRAINT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROUTING_CONSTRAINT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "ROUTING_CONSTRAINT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "N",
                    "A"
          ],
          "info": "Valid values are 'I', 'N' and 'A'. I - Itinerary, N - Network, A - All"
},
        "ROUTING_NETWORK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_NETWORK"
},
        "ITINERARY_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG"
},
        "MUST_SHIP_DIRECT": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
}
      },
      "fk_tables": [
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ROUTING_CONSTRAINT_D"
]
    }
  }
};