// SHIPPING_AGENT_TYPE.js

window.SHIPPING_AGENT_TYPE = {
  "tables": {
    "SHIPPING_AGENT_TYPE": {
      "description": "This table keeps the user defined shipping agent types.",
      "columns": {
        "SHIPPING_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The primary key of the table"
},
        "SHIPPING_AGENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "The detail description of this type."
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
        "SHIPPING_AGENT_CONTACT",
        "SHIPPING_AGENT_TYPE_D"
]
    }
  }
};