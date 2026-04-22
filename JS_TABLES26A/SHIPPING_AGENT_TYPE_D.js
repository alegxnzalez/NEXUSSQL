// SHIPPING_AGENT_TYPE_D.js

window.SHIPPING_AGENT_TYPE_D = {
  "tables": {
    "SHIPPING_AGENT_TYPE_D": {
      "description": "The details defined for the shipping agent type.",
      "columns": {
        "SHIPPING_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPPING_AGENT_TYPE"
},
        "SHIPPING_AGENT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPPING_AGENT_RULE",
          "info": "This field keeps the rule ID which will be applied to this type of shipping agent."
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "This field defines the sequence the rules will be applied to this type of shipping agent."
},
        "PARAMETER_VALUE": {
          "type": "VARCHAR2(256)",
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};