// SHIPPING_AGENT_RULE.js

window.SHIPPING_AGENT_RULE = {
  "tables": {
    "SHIPPING_AGENT_RULE": {
      "columns": {
        "SHIPPING_AGENT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The primary key of the table"
},
        "SHIPPING_AGENT_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "Defines the class name which implements this rule."
},
        "RULE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SHIPMENT_RESPONSIBILITY",
                    "PAYMENT_METHOD",
                    "AGENT_ASSIGNMENT"
          ],
          "info": "Defines the rule type."
},
        "PARAMETER_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
                    "AGENT_PRIORITY_TYPE"
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "SHIPPING_AGENT_TYPE_D"
]
    }
  }
};