// ROUTING_SEQUENCE.js

window.ROUTING_SEQUENCE = {
  "tables": {
    "ROUTING_SEQUENCE": {
      "columns": {
        "ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ROUTING_SEQUENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "SEQUENCE_PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": false
},
        "ALLOW_MULTIPLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "CORPORATION",
        "LOCATION",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE"
]
    }
  }
};