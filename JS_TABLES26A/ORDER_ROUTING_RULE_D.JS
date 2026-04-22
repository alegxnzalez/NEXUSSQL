// ORDER_ROUTING_RULE_D.js

window.ORDER_ROUTING_RULE_D = {
  "tables": {
    "ORDER_ROUTING_RULE_D": {
      "columns": {
        "ORDER_ROUTING_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_ROUTING_RULE",
          "info": "Unique Id of the Order Routing Rule"
},
        "SEQUENCE_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number of the rule detail"
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE",
          "info": "External Lane Id for the Order Routing rule detail"
},
        "MIN_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum weight applicable to this rule (low-end inclusive)"
},
        "MIN_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum weight applicable to this rule (high-end exclusive)"
},
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum volume applicable to this rule (low-end inclusive)"
},
        "MIN_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum volume applicable to this rule (high-end exclusive)"
},
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TRANSIT_DAYS_MIN": {
          "type": "NUMBER",
          "nullable": true
},
        "TRANSIT_DAYS_MAX": {
          "type": "NUMBER",
          "nullable": true
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The transport mode to be assigned to the order"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider to be assigned to the order"
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The level of service to be assigned to the order"
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method (freight terms) to be assigned to the order"
},
        "IS_PAYMENT_METHOD_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Boolean to identify whether the payment method will override the payment method on the order"
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
      "fk_tables": []
    }
  }
};