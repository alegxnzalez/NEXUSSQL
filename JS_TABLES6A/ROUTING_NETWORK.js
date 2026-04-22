// ROUTING_NETWORK.js

window.ROUTING_NETWORK = {
  "tables": {
    "ROUTING_NETWORK": {
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
        "ROUTING_NETWORK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ROUTING_NETWORK_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "MAX_NUM_INTERMEDIATE_PTS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ROUTING_NETWORK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        }
      },
      "fk_tables": [
        "LEG",
        "ROUTING_CONSTRAINT",
        "ROUTING_NETWORK_DETAIL"
      ]
    }
  }
};
