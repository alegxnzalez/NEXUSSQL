// SHIPPING_AGENT.js

window.SHIPPING_AGENT = {
  "tables": {
    "SHIPPING_AGENT": {
      "columns": {
        "SHIPPING_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The internal id of the shipping agent. "
        },
        "SHIPPING_AGENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external id of the shipping agent. "
        },
        "ACCOUNT_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Internal customer/vendor number."
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
        "AGENT_TEXT",
        "SHIPPING_AGENT_CONTACT",
        "SHIPPING_AGENT_TEXT"
      ]
    }
  }
};
