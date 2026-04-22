// TRANSPORT_NETWORK.js

window.TRANSPORT_NETWORK = {
  "tables": {
    "TRANSPORT_NETWORK": {
      "columns": {
        "TRANSPORT_NETWORK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "TRANSPORT_NETWORK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TRANSPORT_NETWORK_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
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
        "TRANSPORT_NETWORK_INV_PARTY",
        "TRANSPORT_NETWORK_SCHEDULE"
      ]
    }
  }
};
